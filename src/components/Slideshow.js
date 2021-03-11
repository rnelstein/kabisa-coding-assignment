import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import { addMultipleQuotes } from "../firebase";
import { getRandomQuotes } from "../quotesAPI";
import { QuoteCard } from "./QuoteCard";

export function Slideshow() {
  const [quotes, setQuotes] = React.useState(null);

  React.useEffect(() => {
    getRandomQuotes(5).then((data) => {
      addMultipleQuotes(data);
      setQuotes(data);
    });
  }, []);

  if (!quotes) {
    return "loading...";
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Carousel>
          {quotes.map((quote, i) => (
            <Carousel.Item key={i}>
              <QuoteCard {...quote} />
            </Carousel.Item>
          ))}
        </Carousel>
      </Row>
    </Container>
  );
}
