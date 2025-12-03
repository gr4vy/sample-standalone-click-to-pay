/* eslint-disable react-refresh/only-export-components */
import { Stack } from '@gr4vy/poutine-react'
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from 'react'
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
    user?: UserFormState
    type: CheckoutType
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

  return (
    <CheckoutContext.Provider
      value={{ method, setMethod, user, setUser, type }}
    >
      <Stack padding={24} gap={32}>
        <TopBar title="Checkout" hasBackButton />
        <OrderSummary />
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
