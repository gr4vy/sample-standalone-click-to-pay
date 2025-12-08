/* eslint-disable react-refresh/only-export-components */
import { Alert, Stack } from '@gr4vy/poutine-react'
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from 'react'
import { createCheckoutSession, type CheckoutSession } from '@/utils'
import { OrderSummary } from './OrderSummary'
import { TopBar } from './TopBar'
import type { UserFormState } from './User'

export type CheckoutType = 'inline' | 'overlay' | 'action-sheet'

export type CheckoutMethod = {
  id: string
  name: string
}

export const CheckoutContext = createContext<
  Partial<{
    method: CheckoutMethod
    setMethod: (method: CheckoutMethod) => void
    setUser: (formState: UserFormState) => void
    user: UserFormState
    type: CheckoutType
    sessionId: CheckoutSession['id']
    isPending: boolean
    setIsPending: (isPending: boolean) => void
    canSubmit: boolean
    setCanSubmit: (canSubmit: boolean) => void
  }>
>({})

export interface CheckoutProviderProps extends PropsWithChildren {
  type: CheckoutType
}

export const CheckoutProvider = ({ children, type }: CheckoutProviderProps) => {
  const [method, setMethod] = useState<CheckoutMethod>({
    id: 'click-to-pay',
    name: 'Click to Pay',
  })
  const [user, setUser] = useState<UserFormState>()
  const [sessionId, setSessionId] = useState<string>()
  const [isPending, setIsPending] = useState(false)
  const [canSubmit, setCanSubmit] = useState(false)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    createCheckoutSession({
      amount: 1299,
      currency: 'AUD',
    })
      .then((checkoutSession) => setSessionId(checkoutSession?.id))
      .catch(setError)
  }, [])

  return (
    <CheckoutContext.Provider
      value={{
        method,
        setMethod,
        user,
        setUser,
        type,
        sessionId,
        isPending,
        setIsPending,
        canSubmit,
        setCanSubmit,
      }}
    >
      <Stack padding={24} gap={32}>
        <TopBar title="Checkout" hasBackButton />
        <OrderSummary />
        {error && (
          <Alert gap={16} variant="negative" paddingX={16} paddingY={8}>
            <Alert.Text>Error: {error.message}</Alert.Text>
          </Alert>
        )}
        {children}
      </Stack>
    </CheckoutContext.Provider>
  )
}

export const useCheckout = () => {
  return useContext(CheckoutContext)
}

export const Checkout = ({ children, type }: CheckoutProviderProps) => {
  return <CheckoutProvider type={type}>{children}</CheckoutProvider>
}
