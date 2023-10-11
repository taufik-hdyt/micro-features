import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";

const MemeGenerator: React.FC = (): JSX.Element => {
  const memes = [
    "meme/meme1.jpg",
    "meme/meme2.jpg",
    "meme/meme3.jpg",
    "meme/meme4.jpg",
    "meme/meme5.jpg",
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [load, setLoad] = useState(true);
  function handleGenerate() {
    setSelectedImageIndex((selectedImageIndex + 1) % memes.length);
  }

  function handleGenerateLoad() {
    const random = Math.floor(Math.random() * memes.length);
    setSelectedImageIndex(random);
    setLoad(false)
  }
  return (
    <Box>
      <Link href="/">
        <Button
          mt="3"
          ml={4}
          variant="unstyled"
          color="white"
          fontWeight="bold"
          fontSize="xl"
        >
          <ArrowBackIcon boxSize="10" color="white" /> Back
        </Button>
      </Link>

      <Container mt={10}>
        <HStack>
          <Text
            textAlign="center"
            color="white"
            fontWeight="bold"
            fontSize="4xl"
          >
            Meme Generator 💀
          </Text>

          <Button
            onClick={handleGenerate}
            color="white"
            bg="linear-gradient(to top, #30cfd0 0%, #330867 100%)"
            isDisabled={load}
          >
            {" "}
            Generate 👆{" "}
          </Button>
        </HStack>

        <Flex
        display={load ? 'flex': 'none'}
          fontSize="xl"
          color="white"
          align="center"
          gap={3}
          justify="center"
          mt={32}
        >
          Press the{" "}
          <Button
          onClick={handleGenerateLoad}
            color="white"
            bg="linear-gradient(to top, #30cfd0 0%, #330867 100%)"
          >
            Generate !
          </Button>{" "}
          Button to get random memes!
        </Flex>

        <Center mt='20' display={load ? 'none' : 'flex'}>
          <Image
            w="400px"
            h="300px"
            src={memes[selectedImageIndex]}
            alt="memes"
          />
        </Center>
      </Container>

      <Flex
        fontWeight="bold"
        bg="whiteAlpha.400"
        px={4}
        rounded="lg"
        pos="fixed"
        bottom={3}
        left="50%"
        transform="translate(-50%, -50%)"
        gap={1}
      >
        Made By <Text color="blackAlpha.500">Taufik H 💀</Text>
      </Flex>
    </Box>
  );
};

export default MemeGenerator;
