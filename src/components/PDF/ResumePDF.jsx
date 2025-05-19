import {
  Page,
  Text,
  View,
  Document,
  Link,
  Svg,
  Path,
} from "@react-pdf/renderer";

import styles from "../../styles/pdfStylesheet";
import Location from "./Icons/Location";
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
            <Text>{basic.phoneNumber} | </Text>
          </View>
          <View style={styles.textWithIcon}>
            <Text>{basic.email}</Text>
          </View>
          <View style={styles.textWithIcon}>
            {basic.website && (
              <Link src={basic.website} style={styles.link}>
                | {basic.website}
              </Link>
            )}
          </View>
        </View>
      </View>
      <hr />
      {/* Profiles */}
      {profiles?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Profiles</Text>
          <View style={styles.list}>
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
          {experience.map((exp, idx) => (
            <View key={idx} style={styles.listItem}>
              <Text>
                <b>{exp.company}</b> | {exp.position} | {exp.date}
              </Text>
              <Text>{exp.location}</Text>
              {exp.website && (
                <Link src={exp.website} style={styles.link}>
                  {exp.website}
                </Link>
              )}
              <Text>{exp.summary}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Education */}
      {education?.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.subHeader}>Education</Text>
          {education.map((edu, idx) => (
            <View key={idx} style={styles.listItem}>
              <Text>
                <b>{edu.institution}</b> | {edu.study} ({edu.type}) | {edu.date}
              </Text>
              <Text>Score: {edu.score}</Text>
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
              <Text>
                <b>{proj.name}</b> | {proj.date}
              </Text>
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
