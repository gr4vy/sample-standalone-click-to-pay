import { Button, Stack, Text, type ButtonProps } from '@gr4vy/poutine-react'
import {
  createFileRoute,
  createLink,
  useRouterState,
  type LinkProps,
} from '@tanstack/react-router'
import { TopBar } from '@/components/TopBar'
import type { PaymentMethodsProps } from '@/components/PaymentMethods'

declare module '@tanstack/react-router' {
  interface HistoryState {
    method?: string
    type?: PaymentMethodsProps['checkoutType']
  }
}

export const Route = createFileRoute('/failure')({
  component: RouteComponent,
})

const RestartButton = ({ children, ...rest }: ButtonProps & LinkProps) => {
  return (
    <Button size="small" alignSelf="center" {...rest}>
      {children}
    </Button>
  )
}

const Link = createLink(RestartButton)

function RouteComponent() {
  const state = useRouterState({ select: (s) => s.location.state })

  return (
    <Stack padding={24} gap={24}>
      <TopBar title="Checkout" hasBackButton={false} />
      <Stack textAlign="center" gap={8}>
        <Text as="h2">Something went wrong...</Text>
        <Text>We couldn't process your transaction, please try again.</Text>
      </Stack>
      <Link to={`/${state?.type || ''}`}>Restart</Link>
    </Stack>
  )
}
