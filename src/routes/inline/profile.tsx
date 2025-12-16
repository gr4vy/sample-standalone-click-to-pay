import { createFileRoute } from '@tanstack/react-router'
import { User } from '@/components'

export const Route = createFileRoute('/inline/profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <User />
}
