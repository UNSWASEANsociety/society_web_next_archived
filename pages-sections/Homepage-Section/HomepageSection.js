import {
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
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [40],
        connect: [true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    if (
      !document.getElementById("sliderDouble").classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderDouble"), {
        start: [20, 60],
        connect: [false, true, false],
        step: 1,
        range: { min: 0, max: 100 }
      });
    }
    return function cleanup() {};
  });
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

        <div className={classes.space70} />
        <div id="checkRadios">
          <GridContainer>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h3>Checkboxes</h3>
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(21)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Unchecked"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(22)}
                      checked={checked.indexOf(22) !== -1 ? true : false}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Checked"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Checkbox
                      tabIndex={-1}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    disabled: classes.disabledCheckboxAndRadio,
                    root: classes.labelRoot
                  }}
                  label="Disabled Unchecked"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Checkbox
                      tabIndex={-1}
                      checked={checked.indexOf(24) !== -1 ? true : false}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    disabled: classes.disabledCheckboxAndRadio,
                    root: classes.labelRoot
                  }}
                  label="Disabled Checked"
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h3>Radio Buttons</h3>
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "a"}
                      onChange={() => setSelectedEnabled("a")}
                      value="a"
                      name="radio button enabled"
                      aria-label="A"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="First Radio"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedEnabled === "b"}
                      onChange={() => setSelectedEnabled("b")}
                      value="b"
                      name="radio button enabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="Second Radio"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Radio
                      checked={false}
                      value="a"
                      name="radio button disabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        disabled: classes.disabledCheckboxAndRadio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot
                  }}
                  label="Disabled Unchecked Radio"
                />
              </div>
              <div
                className={
                  classes.checkboxAndRadio +
                  " " +
                  classes.checkboxAndRadioHorizontal
                }
              >
                <FormControlLabel
                  disabled
                  control={
                    <Radio
                      checked={true}
                      value="b"
                      name="radio button disabled"
                      aria-label="B"
                      icon={
                        <FiberManualRecord className={classes.radioUnchecked} />
                      }
                      checkedIcon={
                        <FiberManualRecord className={classes.radioChecked} />
                      }
                      classes={{
                        checked: classes.radio,
                        disabled: classes.disabledCheckboxAndRadio,
                        root: classes.radioRoot
                      }}
                    />
                  }
                  classes={{ label: classes.label, root: classes.labelRoot }}
                  label="Disabled Checked Radio"
                />
              </div>
            </GridItem>
            <GridItem xs={12} sm={6} md={4} lg={3}>
              <div className={classes.title}>
                <h3>Toggle Buttons</h3>
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Switch
                      checked={checkedA}
                      onChange={event => setCheckedA(event.target.checked)}
                      value="checkedA"
                      classes={{
                        switchBase: classes.switchBase,
                        checked: classes.switchChecked,
                        thumb: classes.switchIcon,
                        track: classes.switchBar
                      }}
                    />
                  }
                  classes={{
                    label: classes.label
                  }}
                  label="Toggle is on"
                />
              </div>
              <div>
                <FormControlLabel
                  control={
                    <Switch
                      checked={checkedB}
                      onChange={event => setCheckedB(event.target.checked)}
                      value="checkedB"
                      classes={{
                        switchBase: classes.switchBase,
                        checked: classes.switchChecked,
                        thumb: classes.switchIcon,
                        track: classes.switchBar
                      }}
                    />
                  }
                  classes={{
                    label: classes.label
                  }}
                  label="Toggle is off"
                />
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space70} />
        <div id="progress">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Progress Bars</h3>
              </div>
              <CustomLinearProgress
                variant="determinate"
                color="primary"
                value={30}
              />
              <CustomLinearProgress
                variant="determinate"
                color="info"
                value={60}
              />
              <CustomLinearProgress
                variant="determinate"
                color="success"
                value={100}
                style={{ width: "35%", display: "inline-block" }}
              />
              <CustomLinearProgress
                variant="determinate"
                color="warning"
                value={100}
                style={{ width: "20%", display: "inline-block" }}
              />
              <CustomLinearProgress
                variant="determinate"
                color="danger"
                value={25}
                style={{ width: "45%", display: "inline-block" }}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Pagination</h3>
              </div>
              <Paginations
                pages={[
                  { text: 1 },
                  { text: "..." },
                  { text: 5 },
                  { text: 6 },
                  { active: true, text: 7 },
                  { text: 8 },
                  { text: 9 },
                  { text: "..." },
                  { text: 12 }
                ]}
              />
              <Paginations
                pages={[
                  { text: "PREV" },
                  { text: 1 },
                  { text: 2 },
                  { active: true, text: 3 },
                  { text: 4 },
                  { text: 5 },
                  { text: "NEXT" }
                ]}
                color="info"
              />
            </GridItem>
          </GridContainer>
        </div>
        <div id="sliders">
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Sliders</h3>
              </div>
              <div id="sliderRegular" className="slider-primary" />
              <br />
              <div id="sliderDouble" className="slider-info" />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.title}>
                <h3>Badges</h3>
              </div>
              <Badge>default</Badge>
              <Badge color="primary">primary</Badge>
              <Badge color="info">info</Badge>
              <Badge color="success">success</Badge>
              <Badge color="warning">warning</Badge>
              <Badge color="danger">danger</Badge>
              <Badge color="rose">rose</Badge>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
