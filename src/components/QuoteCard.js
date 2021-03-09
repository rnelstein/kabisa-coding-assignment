import React from "react";
import { Card } from "react-bootstrap";

export function QuoteCard({ quote, author }) {
  return (
    <Card>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}
