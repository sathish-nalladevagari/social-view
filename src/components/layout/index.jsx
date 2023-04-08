import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { LOGIN } from '../../lib/router'
import { useAuth } from '../../hooks/auth'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Box, Flex } from '@chakra-ui/react'

function Layout() {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const {user , isLoading} = useAuth()
    

    useEffect(()=>{
        if( !isLoading && pathname.startsWith("/protected") && !user){
            navigate(LOGIN)
        }
    },[pathname,user,isLoading])
    if(isLoading) return "Loading"
  return (
    <>
      <Navbar />
      <Flex px="10" mx="auto" w="full" maxW="1200px">
        <Box w="900px">
          <Outlet />
        </Box>
        <Sidebar />
      </Flex>
    </>
  )
}

export default Layout