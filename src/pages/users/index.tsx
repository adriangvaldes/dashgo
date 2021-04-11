import { 
  Box, Button, Checkbox, Flex, Heading, 
  Icon, Table, Tbody, Td, Th, Thead, Tr, 
  Text, useBreakpointValue, IconButton 
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList () {
  const isWiderVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return(
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center"> 
            <Heading size="lg" fontWeight="normal" >Usuários</Heading>

            <Button 
              as="a" 
              size="sm" 
              fontSize="sm" 
              colorScheme="pink"
              leftIcon={<Icon as={ RiAddLine } fontSize="20"/>}
            >
            Criar novo  
            </Button>
          </Flex>
          
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" w="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                { isWiderVersion && <Th>Data de cadastro</Th>}
                <Th w="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Adrian Valdes</Text>
                    <Text fontSize="sm" color="gray.300">adriangvaldes@gmail.com</Text>
                  </Box>
                </Td>
                { isWiderVersion && <Td>9 de abril de 2021</Td>}
                <Td>
                  { isWiderVersion? 
                    <Button 
                      as="a" 
                      size="sm" 
                      fontSize="sm" 
                      colorScheme="purple"
                      leftIcon={<Icon as={ RiPencilLine } fontSize="20"/>}
                    >
                      Editar
                    </Button> 
                  :
                    <IconButton 
                      aria-label="Edit User" 
                      colorScheme="purple" 
                      icon={<Icon as={ RiPencilLine } 
                        fontSize="20"
                        />
                      }
                    />
                  }
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Antonio Vivaldi</Text>
                    <Text fontSize="sm" color="gray.300">a.vivaldi@gmail.com</Text>
                  </Box>
                </Td>
                { isWiderVersion && <Td>2 de abril de 2021</Td>}
                <Td>
                { isWiderVersion? 
                    <Button 
                      as="a" 
                      size="sm" 
                      fontSize="sm" 
                      colorScheme="purple"
                      leftIcon={<Icon as={ RiPencilLine } fontSize="20"/>}
                    >
                      Editar
                    </Button> 
                  :
                    <IconButton 
                      aria-label="Edit User" 
                      colorScheme="purple" 
                      icon={<Icon as={ RiPencilLine } 
                        fontSize="20"
                        />
                      }
                    />
                  }
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Marcela Lopes</Text>
                    <Text fontSize="sm" color="gray.300">m.lopes.2001@gmail.com</Text>
                  </Box>
                </Td>
                { isWiderVersion && <Td>5 de abril de 2021</Td>}
                <Td>
                { isWiderVersion? 
                    <Button 
                      as="a" 
                      size="sm" 
                      fontSize="sm" 
                      colorScheme="purple"
                      leftIcon={<Icon as={ RiPencilLine } fontSize="20"/>}
                    >
                      Editar
                    </Button> 
                  :
                    <IconButton 
                      aria-label="Edit User" 
                      colorScheme="purple" 
                      icon={<Icon as={ RiPencilLine } 
                        fontSize="20"
                        />
                      }
                    />
                  }
                </Td>
              </Tr>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Lílian Valverde</Text>
                    <Text fontSize="sm" color="gray.300">lilian.valverde@gmail.com</Text>
                  </Box>
                </Td>
                { isWiderVersion && <Td>8 de abril de 2021</Td>}
                <Td>
                { isWiderVersion? 
                    <Button 
                      as="a" 
                      size="sm" 
                      fontSize="sm" 
                      colorScheme="purple"
                      leftIcon={<Icon as={ RiPencilLine } fontSize="20"/>}
                    >
                      Editar
                    </Button> 
                  :
                    <IconButton 
                      aria-label="Edit User" 
                      colorScheme="purple" 
                      icon={<Icon as={ RiPencilLine } 
                        fontSize="20"
                        />
                      }
                    />
                  }
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}