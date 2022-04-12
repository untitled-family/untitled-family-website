import { Box, Flex, Text } from "@chakra-ui/react"
import { SmallCloseIcon } from '@chakra-ui/icons'
import PropTypes from 'prop-types'

const Window = ({ children, ...rest }) => {
  return (
    <Box
      borderRadius='md'
      borderWidth={1}
      borderColor='black'
      minW='200px'
      sx={{
        boxShadow: '5px 5px 0px 0px rgba(255, 0, 251, 0.3)'
      }}
      {...rest}
    >
      <Flex
        bg='blackAlpha.100'
        p={1}
        borderBottomWidth={1}
        borderColor='black'
        alignItems='center'
      >
        <Text fontSize='xs'>untitled</Text>
        <SmallCloseIcon borderWidth={1} borderColor='black' ml='auto' />
      </Flex>
      <Box>
        {children}
      </Box>
    </Box>
  )
}

Window.propTypes = {
  children: PropTypes.node.isRequired
}

export default Window