import { Button, Input, Stack, Text } from '@gr4vy/poutine-react'
import { useState, type FormEvent } from 'react'
import { useCheckout } from './Checkout'

export interface UserProps {
  onSignIn?: (formState: UserFormState) => void
  onSignOut?: () => void
}

export type UserFormState = {
  email: string
  mobileNumber: string
}

export const User = ({ onSignIn, onSignOut }: UserProps) => {
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const { user } = useCheckout()
  const isLoggedIn = user?.email || user?.mobileNumber

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (isLoggedIn) {
      onSignOut?.()
    } else {
      onSignIn?.({ email, mobileNumber })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack gap={12}>
        <Text as="h2">Profile</Text>
        {isLoggedIn ? (
          <>Logged-in {user.email || user.mobileNumber}</>
        ) : (
          <>
            <Input
              placeholder="Email address"
              name="email"
              value={email}
              onChange={(value) => setEmail(String(value))}
            />
            <Input
              placeholder="Mobile number"
              name="mobileNumber"
              value={mobileNumber}
              onChange={(value) => setMobileNumber(String(value))}
            />
          </>
        )}
        <Button size="small">{isLoggedIn ? 'Log-out' : 'Log-in'}</Button>
      </Stack>
    </form>
  )
}
