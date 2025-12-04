import { Flex, Divider as PoutineDivider, Text } from '@gr4vy/poutine-react'
import type { PropsWithChildren } from 'react'

export const Divider = ({ children }: PropsWithChildren) => {
  return (
    <Flex alignItems="center" gap={12}>
      <PoutineDivider flexGrow={1} marginY={24} />
      <Text>{children}</Text>
      <PoutineDivider flexGrow={1} marginY={24} />
    </Flex>
  )
}
