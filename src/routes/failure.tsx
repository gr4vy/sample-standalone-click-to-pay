import { Button, Stack, Text, type ButtonProps } from '@gr4vy/poutine-react'
import {
  createFileRoute,
  createLink,
  type LinkProps,
} from '@tanstack/react-router'
import { TopBar } from '../components/TopBar'

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
  return (
    <Stack padding={24} gap={24}>
      <TopBar title="Checkout" hasBackButton={false} />
      <Stack textAlign="center" gap={8}>
        <Text as="h2">Something went wrong...</Text>
        <Text>We couldn't process your transaction, please try again.</Text>
      </Stack>
      <Link to="/">Restart</Link>
    </Stack>
  )
}
