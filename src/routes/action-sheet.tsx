import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'
import { Checkout } from '@/components'

export const Route = createFileRoute('/action-sheet')({
  beforeLoad: ({ location }) => {
    if (/^\/action-sheet\/?$/.test(location.pathname)) {
      throw redirect({ to: '/action-sheet/profile' })
    }
  },
  component: ActionSheet,
})

function ActionSheet() {
  return (
    <Checkout type="action-sheet">
      <Outlet />
    </Checkout>
  )
}
