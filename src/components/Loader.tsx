import { Box, Flex, type BoxProps } from '@gr4vy/poutine-react'

export const Loader = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Flex justifyContent="center" alignItems="center" height={24}>
        <div className="duration[.9s] m-[4px] h-[8px] w-[8px] animate-[loaderBounce_1s_infinite_0ms] rounded-full bg-gray-80" />
        <div className="duration[.9s] m-[4px] h-[8px] w-[8px] animate-[loaderBounce_1s_infinite_150ms] rounded-full bg-gray-80" />
        <div className="duration[.9s] m-[4px] h-[8px] w-[8px] animate-[loaderBounce_1s_infinite_300ms] rounded-full bg-gray-80" />
      </Flex>
    </Box>
  )
}
