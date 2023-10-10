import MicroFeatureItem from "@/components/microfeatureItem";
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
        <MicroFeatureItem
          title="Search Hero Mobile Legends"
          subTitle="Next JS(Typescript) + Chakra UI, axios"
          url="search-hero"
        />
      </Stack>
    </Container>
  );
};

export default Home;
