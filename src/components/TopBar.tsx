import { TextLink, Heading, Divider, Box } from '@gr4vy/poutine-react'
import { useRouter } from '@tanstack/react-router'

export interface TopBarProps {
  title: string
  hasBackButton?: boolean
}

export const TopBar = ({ title, hasBackButton }: TopBarProps) => {
  const router = useRouter()

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
            <TextLink
              href="#"
              onClick={() => router.history.back()}
              className="p-1.5"
            >
              Back
            </TextLink>
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
