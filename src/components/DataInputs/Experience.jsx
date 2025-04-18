import { IoBriefcaseOutline } from "react-icons/io5";
import ItemCard from "../ItemCard";
import Button from "../Button";
import { IoMdAdd } from "react-icons/io";
import "../../styles/experience.css";
import modalTypes from "../../helper/modalTypes";
function Experience({ experienceData, openModal }) {
  return (
    <section id="experience">
      <header>
        <IoBriefcaseOutline />
        <h2>Experience</h2>
      </header>
      <ul>
        {experienceData?.map((item) => (
          <ItemCard title={item.company} subtitle={item.position} />
        ))}
      </ul>
      <Button
        className={"btn-black"}
        icon={<IoMdAdd />}
        text={"Add a new item"}
        onClick={() => openModal(modalTypes.EXPERIENCE)}
      />
    </section>
  );
}

export default Experience;
