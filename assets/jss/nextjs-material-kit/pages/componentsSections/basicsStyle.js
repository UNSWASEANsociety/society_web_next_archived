import { container, title } from "assets/jss/nextjs-material-kit.js";
import customCheckboxRadioSwitch from "assets/jss/nextjs-material-kit/customCheckboxRadioSwitch.js";

const basicsStyle = {
  // Original styling:
  sections: {
    padding: "70px 0"
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  // Custom styling
  sloganSection: {
    backgroundColor: "darkslateblue",
    color: "white",
    padding: "10px",
    width: "100%",
  },
  whiteTitle: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    color: "white"
  },
  textCentered: {
    textAlign: "center"
  },
  ...customCheckboxRadioSwitch
};

export default basicsStyle;
