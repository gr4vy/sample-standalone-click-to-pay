import { Box, Text } from '@gr4vy/poutine-react'
import { PaymentMethods, SubmitButton, User, useCheckout } from '@/components'

export const Overlay = () => {
  const { user } = useCheckout()

  return (
    <>
      <User />
      <PaymentMethods>
        <Box marginTop={8}>
          <Text>overlay UX flow content</Text>
          <Text>{user?.email || user?.phoneNumber}</Text>
        </Box>
      </PaymentMethods>
      <SubmitButton />
    </>
  )
}
