import { Box, Stack, Text } from '@gr4vy/poutine-react'
import { TabNav } from './TabNav'
import type { PropsWithChildren } from 'react'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box className="min-h-screen w-sm" background="white" marginX="auto">
      <Stack
        borderColor="gray30"
        borderStyle="solid"
        borderRadius="rounded"
        borderWidth="md"
        position="relative"
        className="h-[852px]"
      >
        <Box
          padding={8}
          background="gray20"
          position="sticky"
          width="full"
          top={0}
          className="z-1000"
        >
          <Box padding={8} background="white" borderRadius="pill">
            <Text as="span" marginLeft={8}>
              https://www.merchant.com/checkout
            </Text>
          </Box>
        </Box>
        <Box className="flex-1 overflow-auto">{children}</Box>
        <TabNav />
      </Stack>
    </Box>
  )
}
