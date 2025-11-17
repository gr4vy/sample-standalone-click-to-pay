import { Button, Input, Stack, Text } from '@gr4vy/poutine-react'

export const User = () => {
  return (
    <form>
      <Stack gap={12}>
        <Text as="h2">Sign-in</Text>
        <Input placeholder="Email address" />
        <Input placeholder="Mobile number" />
        <Button size="small">Continue</Button>
      </Stack>
    </form>
  )
}
