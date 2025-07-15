import {
  Page,
  Text,
  View,
  Document,
  Link,
  Font,
  Image,
} from "@react-pdf/renderer";

import styles from "../../styles/pdfStylesheet";
import Location from "./Icons/Location";
import PhoneIcon from "./Icons/PhoneIcon";
import EmailIcon from "./Icons/EmailIcon";
import LinkIcon from "./Icons/LinkIcon";
import chunkArray from "../../helper/chunkArray";
import GithubIcon from "./Icons/GithubIcon";
import LinkedInIcon from "./Icons/LinkedinIcon";

Font.register({
  family: "Source Serif 4",
  src: "/font/SourceSerif4.ttf",
});

Font.register({
  family: "Source Serif 4 Bold",
  src: "/font/SourceSerif4Bold.ttf",
});
// Main PDF Document
function ResumePDF({ resumeData, profilePic }) {
  const rows = chunkArray(resumeData.skills, 4);
  return (
    <Document>
      <Page size={[596.16, 1020.24]} style={styles.page}>
        {/* Header */}
        <View style={styles.headerSection}>
          {typeof profilePic === "string" &&
            profilePic.startsWith("data:image") &&
            profilePic.length > 20 && (
              <Image src={profilePic} style={styles.profilePic} />
            )}
          <View style={styles.section}>
            <Text style={styles.header}>{resumeData.basic.fullName}</Text>
            <Text>{resumeData.basic.headline}</Text>
            <View style={styles.headerAdditional}>
              <View style={styles.textWithIcon}>
                <Location />
                <Text>{resumeData.basic.location} | </Text>
              </View>
              <View style={styles.textWithIcon}>
                <PhoneIcon />
                <Text>{resumeData.basic.phoneNumber} | </Text>
              </View>
              <View style={styles.textWithIcon}>
                <EmailIcon />
                <Text>{resumeData.basic.email}</Text>
              </View>
              <View style={styles.textWithIcon}>
                {resumeData.basic.website && (
                  <>
                    <Text>|</Text>
                    <LinkIcon />
                    <Link src={resumeData.basic.website} style={styles.link}>
                      Website
                    </Link>
                  </>
                )}
              </View>
            </View>
          </View>
        </View>
        {resumeData.profiles?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Profiles</Text>
            <View style={styles.profileList}>
              {resumeData.profiles.map((profile, idx) => (
                <View key={idx} style={styles.listItem}>
                  <View style={styles.profilesItem}>
                    {profile.network === "linkedin" ? (
                      <LinkedInIcon />
                    ) : (
                      <GithubIcon />
                    )}
                    <Link src={profile.website} style={styles.link}>
                      {profile.username}
                    </Link>
                  </View>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Summary */}
        {resumeData.summary && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Summary</Text>
            <Text>{resumeData.summary}</Text>
          </View>
        )}

        {/* Experience */}
        {resumeData.experience?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Experience</Text>
            <View style={styles.expList}>
              {resumeData.experience.map((exp, idx) => (
                <View key={idx} style={styles.listItem}>
                  <View style={styles.sectionHeader}>
                    <Text>{exp.company}</Text>
                    <Text>{exp.date}</Text>
                  </View>
                  <View style={styles.sectionDetail}>
                    <Text>{exp.position}</Text>
                    <Text>{exp.location}</Text>
                  </View>
                  <View style={styles.textWithIcon}>
                    {exp.website && (
                      <>
                        <LinkIcon />
                        <Link src={exp.website} style={styles.link}>
                          {exp.website}
                        </Link>
                      </>
                    )}
                  </View>
                  <Text>{exp.summary}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Education */}
        {resumeData.education?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Education</Text>
            {resumeData.education.map((edu, idx) => (
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
        {resumeData.projects?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Projects</Text>
            {resumeData.projects.map((proj, idx) => (
              <View key={idx} style={styles.listItem}>
                <View style={styles.sectionHeader}>
                  <Text>{proj.name}</Text>
                  <Text>{proj.date}</Text>
                </View>
                <Text>{proj.description}</Text>
                <View style={styles.textWithIcon}>
                  {proj.website && (
                    <>
                      <LinkIcon />
                      <Link src={proj.website} style={styles.link}>
                        {proj.website}
                      </Link>
                    </>
                  )}
                </View>
                <Text>{proj.summary}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Skills */}
        {resumeData.skills?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Skills</Text>
            {rows?.map((row, idx) => (
              <View key={idx} style={styles.skillrow}>
                {row?.map((item, idx) => (
                  <View key={idx} style={styles.skillItem}>
                    <Text>{item}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        )}

        {/* Certifications */}
        {resumeData.certifications?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Certifications</Text>
            {resumeData.certifications.map((cert, idx) => (
              <View key={idx} style={styles.listItem}>
                <View style={styles.sectionHeader}>
                  <Text>{cert.name}</Text>
                  <Text>{cert.date}</Text>
                </View>
                <View style={styles.sectionDetail}>
                  <Text>{cert.issuer}</Text>
                </View>
                <View style={styles.textWithIcon}>
                  {cert.website && (
                    <>
                      <LinkIcon />
                      <Link src={cert.website} style={styles.link}>
                        {cert.website}
                      </Link>
                    </>
                  )}
                </View>
                <Text>{cert.summary}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Languages */}
        {resumeData.languages?.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.subHeader}>Languages</Text>
            <Text>{resumeData.languages.join(", ")}</Text>
          </View>
        )}
      </Page>
    </Document>
  );
}
export default ResumePDF;
