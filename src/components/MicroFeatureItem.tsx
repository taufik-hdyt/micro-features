import { Box, Button, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

interface IProps{
  title: string
  subTitle: string
  url: string
}
const MicroFeatureItem: React.FC<IProps> = ({subTitle,title,url}): JSX.Element => {
  return (
    <Stack
      bg=" linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%) "
      justify="space-between"
      border="2px solid gray"
      py={2}
      px={4}
      rounded="lg"
      direction={{ base: "column", sm: "row" }}
      align="center"
    >
      <Box>
        <Text fontWeight="bold" fontSize="xl">
          {title}
        </Text>
        <Text color="gray.600">{subTitle}</Text>
      </Box>
      <Link href={`/${url}`} target="_blank">
        <Button colorScheme="facebook">View Page</Button>
      </Link>
    </Stack>
  );
};

export default MicroFeatureItem;
