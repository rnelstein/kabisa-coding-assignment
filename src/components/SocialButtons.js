import React from "react";
import { ListGroup } from "react-bootstrap";

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FacebookIcon,
  TwitterIcon,
  EmailIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "react-share";

const SocialButtons = ({ url }) => {
  return (
    <ListGroup horizontal data-testid={url}>
      <ListGroup.Item className="custom-list-group-item">
        <FacebookShareButton url={url}>
          <FacebookIcon size={25} round />
        </FacebookShareButton>
      </ListGroup.Item>
      <ListGroup.Item className="custom-list-group-item">
        <TwitterShareButton url={url}>
          <TwitterIcon size={25} round />
        </TwitterShareButton>
      </ListGroup.Item>

      <ListGroup.Item className="custom-list-group-item">
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={25} round />
        </LinkedinShareButton>
      </ListGroup.Item>

      <ListGroup.Item className="custom-list-group-item">
        <WhatsappShareButton url={url}>
          <WhatsappIcon size={25} round />
        </WhatsappShareButton>
      </ListGroup.Item>
      <ListGroup.Item className="custom-list-group-item">
        <EmailShareButton url={url}>
          <EmailIcon size={25} round />
        </EmailShareButton>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SocialButtons;
