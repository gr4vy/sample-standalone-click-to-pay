import { Box, Flex, Stack, Text } from '@gr4vy/poutine-react'

export const OrderSummary = () => {
  return (
    <Stack gap={12}>
      <Text as="h3">Order Summary</Text>
      <Flex gap={12}>
        <Box
          width={64}
          height={64}
          background="gray40"
          borderRadius="rounded"
        />
        <Box flexGrow={1}>
          <Text>Nintendo Wii (x1)</Text>
          <Text as="strong">$329.99</Text>
        </Box>
      </Flex>
    </Stack>
  )
}
