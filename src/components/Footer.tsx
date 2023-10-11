import { Flex, Text } from "@chakra-ui/react";

const Footer: React.FC = (): JSX.Element => {
  return (
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
  );
};

export default Footer;
