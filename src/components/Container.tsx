import { Flex, FlexProps } from '@chakra-ui/react'

export const Container = (props: FlexProps) => (
  <Flex
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    color="black"
    transition="all 0.15s ease-out"
    padding={'10px'}
    border={'red solid 1px'}
    {...props}
  />
)
