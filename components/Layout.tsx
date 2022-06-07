import TopBar from './Topbar'
import { Box, Flex } from '@chakra-ui/react'

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  
  const bgColor = '#F4F6F8'
  
  return (
    <Box bgColor={bgColor} minH="100vh">
      <TopBar />

      <Flex flexDirection="column" pt={'62px'}>
        {children}
      </Flex>

    </Box>
  )
}