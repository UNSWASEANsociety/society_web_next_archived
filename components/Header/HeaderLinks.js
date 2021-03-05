/*eslint-disable*/
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";
import Button from "components/CustomButtons/Button.js";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Link from "next/link";
import React from "react";

const useStyles = makeStyles(styles);

const LinkButton = ({ href, color, classes, children }) => {
  return (
    <Link href={href}>
      <Button color={color} target="_blank" className={classes.navLink}>
        {children}
      </Button>
    </Link>
  );
};

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <LinkButton href="/" color="transparent" classes={classes}>
          Home
        </LinkButton>
      </ListItem>

      <ListItem className={classes.listItem}>
        <LinkButton href="/about" color="transparent" classes={classes}>
          About ASEAN
        </LinkButton>
      </ListItem>

      <ListItem className={classes.listItem}>
        <LinkButton href="/ourteam" color="transparent" classes={classes}>
          <CloudDownload className={classes.icons} /> Our Team
        </LinkButton>
      </ListItem>

      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Events"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>All components</a>
            </Link>,
          ]}
        />
      </ListItem>
    </List>
  );
}
