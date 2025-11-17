import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/overlay')({
  component: Overlay,
})

function Overlay() {
  return <div>Overlay</div>
}
