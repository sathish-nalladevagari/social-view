import { Button, Flex, Link } from "@chakra-ui/react";
import { DASHBOARD, USERS } from "../../lib/router";
import { Link as RouterLink } from "react-router-dom";
import { useLogout } from "../../hooks/auth";

export default function Navbar() {
  const { logout, isLoading } = useLogout();
  

  if (isLoading) return "Loading...";

  return (
    
      <Flex px="4" w="100vw" h="10vh" align="center" gap="3" justifyContent={"space-between"} maxW="1200px">
        <Link color="teal" as={RouterLink} to={DASHBOARD} fontWeight="bold">
          Home
        </Link>
        
        <Link color="teal" as={RouterLink} to={USERS} fontWeight="bold">
          Users
        </Link>
        <Button
          ml="auto"
          colorScheme="teal"
          size="sm"
          onClick={logout}
          isLoading={isLoading}
        >
          Logout
        </Button>
      </Flex>
    
  );
}