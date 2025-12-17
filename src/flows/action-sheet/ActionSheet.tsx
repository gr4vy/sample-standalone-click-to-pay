import { Stack, Text, TextLink, Tooltip, Icon } from '@gr4vy/poutine-react'
import {
  CardNumber,
  ClickToPay,
  ExpiryDate,
  SecureFields as SecureFieldsReact,
  SecurityCode,
  useSecureFields,
} from '@gr4vy/secure-fields-react'
import { useRouter } from '@tanstack/react-router'
import { useRef, useEffect, type MouseEvent, memo } from 'react'
import {
  CardForm,
  ErrorAlert,
  Loader,
  PaymentMethods,
  Sheet,
  SubmitButton,
  useCheckout,
} from '@/components'
import { createTransaction, env } from '@/utils'

const inputClass = 'w-full rounded-rounded py-[4px]'

const SecureFields = memo(
  SecureFieldsReact,
  (prevProps, nextProps) => prevProps.sessionId === nextProps.sessionId
)

const Form = () => {
  const { secureFields } = useSecureFields()
  const {
    canSubmit,
    user,
    isPending,
    method,
    setMethod,
    isSubmitBtnHidden,
    setIsSubmitBtnHidden,
    error,
  } = useCheckout()

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitBtnHidden?.(true)
    secureFields.submit()
  }

  const handleSheetClose = () => {
    setMethod?.(undefined)
    setIsSubmitBtnHidden?.(true)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-24">
      <PaymentMethods>
        {method?.id === 'click-to-pay' && (
          <Sheet open onClose={handleSheetClose}>
            {error && <ErrorAlert error={error} />}
            <ClickToPay
              srcDpaId={env.VITE_SRC_DPA_ID}
              dpaName={env.VITE_DPA_NAME}
              dpaLocale="en_AU"
              cardBrands={['mastercard', 'visa', 'amex']}
              consentCheckbox="#click-to-pay-consent-checkbox"
              rememberMeCheckbox="#click-to-pay-remember-me-checkbox"
              learnMoreLink="#click-to-pay-learn-more-link"
              email={user?.email}
              authenticate={{ consumer: true, checkout: true }}
            />
            {isPending && <Loader marginBottom={12} />}
            <CardForm hidden={isPending}>
              <CardForm.FieldGroup gridColumn="span 12">
                <label htmlFor="cc-number">Card Number</label>
                <CardNumber className={inputClass} />
              </CardForm.FieldGroup>
              <CardForm.FieldGroup gridColumn="span 6">
                <label htmlFor="cc-expiry-date">Expiry Date</label>
                <ExpiryDate className={inputClass} />
              </CardForm.FieldGroup>
              <CardForm.FieldGroup gridColumn="span 6">
                <label htmlFor="cc-security-code">Security Code</label>
                <SecurityCode className={inputClass} />
              </CardForm.FieldGroup>
              <CardForm.FieldGroup gridColumn="span 12" gap={12} marginTop={12}>
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
                    Remember me in this browser{' '}
                    <Tooltip
                      content="If you’re remembered, you won’t need to enter a code
                          next time to securely access your saved cards. Not
                          recommended for public or shared devices because this
                          uses cookies."
                    >
                      <Icon name="info" size="small" />
                    </Tooltip>
                  </Text>
                </Stack>
              </CardForm.FieldGroup>
            </CardForm>
            <SubmitButton
              disabled={!canSubmit}
              loading={isPending}
              hidden={isSubmitBtnHidden}
              className="mt-8"
            />
          </Sheet>
        )}
      </PaymentMethods>
    </form>
  )
}

export const ActionSheet = () => {
  const router = useRouter()
  const {
    sessionId,
    setCanSubmit,
    setError,
    user,
    setUser,
    setIsPending,
    setIsSubmitBtnHidden,
    clickToPayMethod,
    setClickToPayMethod,
    transactionCallback,
    transactionErrorCallback,
    method,
  } = useCheckout()
  const clickToPayMethodRef = useRef(clickToPayMethod)

  const handleCardVaultSuccess = () => {
    setIsPending?.(true)
    createTransaction({
      amount: 1299,
      currency: 'AUD',
      payment_method: {
        id: sessionId,
        method: 'checkout-session',
      },
    })
      .then(transactionCallback)
      .catch(transactionErrorCallback)
  }

  const handleCardVaultFailure = () =>
    setError?.(new Error('Could not vault the card'))

  const handleFormChange = ({ complete }: { complete: boolean }) => {
    if (clickToPayMethodRef.current === 'card') {
      setCanSubmit?.(complete)
    }
  }

  const handleMethodChange = ({ method }: { method: string }) =>
    setClickToPayMethod?.(method)

  const handleClickToPayReady = () => {
    setIsSubmitBtnHidden?.(false)
  }

  const handleClickToPayError = ({ error }: { error: string }) => {
    if (error !== 'USER_NOT_RECOGNIZED') {
      setError?.(new Error(error))
    }
  }

  const handleClickToPaySignOut = () => {
    setUser?.({ email: '', mobileNumber: '' })
    setIsSubmitBtnHidden?.(true)
    router.history.back()
  }

  useEffect(() => {
    clickToPayMethodRef.current = clickToPayMethod
    setCanSubmit?.(clickToPayMethod === 'click-to-pay')
  }, [setCanSubmit, clickToPayMethod, user])

  if (!sessionId) return null

  return (
    <SecureFields
      key={method?.id}
      gr4vyId={env.VITE_GR4VY_ID}
      environment={env.VITE_GR4VY_ENVIRONMENT}
      sessionId={sessionId}
      debug
      onCardVaultSuccess={handleCardVaultSuccess}
      onCardVaultFailure={handleCardVaultFailure}
      onFormChange={handleFormChange}
      onMethodChange={handleMethodChange}
      onClickToPayReady={handleClickToPayReady}
      onClickToPayError={handleClickToPayError}
      onClickToPaySignOut={handleClickToPaySignOut}
    >
      <Form />
    </SecureFields>
  )
}
