import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const Home: React.FC = (): JSX.Element => {
  return (
    <Container maxW="container.lg" shadow="lg" py="10" h="100vh" maxH="100vh">
      <Heading textAlign="center">Micro Features</Heading>
      <Stack mt="10">
        <HStack
          bg=" linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%) "
          justify="space-between"
          border="2px solid gray"
          py={2}
          px={4}
          rounded="lg"
        >
          <Box>
            <Text fontWeight="bold">Search Hero Mobile Legends</Text>
            <Text>Next JS(Typescript)</Text>
          </Box>
          <Link href='/search-hero' target="_blank">
          <Button colorScheme='facebook'>View Page</Button>
          </Link>
        </HStack>
      </Stack>
    </Container>
  );
};

export default Home;
