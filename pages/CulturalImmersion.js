// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/nextjs-material-kit/pages/components.js";
// nodejs library that concatenates classes
import classNames from "classnames";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import React from "react";
import CulturalImmersionSection from '../pages-sections/Cultural-Immersion-Section/CulturalImmersionSection';


const useStyles = makeStyles(styles);

export default function Index(props) {
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
                {/* <h3 className={classes.subtitle}>
                  A Badass Material Kit based on Material-UI and NextJS.
                </h3> */}
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
          ASSSSSSSSSSSSSSSsss
        <CulturalImmersionSection />
      </div>
      <Footer />
    </div>
  );
}

