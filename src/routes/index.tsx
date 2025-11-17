import { ButtonLink, Heading, Stack } from '@gr4vy/poutine-react'
import { createFileRoute, createLink } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Index,
})

const Link = createLink(ButtonLink)

function Index() {
  return (
    <Stack padding={24} alignItems="center" justifyContent="center" gap={24}>
      <Heading>Click to Pay UX</Heading>
      <Link to="/inline">Inline</Link>
      <Link to="/overlay">Overlay</Link>
      <Link to="/action-sheet">Action Sheet</Link>
    </Stack>
  )
}
