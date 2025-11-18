import { TextLink, Heading, Divider, Box } from '@gr4vy/poutine-react'
import { createLink } from '@tanstack/react-router'

export interface TopBarProps {
  title: string
  hasBackButton?: boolean
}

const Link = createLink(TextLink)

export const TopBar = ({ title, hasBackButton }: TopBarProps) => {
  return (
    <Box width="full">
      <Box
        display="grid"
        gap={8}
        paddingBottom={12}
        alignItems="center"
        minWidth="full"
        className="min-h-12 grid-cols-[1fr_minmax(0,auto)_1fr]"
      >
        <Box>
          {hasBackButton && (
            <Link to="/" className="p-1.5">
              Back
            </Link>
          )}
        </Box>
        <Box textAlign="center">
          <Heading as="h1">{title}</Heading>
        </Box>
      </Box>
      <Divider />
    </Box>
  )
}
