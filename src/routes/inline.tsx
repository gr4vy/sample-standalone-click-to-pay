import { createFileRoute } from '@tanstack/react-router'
import { Checkout } from '../components/Checkout'

export const Route = createFileRoute('/inline')({
  component: Inline,
})

function Inline() {
  return <Checkout type="inline" />
}
