import { Button, type ButtonProps } from '@gr4vy/poutine-react'
import { createLink, type LinkProps } from '@tanstack/react-router'
import { useCheckout } from './Checkout'
import type { PropsWithChildren } from 'react'

const Component = (props: ButtonProps & LinkProps) => {
  return (
    <Button size="small" {...props}>
      Submit
    </Button>
  )
}

export const Link = createLink(Component)

export const SubmitButton = ({ children, ...rest }: PropsWithChildren) => {
  const { method, type } = useCheckout()
  return (
    <Link to="/success" state={{ method, type }} {...rest}>
      {children}
    </Link>
  )
}
