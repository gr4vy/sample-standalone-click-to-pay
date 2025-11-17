import { Button, Stack, type ButtonProps } from '@gr4vy/poutine-react'
import { createLink, type LinkProps } from '@tanstack/react-router'
import { OrderSummary } from './OrderSummary'
import { PaymentMethods } from './PaymentMethods'
import { TopBar } from './TopBar'
import { User } from './User'

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
  return (
    <Stack padding={24} gap={24}>
      <TopBar title="Checkout" hasBackButton />
      <OrderSummary />
      <User />
      <PaymentMethods checkoutType={type} />
      <Link to="/success">Submit</Link>
    </Stack>
  )
}
