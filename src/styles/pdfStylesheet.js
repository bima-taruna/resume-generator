import { StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    padding: "40px 48px", // matches .resume-canvas padding
    fontSize: 12,
    fontFamily: "Source Serif Pro",
    color: "black", // matches .resume-canvas color
    backgroundColor: "white",
  },
  headerAdditional: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  textWithIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    marginBottom: 16, // matches section gap
  },
  header: {
    fontSize: 24, // matches .full-name font-size: 1.5rem (~24px)
    fontWeight: "bold",
    lineHeight: 1.0,
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 16, // matches .headline/h2 font-size: 1rem (16px)
    fontWeight: "bold",
    lineHeight: 1.5,
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    marginVertical: 8,
  },
  h3: {
    fontSize: 16, // matches h3 font-size: 16px
    fontWeight: 700,
    lineHeight: 1.25,
    marginBottom: 4,
  },
  list: {
    margin: 0,
    padding: 0,
    gap: 16, // matches .cert-list, .exp-list, etc. gap: 1rem (16px)
  },
  listItem: {
    marginBottom: 4,
    fontSize: 12,
    fontWeight: 500, // matches .skill-list > li, .language-list > li, etc.
  },
  link: {
    color: "#0077cc",
    textDecoration: "underline",
  },
});

export default styles;
