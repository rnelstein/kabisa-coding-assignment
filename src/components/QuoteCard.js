import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import SocialButtons from "./SocialButtons";
import { GlobalContext } from "../context/GlobalState";
import { LikeButton } from "./LikeButton";
import { findQuoteById } from "../utilities";

const img = process.env.PUBLIC_URL + "/img/343A40.png";

export function QuoteCard({ id, quote, author, permalink, likes }) {
  const { handleLike, likedQuotes } = useContext(GlobalContext);

  const foundLikedQuote = findQuoteById(likedQuotes, id);

  if (foundLikedQuote) {
    likes = foundLikedQuote.likes;
  }

  return (
    <Card className="custom-card mt-2 mb-3">
      <Card.Img src={img} alt="Card image" className="d-block w-100" />
      <Card.ImgOverlay>
        <blockquote className="blockquote mb-0 text-center">
          <p className="text-white">{quote}</p>
          <footer className="blockquote-footer mb-1">{author}</footer>
          <LikeButton
            likes={likes}
            handleLike={() => handleLike({ id, quote, permalink, likes })}
          />
        </blockquote>
      </Card.ImgOverlay>
      <Card.Footer className="mx-auto custom-card-footer">
        <SocialButtons url={permalink} />
      </Card.Footer>
    </Card>
  );
}
