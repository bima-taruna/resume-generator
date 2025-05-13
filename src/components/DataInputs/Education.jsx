import { PiGraduationCap } from "react-icons/pi";
import ItemCard from "../ItemCard";
import Button from "../Button";
import { IoMdAdd } from "react-icons/io";
import modalTypes from "../../helper/modalTypes";
function Education({
  educationData,
  openModal,
  openUpdateModal,
  setIndexItem,
}) {
  return (
    <section id="education">
      <header>
        <PiGraduationCap />
        <h2>Education</h2>
      </header>
      <ul>
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
      </ul>
      <Button
        className={"btn-black"}
        icon={<IoMdAdd />}
        text={"Add a new Item"}
        onClick={() => openModal(modalTypes.EDUCATION)}
      />
    </section>
  );
}

export default Education;
