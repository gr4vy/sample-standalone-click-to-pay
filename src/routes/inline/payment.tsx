import { createFileRoute } from '@tanstack/react-router'
import { Inline as Component } from '@/flows'

export const Route = createFileRoute('/inline/payment')({
  component: Inline,
})

function Inline() {
  return <Component />
}
