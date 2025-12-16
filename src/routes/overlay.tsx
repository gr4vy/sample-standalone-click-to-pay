import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { Checkout } from '@/components'

export const Route = createFileRoute('/overlay')({
  beforeLoad: ({ location }) => {
    if (/^\/overlay\/?$/.test(location.pathname)) {
      throw redirect({ to: '/overlay/profile' })
    }
  },
  component: Overlay,
})

function Overlay() {
  return (
    <Checkout type="overlay">
      <Outlet />
    </Checkout>
  )
}
