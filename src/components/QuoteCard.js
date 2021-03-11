import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import SocialButtons from "./SocialButtons";
import { GlobalContext } from "../context/GlobalState";
import { LikeButton } from "./LikeButton";

const img = process.env.PUBLIC_URL + "/img/343A40.png";

export function QuoteCard({ id, quote, author, permalink, likes }) {
  const { handleLike } = useContext(GlobalContext);

  return (
    <Card style={{ width: "36rem" }}>
      <Card.Img src={img} alt="Card image" height={500} />
      <Card.ImgOverlay>
        <blockquote className="blockquote mb-0 text-center">
          <p className="text-white">{quote}</p>
          <footer className="blockquote-footer mb-1">{author}</footer>
          <LikeButton
            likes={likes}
            handleLike={() => handleLike({ id, quote, permalink })}
          />
        </blockquote>
      </Card.ImgOverlay>
      <Card.Footer className="mx-auto">
        <SocialButtons url={permalink} />
      </Card.Footer>
    </Card>
  );
}
