import { Box, Flex, Text } from '@gr4vy/poutine-react'
import { Accordion } from './Accordion'

export const OrderSummary = () => {
  return (
    <Accordion header={<Text as="h3">Order Summary</Text>}>
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
    </Accordion>
  )
}
