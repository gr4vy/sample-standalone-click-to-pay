import { createFileRoute } from '@tanstack/react-router'
import { User } from '@/components'

export const Route = createFileRoute('/overlay/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <User />
}
