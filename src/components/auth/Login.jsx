import React from 'react'
import {
    Box,
    Button,
    Center,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Link,
    Text,
   
  } from "@chakra-ui/react";
import { Link as routerLink } from 'react-router-dom';
import { useLogin } from '../../hooks/auth';
import { DASHBOARD, REGISTER } from '../../lib/router';
import {useForm} from "react-hook-form";
import { emailValidate,passwordValidate } from '../../util/form-validate';
function Login() {
    const {register,handleSubmit} = useForm()
    const {login,isLoading} = useLogin()

    
    async function handleLogin(data){
        const success = await login({email:data.email,password:data.password,redirectTo:DASHBOARD})
        
    }
    
  return (
    <Center w={"100%"} h="100vh" >
            <Box mx="1" maxW={"md"} p="9" borderWidth={"1px"} borderRadius={"lg"}>
                <Heading mb="4" size={"lg"} textAlign="center">Login</Heading>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder='user@email.com' {...register("email",emailValidate)}/>
                        <FormErrorMessage>This is err message</FormErrorMessage>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder='password123' {...register("password",passwordValidate)}/>
                        <FormErrorMessage>This is err message</FormErrorMessage>
                        <Button mt="5" type='submit' colorScheme={"teal"} size="md" w="full" isLoading={isLoading} loadingText="Logging in" >Log in</Button>

                    </FormControl>
                </form>
                <Text>Don't have an account?{ " "}
                <Link 
                color={"teal.800"}
                fontWeight="medium"
                textDecor={"underline"}
                _hover={{background:"teal.100"}}
                as={routerLink}
                 to={REGISTER}>Register</Link>{" "}
                 instead!
                 </Text>
            </Box>
    </Center>
  )
}

export default Login