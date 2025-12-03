import { createFileRoute } from '@tanstack/react-router'
import { Checkout } from '@/components/Checkout'
import { Inline as Component } from '@/flows'

export const Route = createFileRoute('/inline')({
  component: Inline,
})

function Inline() {
  return (
    <Checkout type="inline">
      <Component />
    </Checkout>
  )
}
