import { axiosInstance } from "@/lib/axios";
import {
  Box,
  Card,
  Container,
  Flex,
  Grid,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { KeyboardEvent, useEffect, useState } from "react";

interface IDataHero {
  hero_avatar: string;
  hero_id: number;
  hero_name: string;
  hero_role: string;
  hero_specially: string;
}
const SearchHero: React.FC = (): JSX.Element => {
  const [dataHero, setDataHero] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState("");
  const fectchData = async (search: string) => {
    try {
      const dataHero = await axiosInstance.get(`/hero?heroName=${search}`);
      const data = dataHero?.data.hero;
      setDataHero(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fectchData(searchResult);
  }, [dataHero]);

  function handleSearch() {
    setSearchResult(searchQuery);
  }

  return (
    <Box
      bg="url(bgml.jpg)"
      h="100vh"
      overflowY="auto"
      bgSize="cover"
      bgPos="center"
    >
      <Container py={20} maxW="container.md">
        <InputGroup size="md">
          <Input
            onChange={(e) => setSearchQuery(e.target.value)}
            color="white"
            placeholder="Search Hero"

          />
          <InputRightAddon onClick={handleSearch} cursor="pointer">
            Search
          </InputRightAddon>
        </InputGroup>
      </Container>
      {!dataHero?.length && (
        <Box display='flex' justifyContent='center'>
          <Image rounded='lg' src="notfound.jpg" alt="notfound" />
        </Box>
      )}
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
