import { GiSkills } from "react-icons/gi";
import ItemCard from "../ItemCard";
import modalTypes from "../../helper/modalTypes";
import Button from "../Button";
import { IoMdAdd } from "react-icons/io";
import "../../styles/skills.css";
function Skills({ skillData, openModal, openUpdateModal, setIndexItem }) {
  return (
    <section id="skills">
      <header>
        <GiSkills />
        <h2>Skills</h2>
      </header>
      <ul>
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
      </ul>
      <Button
        className={"btn-black"}
        icon={<IoMdAdd />}
        text={"Add a new item"}
        onClick={() => openModal(modalTypes.PROJECT)}
      />
    </section>
  );
}

export default Skills;
