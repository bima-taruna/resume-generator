import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

// Example: You should import or define your own subcomponents for each section if you want to keep logic separated

const styles = StyleSheet.create({
  page: {
    padding: 32,
    fontSize: 12,
    fontFamily: "Helvetica",
    color: "#222",
  },
  section: {
    marginBottom: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  list: {
    margin: 0,
    padding: 0,
  },
  listItem: {
    marginBottom: 4,
  },
  link: {
    color: "#0077cc",
    textDecoration: "underline",
  },
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
        <Text>
          {basic.location} | {basic.phoneNumber} | {basic.email}
        </Text>
        {basic.website && (
          <Link src={basic.website} style={styles.link}>
            {basic.website}
          </Link>
        )}
      </View>

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
