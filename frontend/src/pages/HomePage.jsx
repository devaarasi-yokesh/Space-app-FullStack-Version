import {  Box, Image, VStack, Text } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
  return (
    <Box maxW={'full'}>
    <Image src="https://images.unsplash.com/photo-1615263867598-4abcd342ffd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="moonimg" w='full'  h={'800px'} objectFit="cover" />
    <VStack>
      <Text>Average distance from Earth - 384,400 km</Text>
      <Text>Temperature : -173°C to 127°C
            Day length: 27 days
             Year length: 27 days</Text>
    </VStack>       
    </Box>
    
  )
}

export default HomePage
