import {
  Button,
  Paper
} from '@material-ui/core';
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import Badge from "components/Badge/Badge.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Paginations from "components/Pagination/Pagination.js";
// plugin that creates slider
import Slider from "nouislider";
import React from "react";
// import custom from "assets/jss/Homepage/styles.js";
import content from '../../assets/content/homepage/ceo';

import { EventCalendar } from '../../components/Calendar';
import Link from 'next/link';
import EmbeddedPlayer from '../../components/Youtube/EmbeddedPlayer';
import FadeIn from '../../components/ScrollAnimations/FadeIn';

const {
  ceoImage,
} = content;

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  const handleToggle = value => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  // Styles
  const padded = {
    "padding": "20px"
  };
  const textCenter = {
    "text-align": "center"
  };
  // const 

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <EventCalendar />
      </div>
    </div>
  );
}
