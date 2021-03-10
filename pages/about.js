// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-kit/pages/components.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import SectionBasics from "pages-sections/Components-Sections/SectionBasics.js";
import React from "react";

const useStyles = makeStyles(styles);

export default function About(props) {
  const brand = "UNSW ASEAN society";
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
                <h3 className={classes.subtitle}>The abouts page</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        {/* <SectionBasics /> */}

        <div className={classes.container}>
          <div
            className={classes.title}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1> We believe in everything ASEAN… </h1>
          </div>
          <hr />

          <div
            className={classes.title}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1> One Vision. One Identity. One Community. </h1>
          </div>
          <hr />

          <div className={classes.title}>
            <h1> About ASEAN… </h1>
          </div>

          <div className={classes.p}>
            <p style={{ fontSize: "16px" }}>
              {" "}
              The Association of Southeast Asian Nations, or ASEAN, was
              established on 8 August 1967 in Bangkok, Thailand, with the
              signing of the ASEAN Declaration (Bangkok Declaration) by the
              Founding Fathers of ASEAN, namely Indonesia, Malaysia,
              Philippines, Singapore and Thailand. Brunei Darussalam then joined
              on 7 January 1984, Vietnam on 28 July 1995, Lao PDR and Myanmar on
              23 July 1997, and Cambodia on 30 April 1999, making up what is
              today the ten Member States of ASEAN.{" "}
            </p>

            <Button
              color="danger"
              size="lg"
              href="https://asean.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more...
            </Button>
          </div>
          <hr />

          <div
            className={classes.title}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1> What is ASEAN? </h1>
          </div>

          {/* TODO: For Arthur to fix */}
          {/* <div>
            <video
              style={{
                width: "900px",
                height: "506px",
                left: "0px",
                top: "0px",
              }}
              tabindex="-1"
              controlslist="nodownload"
              src="https://www.youtube.com/70ac1556-df2e-4812-a14d-7687ba3940fb"
            ></video>
          </div>
          <hr /> */}

          <div className={classes.title}>
            <h1> ASEAN Community </h1>
          </div>

          <div className={classes.p}>
            <p style={{ fontSize: "16px" }}>
              {" "}
              The ASEAN Vision 2020, adopted by the ASEAN Leaders on the 30th
              Anniversary of ASEAN, agreed on a shared vision of ASEAN as a
              concert of Southeast Asian nations, outward looking, living in
              peace, stability and prosperity, bonded together in partnership in
              dynamic development and in a community of caring societies. At the
              9th ASEAN Summit in 2003, the ASEAN Leaders resolved to establish
              an ASEAN Community. At the 12th ASEAN Summit in January 2007,
              leaders affirmed their strong commitment to accelerate the
              establishment of an ASEAN Community by 2015 and signed the Cebu
              Declaration on the Acceleration of the Establishment of an ASEAN
              Community by 2015.{" "}
            </p>
          </div>
          <hr />

          {/* TODO: Make 3 separate columns */}
          <div
            className={classes.title}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1> The Three ASEAN Pillars… </h1>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
