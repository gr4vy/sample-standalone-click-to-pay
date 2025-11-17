import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/inline')({
  component: Inline,
})

function Inline() {
  return <div>Inline</div>
}
