import MicroFeatureItem from "@/components/microfeatureItem";
import {
  Container,
  Heading,
  Stack,
} from "@chakra-ui/react";

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
