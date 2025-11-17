import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/action-sheet')({
  component: ActionSheet,
})

function ActionSheet() {
  return <div>ActionSheet</div>
}
