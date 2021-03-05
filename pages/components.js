// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-kit/pages/components.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Button from "components/CustomButtons/Button.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
// react components for routing our app without refresh
import Link from "next/link";
// sections for this page
import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";
import SectionCompletedExamples from "pages-sections/Components-Sections/SectionCompletedExamples.js";
import SectionDownload from "pages-sections/Components-Sections/SectionDownload.js";
import SectionExamples from "pages-sections/Components-Sections/SectionExamples.js";
import SectionJavascript from "pages-sections/Components-Sections/SectionJavascript.js";
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
import SectionNotifications from "pages-sections/Components-Sections/SectionNotifications.js";
import SectionPills from "pages-sections/Components-Sections/SectionPills.js";
import SectionTabs from "pages-sections/Components-Sections/SectionTabs.js";
import React from "react";


const useStyles = makeStyles(styles);

export default function Components(props) {
  const brand = "UNSW ASEAN society"
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand={brand}
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg2.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>{brand}.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material Kit based on Material-UI and NextJS.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics />
        <SectionTabs />
        <SectionPills />
        <SectionNotifications />
        <SectionJavascript />
        <SectionCarousel />
        <SectionCompletedExamples />
        <SectionLogin />
        <GridItem md={12} className={classes.textCenter}>
          <Link href="/login">
            <a className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </a>
          </Link>
        </GridItem>
        <SectionExamples />
        <SectionDownload />
      </div>

      <Footer />
    </div>
  );
}
