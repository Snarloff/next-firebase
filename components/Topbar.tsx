import { Box, Flex } from '@chakra-ui/react'

export default function TopBar() {

  const bgColor     = '#FFF'
  const color       = '#1A202C'
  const borderColor = '#DDD'

  return (
    <Flex w="full" position="fixed" zIndex={99999} bgColor={bgColor} color={color} borderBottom={`1px solid ${borderColor}`}>
      <Flex alignItems="center" justifyContent="space-between" w="full" maxW="1200px" margin="0 auto" h="60px" px={[4, 8]}>  {/*Quando for menor ocupa 4 e maior 8 posições*/}
        <Box>lucasnhimi.io</Box>
        <Box>Login</Box>
      </Flex>
    </Flex>
  )
}