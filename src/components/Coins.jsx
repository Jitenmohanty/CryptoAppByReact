import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import { Container, HStack } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorCompoNent from "./ErrorCompoNent";
import CoinCards from "./CoinCards";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrancy] = useState("inr");

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

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

  if (error)
    return <ErrorCompoNent message={"Error on Fetching  Coins card"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader/>
      ) : (
        <>
          <HStack wrap={"wrap"}>
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
        </>
      )}
    </Container>
  );
};

export default Coins;
