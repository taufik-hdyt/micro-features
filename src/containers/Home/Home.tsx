import MicroFeatureItem from "@/components/MicroFeatureItem";
import { Container, Heading, Stack } from "@chakra-ui/react";
import { RxMix } from "react-icons/rx";

const Home: React.FC = (): JSX.Element => {
  return (
    <Container maxW="container.md" py="10" h="100vh" maxH="100vh">
      <Heading
        justifyContent="center"
        display="flex"
        gap={4}
        alignItems="center"
        color="white"
        textAlign="center"
      >
        Micro Features
        <RxMix size={35} />
      </Heading>
      <Stack mt="10">
        <MicroFeatureItem
          title="Search Hero Mobile Legends 🎮"
          subTitle="Next JS(Typescript) + Chakra UI, Axios, Function, Logic, Conditional Rendering"
          url="search-hero"
        />
        <MicroFeatureItem
          title="Meme Generator💀"
          subTitle="Next JS(Typescript) + Chakra UI, Function, Logic, Conditional Rendering"
          url="meme-generator"
        />
        <MicroFeatureItem
          title="Currency Converter 💰"
          subTitle="Next JS(Typescript) + Chakra UI, Function, Logic, Conditional Rendering"
          url="currency-converter"
        />
      </Stack>
    </Container>
  );
};

export default Home;
