import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { Checkout } from '@/components'

export const Route = createFileRoute('/inline')({
  beforeLoad: ({ location }) => {
    if (/^\/inline\/?$/.test(location.pathname)) {
      throw redirect({ to: '/inline/profile' })
    }
  },
  component: Inline,
})

function Inline() {
  return (
    <Checkout type="inline">
      <Outlet />
    </Checkout>
  )
}
