import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import { getRandomQuotes } from "../quotesAPI";
import { QuoteCard } from "./QuoteCard";

export function Slideshow() {
  const [quotes, setQuotes] = React.useState(null);

  React.useEffect(() => {
    getRandomQuotes(5).then((data) => setQuotes(data));
  }, []);

  if (!quotes) {
    return "loading...";
  }
  return (
    <Container>
      <Row>
        <Carousel>
          {quotes.map((quote) => (
            <Carousel.Item key={quote.id}>
              <QuoteCard {...quote} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
}
