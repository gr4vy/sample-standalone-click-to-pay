import { createFileRoute } from '@tanstack/react-router'
import { Checkout } from '@/components'
import { ActionSheet as Component } from '@/flows'

export const Route = createFileRoute('/action-sheet')({
  component: ActionSheet,
})

function ActionSheet() {
  return (
    <Checkout type="action-sheet">
      <Component />
    </Checkout>
  )
}
