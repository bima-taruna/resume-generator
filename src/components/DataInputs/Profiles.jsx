import { IoShareSocialOutline } from "react-icons/io5";
import ItemCard from "../ItemCard";
import Button from "../Button";
import { IoMdAdd } from "react-icons/io";
import modalTypes from "../../helper/modalTypes";
import { useResumeStore } from "../../stores/useResumeStore";

function Profiles({ openModal, openUpdateModal, setIndexItem }) {
  const { resumeData } = useResumeStore();
  const profilesData = resumeData.profiles;
  return (
    <>
      <section id="profiles">
        <header>
          <IoShareSocialOutline />
          <h2>Profiles</h2>
        </header>
        <ul>
          {profilesData?.map((item, index) => (
            <ItemCard
              key={index}
              title={item.network}
              subtitle={item.username}
              handleClick={() => {
                openUpdateModal(modalTypes.PROFILE);
                setIndexItem(index);
              }}
            />
          ))}
        </ul>
        <Button
          className={"btn-black"}
          icon={<IoMdAdd />}
          text={"Add a new item"}
          onClick={() => openModal(modalTypes.PROFILE)}
        />
      </section>
      <hr />
    </>
  );
}

export default Profiles;
