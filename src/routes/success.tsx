import {
  Box,
  Button,
  Divider,
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
import { TopBar } from '../components/TopBar'

declare module '@tanstack/react-router' {
  interface HistoryState {
    method?: string
    type?: 'inline' | 'overlay' | 'action-sheet'
  }
}

export const Route = createFileRoute('/success')({
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
        <Text as="h2">Thank you for your order!</Text>
        <Text>
          <strong>Order number:</strong> 123456
        </Text>
      </Stack>
      <Stack borderWidth="md" borderColor="gray30" gap={12} padding={12}>
        <Box>
          <strong>User</strong>
          <Text>john.doe@example.com</Text>
          <Text>+1 (123) 456-7890</Text>
        </Box>
        <Divider width="md" />
        <Box>
          <strong>Payment method</strong>
          <Text>{state?.method}</Text>
        </Box>
      </Stack>
      <Link to={`/${state?.type || ''}`}>Restart</Link>
    </Stack>
  )
}
