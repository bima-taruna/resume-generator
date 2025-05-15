import { PiCertificateLight } from "react-icons/pi";
import ItemCard from "../ItemCard";
import modalTypes from "../../helper/modalTypes";
import Button from "../Button";
import { IoMdAdd } from "react-icons/io";

function Certifications({
  certificationData,
  openModal,
  openUpdateModal,
  setIndexItem,
}) {
  return (
    <section id="certifications">
      <header>
        <PiCertificateLight />
        <h2>Certifications</h2>
      </header>
      <ul>
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
      </ul>
      <Button
        className={"btn-black"}
        icon={<IoMdAdd />}
        text={"Add a new item"}
        onClick={() => openModal(modalTypes.CERTIFICATION)}
      />
    </section>
  );
}

export default Certifications;
