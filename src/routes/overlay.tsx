import { createFileRoute } from '@tanstack/react-router'
import { Checkout } from '@/components'
import { Overlay as Component } from '@/flows'

export const Route = createFileRoute('/overlay')({
  component: Overlay,
})

function Overlay() {
  return (
    <Checkout type="overlay">
      <Component />
    </Checkout>
  )
}
