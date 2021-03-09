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
      <ListGroup.Item>
        <FacebookShareButton url={url}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </ListGroup.Item>
      <ListGroup.Item>
        <TwitterShareButton url={url}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </ListGroup.Item>

      <ListGroup.Item>
        <LinkedinShareButton url={url}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      </ListGroup.Item>

      <ListGroup.Item>
        <WhatsappShareButton url={url}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </ListGroup.Item>
      <ListGroup.Item>
        <EmailShareButton url={url}>
          <EmailIcon size={32} round />
        </EmailShareButton>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SocialButtons;
