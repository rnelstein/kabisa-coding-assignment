import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { getRandomQuote } from "../quotesAPI";
import { QuoteCard } from "./QuoteCard";

export function Home() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    getRandomQuote().then(({ data }) => setQuote(data));
  }, []);

  if (!quote) {
    return "loading...";
  }

  return (
    <Container>
      <Row>
        <QuoteCard {...quote} />
      </Row>
    </Container>
  );
}
