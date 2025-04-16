import { IoBriefcaseOutline } from "react-icons/io5";
import ItemCard from "../ItemCard";
import Button from "../Button";
import { IoMdAdd } from "react-icons/io";
import "../../styles/experience.css";
function Experience({ experienceData }) {
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
      />
    </section>
  );
}

export default Experience;
