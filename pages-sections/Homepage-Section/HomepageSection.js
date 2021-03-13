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

import EmbeddedPlayer from '../../components/Youtube/EmbeddedPlayer';

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
  return (
    <div className={classes.sections}>
      <div className={classes.container}>

        {/* Slogan banner */}
        <div className={`${classes.sloganSection} ${classes.textCentered}`}>
          <div className={classes.whiteTitle}>
            <h2>Inspiring the Present</h2>
          </div>
          <div className={`${classes.whiteTitle} ${classes.textCentered}`}>
            <h2>Envisioning the Future</h2>
          </div>
        </div>

        {/* Welcome message */}
        <div className={`${classes.title} ${classes.textCentered}`}>
          <h2>Welcome Message</h2>
        </div>
        <hr />

        <GridContainer>
          <GridItem xs={12} sm={4} md={4} lg={3}>
            <h3>A message from our CEO:</h3>
            <Paper variant="outlined">
              <img src={ceoImage} />
            </Paper>
          </GridItem>
          <GridItem xs={12} sm={8} md={8} lg={8}>
            <h3>
              Anthony Paulo Sunjaya
            </h3>
            {/* TODO: Take this out to a markdown file */}
            <div>
              It is my pleasure to welcome you to the UNSW ASEAN CONFERENCE 2020. The Conference aims to amalgamate socio-cultural, political and, economic interests all under one roof, whilst actively collaborating with the Australian and ASEAN youth from 10 different countries. 

              The ultimate objective of the conference is to not only embolden and strengthen the ASEAN identity, but also empower and encourage the ASEAN-Australasian youth to more proactively engage, in the increasingly important and mutually beneficial future of the trans-international and transdisciplinary exchange of knowledge.

              The Conference spread over 3 days will present over 40 outstanding speakers from former Prime Ministers, Ministers, CEOs, academics to activists talking about issues that matter to ASEAN and globally today.

              With a wide variety of topics to look forward to from Social Entrepreneurship, Human Rights, Cybersecurity, Climate Change, Women Empowerment to Impacts of COVID-19, there's certainly a topic for you. We look forward to seeing you all on the 10th, 17th and 24th of October 2020.
            </div>
          </GridItem>
        </GridContainer>

        <EmbeddedPlayer videoId="yiYLijzTb5Q" />


        <GridContainer>
          <GridItem xs={12} sm={4} md={4} lg={3}>
            <h3>Vision</h3>
            <div>
              Inspiring the Present. Envisioning the Future of ASEAN, Australia and global relations.
            </div>
            <div>
              Download our handbook for free!
            </div>
          </GridItem>
          <GridItem xs={12} sm={8} md={8} lg={8}>
            <h3>
              Mission
            </h3>
            {/* TODO: Take this out to a markdown file */}
            <div>
              The Conference aims to bring together over 2000 participants from ASEAN, Australia and globally to connect and discuss possible solutions about issues that matter to ASEAN and globally today including our joint future beyond the COVID-19 pandemic.  
            </div>
            <Button variant="contained" color="primary">
              Download Handbook
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
