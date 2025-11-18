import { createFileRoute } from '@tanstack/react-router'
import { Checkout } from '../components/Checkout'

export const Route = createFileRoute('/overlay')({
  component: Overlay,
})

function Overlay() {
  return <Checkout type="overlay" />
}
