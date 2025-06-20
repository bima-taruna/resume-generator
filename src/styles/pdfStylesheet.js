import { StyleSheet } from "@react-pdf/renderer";
const styles = StyleSheet.create({
  page: {
    padding: "40px 48px", // matches .resume-canvas padding
    fontSize: 12,
    fontFamily: "Source Serif 4",
    color: "black", // matches .resume-canvas color
    backgroundColor: "white",
  },
  headerAdditional: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  headerSection: {
    flexDirection: "row",
    gap: 10,
  },
  profilePic: {
    width: 70,
    height: 70,
    borderWidth: 10,
    borderColor: "black",
  },
  textWithIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  section: {
    marginBottom: 8, // matches section gap
  },
  header: {
    fontSize: 24, // matches .full-name font-size: 1.5rem (~24px)
    fontWeight: "bold",
    lineHeight: 1.0,
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 12,
    fontFamily: "Source Serif 4 Bold",
    lineHeight: 1.5,
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    marginVertical: 8,
  },
  h3: {
    fontSize: 12, // matches h3 font-size: 16px
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
  skillrow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  profilesItem: {
    flexDirection: "row",
    gap: 12,
  },
  skillItem: {
    width: "25%",
  },
  listItem: {
    flexDirection: "column",
    gap: 4,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontFamily: "Source Serif 4 Bold",
    fontSize: 11,
  },
  sectionDetail: {
    fontWeight: "bold",
    fontSize: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    color: "#0077cc",
    textDecoration: "underline",
  },
});

export default styles;
