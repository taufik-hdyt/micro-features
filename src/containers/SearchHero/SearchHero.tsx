import { axiosInstance } from "@/lib/axios";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  Grid,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { KeyboardEvent, useEffect, useState } from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Link from "next/link";

interface IDataHero {
  hero_avatar: string;
  hero_id: number;
  hero_name: string;
  hero_role: string;
  hero_specially: string;
}
const SearchHero: React.FC = (): JSX.Element => {
  const [dataHero, setDataHero] = useState<IDataHero[]>();

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const [loading, setLoading] = useState(false);

  const fectchDataHero = async (search: string) => {
    setLoading(true);
    try {
      const dataHero = await axiosInstance.get(`/hero?heroName=${search}`);
      const data = dataHero?.data.hero;
      setDataHero(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fectchDataHero(searchResult);
  }, [searchResult]);

  function handleSearch() {
    setSearchResult(searchQuery);
  }
  function handleSearchEnter(e: KeyboardEvent<HTMLInputElement>) {
    if(e.key === 'Enter'){
      setSearchResult(searchQuery);
    }
  }

  return (
    <Box
      bg="url(bgml.jpg)"
      h="100vh"
      overflowY="auto"
      bgSize="cover"
      bgPos="center"
    >
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

      <Container py={10} maxW="container.md">
        <Heading textAlign="center" fontSize="3xl" py={4} color="white">
          Nama Hero Mobile Legends
        </Heading>
        <InputGroup size="md">
          {loading === true && (
            <Box px='4'>
              <Spinner size="lg" color="white" />
            </Box>
          )}

          <Input
            onChange={(e) => setSearchQuery(e.target.value)}
            color="white"
            placeholder="Search Hero"
            onKeyUp={handleSearchEnter}
          />
          <InputRightAddon onClick={handleSearch} cursor="pointer">
            Search
          </InputRightAddon>
        </InputGroup>
      </Container>
      <Box display="flex" justifyContent="center">
        {!dataHero?.length && loading === false && (
          <Image rounded="lg" src="notfound.jpg" alt="notfound" />
        )}
      </Box>
      <Grid
        px={30}
        gap="3"
        templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      >
        {dataHero?.map((e: IDataHero, idx: number) => (
          <Card key={idx} w="300px" bg="lightskyblue" p={4}>
            <Heading textAlign="center">{e.hero_name}</Heading>
            <HStack mt="4">
              <Text fontWeight="bold">Role</Text>
              <Flex gap="1">
                <Text fontWeight="semibold" px="3" bg="lightcoral" rounded="lg">
                  {e.hero_role}
                </Text>
              </Flex>
            </HStack>
            <HStack mt="2">
              <Text fontWeight="bold">Specially</Text>
              <Flex gap="1" flexWrap="nowrap">
                <Text fontWeight="semibold" px="3" bg="lightcoral" rounded="lg">
                  {e.hero_specially}
                </Text>
              </Flex>
            </HStack>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default SearchHero;
