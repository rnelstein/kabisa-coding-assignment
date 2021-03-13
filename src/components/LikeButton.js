import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { GlobalContext } from "../context/GlobalState";
import { likesIncludesId } from "../utilities";

export function LikeButton({ likes, handleLike }) {
  const { user } = useContext(GlobalContext);

  const isLiked = user && likes && likesIncludesId(likes, user.uid);
  return (
    <Button onClick={handleLike}>
      {likes && likes.length}{" "}
      <i className={`${isLiked ? "fas" : "far"} fa-thumbs-up`} />
    </Button>
  );
}
