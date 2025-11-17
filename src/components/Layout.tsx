import { Box, Text } from '@gr4vy/poutine-react'
import type { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box
      className="min-h-screen w-sm"
      borderColor="gray30"
      borderWidth="md"
      borderStyle="solid"
      borderRadius="rounded"
      background="white"
    >
      <Box borderColor="gray30" borderStyle="solid" borderRadius="rounded">
        <Box
          padding={8}
          background="gray20"
          position="sticky"
          width="full"
          top={0}
        >
          <Box padding={8} background="white" borderRadius="pill">
            <Text as="span" marginLeft={8}>
              https://www.merchant.com/checkout
            </Text>
          </Box>
        </Box>
        {children}
      </Box>
    </Box>
  )
}
