import { Button, Container, Flex, Heading, HStack,Link,Text } from '@chakra-ui/react'
import React from 'react'
import { Link  as RouterLink} from 'react-router-dom'
import { LOGIN, REGISTER } from '../../lib/router'

function Home() {
  return (
    <>
    <HStack w="1200px" h="10vh" alignItems={"center"}  justifyContent="space-between">
        <Heading color={'teal'}>Social-View</Heading>
        <Flex gap="5">
            <Button><Link as={RouterLink} to={LOGIN}>Login</Link></Button>
            <Button><Link as={RouterLink} to={REGISTER}>Register</Link></Button>
        </Flex>
    </HStack>
    <Container>
        <Heading mt="20px"
        p="5"
         fontSize={["40px","50px","60px"]}>Social View</Heading>
        <Text>A social media app is a software application designed to allow users to create, share, and interact with content.</Text>
    </Container>
    </>
  )
}

export default Home