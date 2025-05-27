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
    gap: 4,
  },
  textWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
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
  profileList: {
    flexDirection: "column",
    gap: 7,
  },
  expList: {
    flexDirection: "column",
    gap: 16,
  },
  listItem: {
    flexDirection: "column",
    gap: 4,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
    fontSize: 14,
  },
  sectionDetail: {
    fontWeight: "bold",
    fontSize: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  // listItem: {
  //   marginBottom: 4,
  //   fontSize: 12,
  //   fontWeight: 500, // matches .skill-list > li, .language-list > li, etc.
  // },
  link: {
    color: "#0077cc",
    textDecoration: "underline",
  },
});

export default styles;
