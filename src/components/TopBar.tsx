import { TextLink, Heading, Divider, Box } from '@gr4vy/poutine-react'
import { useCanGoBack, useNavigate, useRouter } from '@tanstack/react-router'

export interface TopBarProps {
  title: string
  hasBackButton?: boolean
}

export const TopBar = ({ title, hasBackButton }: TopBarProps) => {
  const router = useRouter()
  const canGoBack = useCanGoBack()
  const navigate = useNavigate()

  const handleBackClick = () => {
    if (canGoBack) {
      return router.history.back()
    }
    return navigate({ to: '/' })
  }

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
            <TextLink href="#" onClick={handleBackClick} className="p-1.5">
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
