import React, { useContext } from "react";
import { Container, Row } from "react-bootstrap";
import { QuoteCard } from "./QuoteCard";
import { GlobalContext } from "../context/GlobalState";

export function LikedQuotes() {
  const { likedQuotes } = useContext(GlobalContext);

  if (!likedQuotes) {
    return "loading...";
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <ul className="list-unstyled">
          {likedQuotes.length ? (
            likedQuotes.map((quote, i) => (
              <li key={i}>
                <QuoteCard {...quote} />
              </li>
            ))
          ) : (
            <h3>No quotes liked yet!</h3>
          )}
        </ul>
      </Row>
    </Container>
  );
}
