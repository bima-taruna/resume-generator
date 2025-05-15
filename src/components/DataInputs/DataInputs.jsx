import {
  IoBriefcaseOutline,
  IoExtensionPuzzleOutline,
  IoLanguage,
} from "react-icons/io5";
import "../../styles/dataInputs.css";
import BasicForm from "./BasicForm";
import Profiles from "./Profiles";
import SectionDataInputs from "./SectionDataInputs";
import Summary from "./Summary";
import modalTypes from "../../helper/modalTypes";
import ItemCard from "../ItemCard";
import { PiCertificateLight, PiGraduationCap } from "react-icons/pi";
import { GiSkills } from "react-icons/gi";
function DataInputs({
  basicData,
  summaryData,
  profilesData,
  experienceData,
  educationData,
  projectsData,
  skillData,
  certificationData,
  languageData,
  onChange,
  openModal,
  openUpdateModal,
  setIndexItem,
}) {
  return (
    <section className="data-inputs">
      <BasicForm basicData={basicData} onChange={onChange} />
      <Summary summaryData={summaryData} onChange={onChange} />
      <Profiles
        profilesData={profilesData}
        openModal={openModal}
        openUpdateModal={openUpdateModal}
        setIndexItem={setIndexItem}
      />
      <SectionDataInputs
        icon={<IoBriefcaseOutline />}
        sectionId={"experience"}
        sectionTitle={"Experience"}
        openModal={openModal}
        modalTypes={modalTypes.EXPERIENCE}
      >
        {experienceData?.map((item, index) => (
          <ItemCard
            key={index}
            title={item.company}
            subtitle={item.position}
            handleClick={() => {
              openUpdateModal(modalTypes.EXPERIENCE);
              setIndexItem(index);
            }}
          />
        ))}
      </SectionDataInputs>
      <SectionDataInputs
        icon={<PiGraduationCap />}
        sectionId={"education"}
        sectionTitle={"Education"}
        openModal={openModal}
        modalTypes={modalTypes.EDUCATION}
      >
        {educationData?.map((item, index) => (
          <ItemCard
            key={index}
            title={item.institution}
            subtitle={item.study}
            handleClick={() => {
              openUpdateModal(modalTypes.EDUCATION);
              setIndexItem(index);
            }}
          />
        ))}
      </SectionDataInputs>
      <SectionDataInputs
        icon={<IoExtensionPuzzleOutline />}
        sectionId={"projects"}
        sectionTitle={"Projects"}
        openModal={openModal}
        modalTypes={modalTypes.PROJECT}
      >
        {projectsData?.map((item, index) => (
          <ItemCard
            key={index}
            title={item.name}
            subtitle={item.description}
            handleClick={() => {
              openUpdateModal(modalTypes.PROJECT);
              setIndexItem(index);
            }}
          />
        ))}
      </SectionDataInputs>
      <SectionDataInputs
        icon={<GiSkills />}
        sectionId={"skills"}
        sectionTitle={"Skills"}
        openModal={openModal}
        modalTypes={modalTypes.SKILL}
      >
        {skillData?.map((item, index) => (
          <ItemCard
            key={index}
            title={item}
            handleClick={() => {
              openUpdateModal(modalTypes.SKILL);
              setIndexItem(index);
            }}
          />
        ))}
      </SectionDataInputs>
      <SectionDataInputs
        icon={<PiCertificateLight />}
        sectionId={"certifications"}
        sectionTitle={"Certifications"}
        openModal={openModal}
        modalTypes={modalTypes.CERTIFICATION}
      >
        {certificationData?.map((item, index) => (
          <ItemCard
            key={index}
            title={item.name}
            subtitle={item.issuer}
            handleClick={() => {
              openUpdateModal(modalTypes.CERTIFICATION);
              setIndexItem(index);
            }}
          />
        ))}
      </SectionDataInputs>
      <SectionDataInputs
        icon={<IoLanguage />}
        sectionId={"languages"}
        sectionTitle={"Languages"}
        openModal={openModal}
        modalTypes={modalTypes.LANGUAGE}
      >
        {languageData?.map((item, index) => (
          <ItemCard
            key={index}
            title={item}
            handleClick={() => {
              openUpdateModal(modalTypes.LANGUAGE);
              setIndexItem(index);
            }}
          />
        ))}
      </SectionDataInputs>
    </section>
  );
}

export default DataInputs;
