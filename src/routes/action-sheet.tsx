import { createFileRoute } from '@tanstack/react-router'
import { Checkout } from '../components/Checkout'

export const Route = createFileRoute('/action-sheet')({
  component: ActionSheet,
})

function ActionSheet() {
  return <Checkout type="action-sheet" />
}
