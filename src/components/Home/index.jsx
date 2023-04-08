import { Box, Button, Container, Flex, Heading, HStack,Link,Text } from '@chakra-ui/react'
import React from 'react'
import { Link  as RouterLink} from 'react-router-dom'
import { LOGIN, REGISTER } from '../../lib/router'

function Home() {
  return (
    <>
    <Flex width={"100vw"} h="10vh" justifyContent={"space-around"}mt="4" p="5" alignItems={"center"}>
        <Heading color={'teal'} fontSize={["2rem","2rem","3rem","3em"]}>Social-View</Heading>
        <Flex gap="5">
            <Button size={["sm","sm","md","md"]}><Link as={RouterLink} to={LOGIN}>Login</Link></Button>
            <Button size={["sm","sm","md","md"]}><Link as={RouterLink} to={REGISTER}>Register</Link></Button>
        </Flex>
    </Flex>
    <Container px="10">
        <Heading mt="20px"
        p="5"
         fontSize={["40px","50px","60px"]}>Social View</Heading>
        <Text>A social media app is a software application designed to allow users to create, share, and interact with content.</Text>
    </Container>
    </>
  )
}

export default Home