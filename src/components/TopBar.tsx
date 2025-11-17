import { TextLink, Heading, Divider, Box } from '@gr4vy/poutine-react'
import { createLink } from '@tanstack/react-router'

export interface TopBarProps {
  title: string
  hasBackButton?: boolean
}

const Link = createLink(TextLink)

export const TopBar = ({ title, hasBackButton }: TopBarProps) => {
  return (
    <>
      <Box
        display="grid"
        gap={8}
        alignItems="center"
        minWidth="full"
        className="grid-cols-[1fr_minmax(0,auto)_1fr]"
      >
        <Box>
          {hasBackButton && (
            <Link to="/" className="p-2">
              Back
            </Link>
          )}
        </Box>
        <Box textAlign="center">
          <Heading as="h1">{title}</Heading>
        </Box>
      </Box>
      <Divider />
    </>
  )
}
