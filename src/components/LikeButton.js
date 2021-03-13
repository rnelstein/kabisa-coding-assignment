import React from "react";
import { Button } from "react-bootstrap";

export function LikeButton({ isLiked, likes, handleLike }) {
  return (
    <Button onClick={handleLike}>
      {likes && likes.length}{" "}
      <i className={`${isLiked ? "fas" : "far"} fa-thumbs-up`} />
    </Button>
  );
}
