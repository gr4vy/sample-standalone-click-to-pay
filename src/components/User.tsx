import { Button, Input, Stack, Text } from '@gr4vy/poutine-react'
import { useLocation, useNavigate } from '@tanstack/react-router'
import { useState, type FormEvent } from 'react'
import { useCheckout } from './Checkout'

export type UserFormState = {
  email: string
  mobileNumber: string
}

export const User = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const { user, setUser } = useCheckout()
  const isLoggedIn = user?.email || user?.mobileNumber

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isLoggedIn) {
      setUser?.({ email, mobileNumber })
    }

    const parentPath = pathname.substring(0, pathname.lastIndexOf('/'))
    navigate({ to: `${parentPath}/payment` })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-16">
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
      </Stack>
      <Button size="small">Continue</Button>
    </form>
  )
}
