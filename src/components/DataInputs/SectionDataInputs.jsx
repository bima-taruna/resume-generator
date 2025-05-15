import { IoMdAdd } from "react-icons/io";
import Button from "../Button";

function SectionDataInputs({
  icon,
  sectionId,
  sectionTitle,
  children,
  openModal,
  modalTypes,
}) {
  return (
    <>
      <section id={sectionId}>
        <header>
          {icon}
          <h2>{sectionTitle}</h2>
        </header>
        <ul>{children}</ul>
        <Button
          className={"btn-black"}
          icon={<IoMdAdd />}
          text={"Add a new item"}
          onClick={() => openModal(modalTypes)}
        />
      </section>
      <hr />
    </>
  );
}

export default SectionDataInputs;
