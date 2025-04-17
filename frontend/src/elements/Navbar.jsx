import { Button, Container, Flex } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import React from 'react'

const Navbar = () => {
  return (
   <Container maxW={"1140px"} px={4}>
    <Flex h={16} justifyContent={"space-between"} flexDir={{base:"column", sm:"row"}}>
    <Button fontSize={{ base:"22", sm:"28"}} fontWeight={"bold"} textTransform={"uppercase"} textAlign={"center"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgclip={"text"}> 
            <Link to={"/"}>Home</Link>
    </Button>
    <Button fontSize={{ base:"22", sm:"28"}} fontWeight={"bold"} textTransform={"uppercase"} textAlign={"center"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgclip={"text"}> 
            <Link to={"/solarsystem"}>Solar System</Link>
    </Button>
    <Button fontSize={{ base:"22", sm:"28"}} fontWeight={"bold"} textTransform={"uppercase"} textAlign={"center"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgclip={"text"}> 
            <Link to={"/moonpage"}>Moon</Link>
    </Button>
    <Button fontSize={{ base:"22", sm:"28"}} fontWeight={"bold"} textTransform={"uppercase"} textAlign={"center"} bgGradient={"linear(to-r, cyan.400, blue.500)"} bgclip={"text"}> 
            <Link to={"/infopage"}>Info</Link>
    </Button>
    </Flex>
   </Container>
  )
}

export default Navbar
