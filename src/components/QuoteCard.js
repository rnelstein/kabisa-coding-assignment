import React from "react";
import { Card } from "react-bootstrap";
import SocialButtons from "./SocialButtons";

const img = process.env.PUBLIC_URL + "/img/343A40.png";

export function QuoteCard({ quote, author, permalink }) {
  return (
    <Card style={{ width: "36rem" }}>
      <Card.Img src={img} alt="Card image" height={500} />
      <Card.ImgOverlay>
        <blockquote className="blockquote mb-0">
          <p className="text-white">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      </Card.ImgOverlay>
      <Card.Footer className="text-muted">
        <SocialButtons url={permalink} />
      </Card.Footer>
    </Card>
  );
}
