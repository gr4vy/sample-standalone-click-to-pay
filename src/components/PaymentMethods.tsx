import { Box, Stack, Text } from '@gr4vy/poutine-react'
import { type PropsWithChildren } from 'react'
import { useCheckout } from './Checkout'

export interface PaymentMethodProps extends PropsWithChildren {
  active?: string
  id: string
  name: string
  onClick: (id: string, name: string) => void
}

const PaymentMethod = ({
  active,
  children,
  id,
  name,
  onClick,
}: PaymentMethodProps) => {
  return (
    <li
      className={`cursor-pointer rounded-sm border-[1px] border-gray-40 px-3.5 py-3 ${active === id ? 'border-gray-90' : ''}`}
      onClick={() => onClick(id, name)}
    >
      <strong>{name}</strong>
      {active === id && <Box>{children}</Box>}
    </li>
  )
}

export const PaymentMethods = ({ children }: PropsWithChildren) => {
  const { method, setMethod } = useCheckout()

  const handleOnClick = (id: string, name: string) => {
    setMethod?.({ id, name })
  }

  return (
    <Stack gap={12}>
      <Text as="h3">Payment methods</Text>
      <ul className="space-y-8">
        <PaymentMethod
          id="click-to-pay"
          name="Click to Pay"
          active={method?.id}
          onClick={handleOnClick}
        >
          {children}
        </PaymentMethod>
        <PaymentMethod
          id="card"
          name="Card"
          active={method?.id}
          onClick={handleOnClick}
        />
        <PaymentMethod
          id="paypal"
          name="PayPal"
          active={method?.id}
          onClick={handleOnClick}
        />
      </ul>
    </Stack>
  )
}
