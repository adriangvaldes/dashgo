import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Chart } from '../components/Chart';
import { Header } from "../components/Header";
import { Sidebar } from '../components/Sidebar';

export default function Dashboard() {
  return(
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4">Incritos da semana</Text>
            <Chart />
          </Box>
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}