import Footer from "@/components/Footer";
import { ArrowBackIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  HStack,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

const CurrencyConverter: React.FC = (): JSX.Element => {
  const [rates, setRates] = useState<Record<string, number>>({});

  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("IDR");
  const [toCurrency, setToCurrency] = useState("EUR");

  const [convertedAmount, setConvertedAmount] = useState(0);

  const convertCurrency = async () => {
    try {
      const response = await axios.get(
        "https://api.exchangerate-api.com/v4/latest/EUR"
      );
      const ratesResponse = response.data.rates;
      setRates(ratesResponse);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    convertCurrency();
  }, []);

  const convertCurrencyResult = () => {
    const rate = rates[toCurrency] / rates[fromCurrency];
    setConvertedAmount(parseInt((amount * rate).toFixed(2)));
  };


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

      <Container maxW="container.sm">
        <Text
          mt="20"
          textAlign="center"
          color="white"
          fontWeight="bold"
          fontSize="4xl"
        >
          Currency Converter 💰
        </Text>

        <Box mt={8} border="2px solid white" p={3} rounded="lg">
          <HStack color="white" fontWeight="semibold">
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseInt(e.target.value))}
              defaultValue={0}
            />
            <Select
              value={fromCurrency}
              defaultValue={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              w="200px"
              color="black"
              fontWeight="bold"
            >
              {Object.keys(rates).map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
            </Select>
            <Text>TO</Text>
            <Select
              value={toCurrency}
              defaultValue={fromCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              w="200px"
              color="black"
              fontWeight="bold"
            >
              {Object.keys(rates).map((e) => (
                <option value={e} key={e}>
                  {e}
                </option>
              ))}
            </Select>
            <Button onClick={convertCurrencyResult} w="200px">
              Convert
            </Button>
          </HStack>
          <Text mt={20} fontWeight="bold" fontSize="lg" color="white">
            Result :
          </Text>
          <Text border="1px solid white" p={4} rounded="lg" color="white">
            {convertedAmount
              ? convertedAmount +' ' + toCurrency
              : "Please convert the currency first!"}
          </Text>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default CurrencyConverter;
