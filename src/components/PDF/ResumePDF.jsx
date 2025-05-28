import { Page, Text, View, Document, Link, Font } from "@react-pdf/renderer";

import styles from "../../styles/pdfStylesheet";
import Location from "./Icons/Location";
import PhoneIcon from "./Icons/PhoneIcon";
import EmailIcon from "./Icons/EmailIcon";
import LinkIcon from "./Icons/LinkIcon";

Font.register({
  family: "Source Serif Pro",
  src: "http://fonts.gstatic.com/s/sourceserifpro/v4/CeUM4np2c42DV49nanp55aqQQDHDiKO-LH8MFmRo0b0.ttf",
});
// Main PDF Document
const ResumePDF = ({
  basic,
  summary,
  experience,
  profiles,
  education,
  projects,
  skills,
  certifications,
  languages,
}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.section}>
        <Text style={styles.header}>{basic.fullName}</Text>
        <Text>{basic.headline}</Text>
        <View style={styles.headerAdditional}>
          <View style={styles.textWithIcon}>
            <Location />
            <Text>{basic.location} | </Text>
          </View>
          <View style={styles.textWithIcon}>
            <PhoneIcon />
            <Text>{basic.phoneNumber} | </Text>
          </View>
          <View style={styles.textWithIcon}>
            <EmailIcon />
            <Text>{basic.email}</Text>
          </View>
          <View style={styles.textWithIcon}>
            {basic.website && (
              <>
                <Text> |</Text>
                <LinkIcon />
                <Link src={basic.website} style={styles.link}>
                  Website
                </Link>
              </>
            )}
          </View>
        </View>
      </View>
      {profiles?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Profiles</Text>
          <View style={styles.profileList}>
            {profiles.map((profile, idx) => (
              <Text key={idx} style={styles.listItem}>
                {profile.network}:{" "}
                <Link src={profile.website} style={styles.link}>
                  {profile.username}
                </Link>
              </Text>
            ))}
          </View>
        </View>
      )}

      {/* Summary */}
      {summary && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Summary</Text>
          <Text>{summary}</Text>
        </View>
      )}

      {/* Experience */}
      {experience?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Experience</Text>
          <View style={styles.expList}>
            {experience.map((exp, idx) => (
              <View key={idx} style={styles.listItem}>
                <View style={styles.sectionHeader}>
                  <Text>{exp.company}</Text>
                  <Text>{exp.date}</Text>
                </View>
                <View style={styles.sectionDetail}>
                  <Text>{exp.position}</Text>
                  <Text>{exp.location}</Text>
                </View>
                {exp.website && (
                  <Link src={exp.website} style={styles.link}>
                    {exp.website}
                  </Link>
                )}
                <Text>{exp.summary}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Education</Text>
          {education.map((edu, idx) => (
            <View key={idx} style={styles.listItem}>
              <View style={styles.sectionHeader}>
                <Text>{edu.institution}</Text>
                <Text>{edu.date}</Text>
              </View>
              <View style={styles.sectionDetail}>
                <Text>{edu.study}</Text>
                <Text>{edu.type}</Text>
              </View>
              <Text>{edu.score}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Projects */}
      {projects?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Projects</Text>
          {projects.map((proj, idx) => (
            <View key={idx} style={styles.listItem}>
              <View style={styles.sectionHeader}>
                <Text>{proj.name}</Text>
                <Text>{proj.date}</Text>
              </View>
              <Text>{proj.description}</Text>
              {proj.website && (
                <Link src={proj.website} style={styles.link}>
                  {proj.website}
                </Link>
              )}
              <Text>{proj.summary}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Skills */}
      {skills?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Skills</Text>
          <Text>{skills.join(", ")}</Text>
        </View>
      )}

      {/* Certifications */}
      {certifications?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Certifications</Text>
          {certifications.map((cert, idx) => (
            <View key={idx} style={styles.listItem}>
              <Text>
                <b>{cert.name}</b> | {cert.date}
              </Text>
              <Text>{cert.issuer}</Text>
              {cert.website && (
                <Link src={cert.website} style={styles.link}>
                  {cert.website}
                </Link>
              )}
              <Text>{cert.summary}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Languages */}
      {languages?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Languages</Text>
          <Text>{languages.join(", ")}</Text>
        </View>
      )}
    </Page>
  </Document>
);

export default ResumePDF;
