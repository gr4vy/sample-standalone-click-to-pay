import { Box, Stack, Text } from '@gr4vy/poutine-react'
import { useState, type PropsWithChildren } from 'react'
import type { UserFormState } from './User'

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
      <Box hidden={active !== id}>{children}</Box>
    </li>
  )
}

export interface PaymentMethodsProps {
  checkoutType: 'inline' | 'overlay' | 'action-sheet'
  user?: UserFormState
  onClick: (id: string) => void
}

export const PaymentMethods = ({
  checkoutType,
  user,
  onClick,
}: PaymentMethodsProps) => {
  const [active, setActive] = useState('click-to-pay')

  const handleOnClick = (id: string, name: string) => {
    setActive(id)
    onClick(name)
  }

  return (
    <Stack gap={12}>
      <Text as="h3">Payment methods</Text>
      <ul className="space-y-8">
        <PaymentMethod
          id="click-to-pay"
          name="Click to Pay"
          active={active}
          onClick={handleOnClick}
        >
          <Box marginTop={8}>
            <Text>{checkoutType} UX flow content</Text>
            <Text>{user?.email || user?.phoneNumber}</Text>
          </Box>
        </PaymentMethod>
        <PaymentMethod
          id="card"
          name="Card"
          active={active}
          onClick={handleOnClick}
        />
        <PaymentMethod
          id="paypal"
          name="PayPal"
          active={active}
          onClick={handleOnClick}
        />
      </ul>
    </Stack>
  )
}
