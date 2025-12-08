import {
  Box,
  Stack,
  Text,
  Grid,
  GridItem,
  TextLink,
} from '@gr4vy/poutine-react'
import {
  CardForm,
  CardNumber,
  ClickToPay,
  ClickToPaySignIn,
  ExpiryDate,
  SecureFields,
  SecurityCode,
  useSecureFields,
} from '@gr4vy/secure-fields-react'
import { useNavigate } from '@tanstack/react-router'
import {
  Divider,
  Loader,
  PaymentMethods,
  SubmitButton,
  User,
  useCheckout,
} from '@/components'
import { createTransaction, env } from '@/utils'
import type { MouseEvent } from 'react'

const inputClass = 'w-full rounded-rounded py-[4px]'

const Form = ({ canSubmit }: { canSubmit: boolean }) => {
  const { secureFields } = useSecureFields()
  const { user, isPending, setIsPending } = useCheckout()

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsPending?.(true)
    secureFields.submit()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <PaymentMethods>
        <Box marginTop={8}>
          <ClickToPay
            srcDpaId={env.VITE_SRC_DPA_ID}
            dpaName={env.VITE_DPA_NAME}
            dpaLocale="en_AU"
            cardBrands={['mastercard', 'visa', 'amex']}
            consentCheckbox="#click-to-pay-consent-checkbox"
            rememberMeCheckbox="#click-to-pay-remember-me-checkbox"
            learnMoreLink="#click-to-pay-learn-more-link"
            email={user?.email}
            // email="luca@gr4vy.com"
            authenticate={{ consumer: true, checkout: true }}
          />
          <ClickToPaySignIn>
            {isPending && <Loader marginBottom={12} />}
            <Text>Please log-in to access your saved cards.</Text>
            <Divider>Or enter card manually</Divider>
          </ClickToPaySignIn>
          <CardForm>
            <Grid rowGap={12} columnGap={12}>
              <GridItem gridColumn="span 12">
                <Stack gap={8}>
                  <label htmlFor="cc-number">Card Number</label>
                  <CardNumber className={inputClass} />
                </Stack>
              </GridItem>
              <GridItem gridColumn="span 6">
                <Stack gap={8}>
                  <label htmlFor="cc-expiry-date">Expiry Date</label>
                  <ExpiryDate className={inputClass} />
                </Stack>
              </GridItem>
              <GridItem gridColumn="span 6">
                <Stack gap={8}>
                  <label htmlFor="cc-security-code">Security Code</label>
                  <SecurityCode className={inputClass} />
                </Stack>
              </GridItem>
              <GridItem gridColumn="span 12" marginTop={12}>
                <Stack gap={12}>
                  <Stack direction="row" alignItems="flex-start" gap={8}>
                    <input
                      type="checkbox"
                      id="click-to-pay-consent-checkbox"
                      className="mt-[5px]"
                    />
                    <label htmlFor="click-to-pay-consent-checkbox">
                      Save my information with Mastercard{' '}
                      <TextLink
                        href="javascript:void(0)"
                        id="click-to-pay-learn-more-link"
                      >
                        Click to Pay
                      </TextLink>{' '}
                      for fast, secure checkout
                    </label>
                  </Stack>
                  <Stack direction="row" alignItems="flex-start" gap={8}>
                    <input
                      type="checkbox"
                      id="click-to-pay-remember-me-checkbox"
                      className="mt-[5px]"
                    />
                    <Text margin="none" padding="none" lineHeight={20}>
                      Remember me in this browser
                    </Text>
                  </Stack>
                </Stack>
              </GridItem>
            </Grid>
          </CardForm>
        </Box>
      </PaymentMethods>
      <SubmitButton disabled={!canSubmit} loading={isPending} />
    </form>
  )
}

export const Inline = () => {
  const {
    method,
    type,
    sessionId,
    canSubmit,
    setCanSubmit,
    setIsPending,
    setError,
  } = useCheckout()
  const navigate = useNavigate()

  if (!sessionId) return null

  return (
    <SecureFields
      gr4vyId={env.VITE_GR4VY_ID}
      environment={env.VITE_GR4VY_ENVIRONMENT}
      sessionId={sessionId}
      debug
      onCardVaultSuccess={async () => {
        const transaction = await createTransaction({
          amount: 1299,
          currency: 'AUD',
          payment_method: {
            id: sessionId,
            method: 'checkout-session',
          },
        })
        setIsPending?.(false)
        setCanSubmit?.(false)
        if ('id' in transaction) {
          navigate({ to: '/success', state: { method, type, transaction } })
        } else {
          navigate({ to: '/failure', state: { method, type, transaction } })
        }
      }}
      onCardVaultFailure={() =>
        setError?.(new Error('Could not vault the card'))
      }
      onFormChange={({ complete }: { complete: boolean }) =>
        setCanSubmit?.(complete)
      }
      onMethodChange={({ method }: { method: string }) => {
        if (method === 'click-to-pay') {
          setCanSubmit?.(true)
        }
      }}
    >
      <User />
      <Form canSubmit={!!canSubmit} />
    </SecureFields>
  )
}
