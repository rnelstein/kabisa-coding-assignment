import React from "react";
import { Card } from "react-bootstrap";
import SocialButtons from "./SocialButtons";

export function QuoteCard({ quote, author, permalink }) {
  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      </Card.Body>
      <Card.Footer className="text-muted">
        <SocialButtons url={permalink} />
      </Card.Footer>
    </Card>
  );
}
