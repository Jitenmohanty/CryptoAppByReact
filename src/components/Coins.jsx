import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Button, Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorCompoNent from "./ErrorCompoNent";
import CoinCards from "./CoinCards";

const Coins = () => {
  const scrollBehaviourRef = useRef();
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrancy] = useState("inr");

  const btn = new Array(132).fill(1);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  };

  const handleMouseEnter = () => {
    const content = scrollBehaviourRef.current;
    if (content) {
      content.style.animation = "scroll 5s linear infinite"; // Optional: Smooth scrolling animation
      console.log("Lol");
    }
  };

  const handleMouseLeave = () => {
    const content = scrollBehaviourRef.current;
    if (content) {
      content.style.animation = "none";
    }
  };

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  if (error)
    return <ErrorCompoNent message={"Error On Fetching  Coins Cards..."} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup p={6} value={currency} onChange={setCurrancy}>
            <HStack spacing={4}>
              <Radio value={"inr"}>₹ INR</Radio>
              <Radio value={"usd"}>$ USD</Radio>
              <Radio value={"eur"}>€ EURO</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCards
                key={i.id}
                id={i.id}
                symbol={i.symbol}
                price={i.current_price}
                name={i.name}
                img={i.image}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack
            ref={scrollBehaviourRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            w={"full"}
            overflowX={"auto"}
            css={{
              "&::-webkit-scrollbar": {
                width: "4px",
                height: "8px",
                margin: "4px",
              },
              "&::-webkit-scrollbar-track": {
                background: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#c99dc9",
                borderRadius: "3px",
              },
            }}
          >
            {btn.map((item, index) => (
              <Button
                key={index}
                bgColor={"blackAlpha.900"}
                color={"white"}
                onClick={() => changePage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

export default Coins;
