import { IoExtensionPuzzleOutline } from "react-icons/io5";
import ItemCard from "../ItemCard";
import Button from "../Button";
import { IoMdAdd } from "react-icons/io";
import modalTypes from "../../helper/modalTypes";

function Projects({ projectsData, openModal }) {
  return (
    <section id="projects">
      <header>
        <IoExtensionPuzzleOutline />
        <h2>Projects</h2>
      </header>
      <ul>
        {projectsData?.map((item, index) => [
          <ItemCard
            key={index}
            title={item.name}
            subtitle={item.description}
          />,
        ])}
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

export default Projects;
