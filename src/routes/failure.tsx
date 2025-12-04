import {
  Alert,
  Button,
  Stack,
  Text,
  type ButtonProps,
} from '@gr4vy/poutine-react'
import {
  createFileRoute,
  createLink,
  useRouterState,
  type LinkProps,
} from '@tanstack/react-router'
import { TopBar, type CheckoutMethod, type CheckoutType } from '@/components'
import type { Transaction, TransactionError } from '@/utils'

declare module '@tanstack/react-router' {
  interface HistoryState {
    method?: CheckoutMethod
    type?: CheckoutType
    transaction?: Transaction | TransactionError
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
  const { type, transaction } = useRouterState({
    select: (s) => s.location.state,
  })
  const { status, message } = (transaction as TransactionError) || {}

  return (
    <Stack padding={24} gap={24}>
      <TopBar title="Checkout" hasBackButton={false} />
      <Stack textAlign="center" gap={8}>
        <Text as="h2">Something went wrong...</Text>
        <Text>We couldn't process your transaction, please try again.</Text>
        <Alert gap={16} variant="negative" paddingX={16} paddingY={8}>
          <Alert.Text>
            Error {status}: {message}
          </Alert.Text>
        </Alert>
      </Stack>
      <Link to={`/${type || ''}`}>Restart</Link>
    </Stack>
  )
}
