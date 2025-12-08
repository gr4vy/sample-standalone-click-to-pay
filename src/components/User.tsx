import { Button, Input, Stack, Text } from '@gr4vy/poutine-react'
import { useActionState, useEffect } from 'react'
import { useCheckout } from './Checkout'

export interface UserProps {
  onSignIn?: (formState: UserFormState) => void
}

export type UserFormState = {
  email: string
  phoneNumber: string
}

const defaultState: UserFormState = {
  email: '',
  phoneNumber: '',
}

const submit = async (
  prevState: UserFormState,
  formData: FormData
): Promise<UserFormState> => {
  const fde = formData.entries()
  const payload = Object.fromEntries(fde) as UserFormState

  if (prevState.email || prevState.phoneNumber) {
    return defaultState
  }

  return payload
}

export const User = ({ onSignIn }: UserProps) => {
  const [formState, formAction] = useActionState(submit, defaultState)
  const { user, setUser } = useCheckout()
  const isLoggedIn = user?.email || user?.phoneNumber

  useEffect(() => {
    if (
      (formState.email || formState.phoneNumber) &&
      !user?.email &&
      !user?.phoneNumber
    ) {
      setUser?.(formState)
      onSignIn?.(formState)
    }
  }, [formState, onSignIn, setUser, user])

  return (
    <form action={formAction}>
      <Stack gap={12}>
        <Text as="h2">Profile</Text>
        {isLoggedIn ? (
          <>Logged-in as {formState.email || formState.phoneNumber}</>
        ) : (
          <>
            <Input placeholder="Email address" name="email" />
            <Input placeholder="Mobile number" name="phoneNumber" />
          </>
        )}
        <Button size="small">{isLoggedIn ? 'Log-out' : 'Log-in'}</Button>
      </Stack>
    </form>
  )
}
