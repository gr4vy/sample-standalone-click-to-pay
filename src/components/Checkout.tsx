import { Button, Stack, type ButtonProps } from '@gr4vy/poutine-react'
import { createLink, type LinkProps } from '@tanstack/react-router'
import { useState } from 'react'
import { OrderSummary } from './OrderSummary'
import { PaymentMethods } from './PaymentMethods'
import { TopBar } from './TopBar'
import { User, type UserFormState } from './User'

export interface CheckoutProps {
  type: 'inline' | 'overlay' | 'action-sheet'
}

const SubmitButton = ({ children, ...rest }: ButtonProps & LinkProps) => {
  return (
    <Button size="small" {...rest}>
      {children}
    </Button>
  )
}

const Link = createLink(SubmitButton)

export const Checkout = ({ type }: CheckoutProps) => {
  const [method, setMethod] = useState<string>('Click to Pay')
  const [user, setUser] = useState<UserFormState>()

  return (
    <Stack padding={24} gap={32}>
      <TopBar title="Checkout" hasBackButton />
      <OrderSummary />
      <User onSignIn={(formState: UserFormState) => setUser(formState)} />
      <PaymentMethods
        checkoutType={type}
        user={user}
        onClick={(name: string) => setMethod(name)}
      />
      <Link to="/success" state={{ type, method }}>
        Submit
      </Link>
    </Stack>
  )
}
