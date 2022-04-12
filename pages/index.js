import { Box, Flex, Image } from '@chakra-ui/react'
import Window from '../components/Window'

export default function Home() {
  return (
    <Box display='flex' alignItems='center' justifyContent='center' minH='100vh'>
      <Window>
        <Flex px={1} py={8} alignItems='center' justifyContent='center'>
          <Image src='/internet.gif' alt='untitled family' />
        </Flex>
      </Window>
    </Box>
  )
}
