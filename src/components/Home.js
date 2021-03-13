import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { addQuote } from "../firebase";
import { getRandomQuote } from "../quotesAPI";
import { QuoteCard } from "./QuoteCard";

export function Home() {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    getRandomQuote().then(({ data }) => {
      addQuote(data);
      setQuote(data);
    });
  }, []);

  if (!quote) {
    return "loading...";
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <QuoteCard {...quote} />
      </Row>
    </Container>
  );
}
