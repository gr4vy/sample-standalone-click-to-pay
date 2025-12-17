import { createFileRoute } from '@tanstack/react-router'
import { ActionSheet as Component } from '@/flows'

export const Route = createFileRoute('/action-sheet/payment')({
  component: ActionSheet,
})

function ActionSheet() {
  return <Component />
}
