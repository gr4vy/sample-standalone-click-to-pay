import { Box, Text } from '@gr4vy/poutine-react'
import { useCheckout } from '@/components/Checkout'
import { PaymentMethods } from '@/components/PaymentMethods'
import { SubmitButton } from '@/components/SubmitButton'
import { User } from '@/components/User'

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
