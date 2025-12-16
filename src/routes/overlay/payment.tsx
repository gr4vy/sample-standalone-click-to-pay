import { createFileRoute } from '@tanstack/react-router'
import { Overlay as Component } from '@/flows'

export const Route = createFileRoute('/overlay/payment')({
  component: Overlay,
})

function Overlay() {
  return <Component />
}
