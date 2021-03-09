/*eslint-disable*/
// material-ui core components
import { Button, Tooltip } from "@material-ui/core";
import React from "react";
import styles from "assets/jss/nextjs-material-kit/components/footerStyle.js";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const socialMedia = {
    linkedin: "https://www.linkedin.com/company/unsw-asean-conference/",
    instagram: "https://www.instagram.com/aseansoc_unsw/?hl=en",
    facebook: "https://www.facebook.com/ASEANSocUNSW",
    twitter: "https://twitter.com/AseanUnsw"
}

const SocialMediaLinks = (props) => {
  const classes = useStyles();

  return (
    <>
      <Tooltip
        id="linkedin-tooltip"
        title="Follow us on linkedin"
        placement={"top"}
      >
        <Button
          color="transparent"
          href={socialMedia.linkedin}
          target="_blank"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fab fa-linkedin"} />
        </Button>
      </Tooltip>

      <Tooltip
        id="instagram-tooltip"
        title="Follow us on instagram"
        placement={"top"}
      >
        <Button
          color="transparent"
          href={socialMedia.instagram}
          target="_blank"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fab fa-instagram"} />
        </Button>
      </Tooltip>

      <Tooltip
        id="facebook-tooltip"
        title="Follow us on facebook"
        placement={"top"}
      >
        <Button
          color="transparent"
          href={socialMedia.facebook}
          target="_blank"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fab fa-facebook"} />
        </Button>
      </Tooltip>

      <Tooltip
        id="twitter-tooltip"
        title="Follow us on twitter"
        placement={"top"}
      >
        <Button
          color="transparent"
          href={socialMedia.twitter}
          target="_blank"
          className={classes.navLink}
        >
          <i className={classes.socialIcons + " fab fa-twitter"} />
        </Button>
      </Tooltip>
    </>
  );
};

SocialMediaLinks.propTypes = {};

export default SocialMediaLinks;
