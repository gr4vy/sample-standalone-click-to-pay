import { ButtonLink, Stack } from '@gr4vy/poutine-react'
import { createFileRoute, createLink } from '@tanstack/react-router'
import { TopBar } from '../components/TopBar'

export const Route = createFileRoute('/')({
  component: Index,
})

const Link = createLink(ButtonLink)

function Index() {
  return (
    <Stack
      padding={24}
      alignItems="center"
      justifyContent="center"
      gap={24}
      minWidth="full"
    >
      <TopBar title="Click to Pay UX Flows" />
      <Link to="/inline">Inline</Link>
      <Link to="/overlay">Overlay</Link>
      <Link to="/action-sheet">Action Sheet</Link>
    </Stack>
  )
}
