import TextInput from "../TextInput";
import "../../styles/basicForm.css";
import { FaRegUser } from "react-icons/fa";
import PicUpload from "./PicUpload";
import { useBasicData, useProfilePic } from "../../stores/useResumeStore";

function BasicForm({ deletePic, handlePicUpload, handleChange }) {
  const basicData = useBasicData();
  const profilePic = useProfilePic();
  return (
    <>
      <section id="basics">
        <header>
          <FaRegUser />
          <h2>Basics</h2>
        </header>
        <PicUpload
          profilePic={profilePic}
          handlePicUpload={handlePicUpload}
          deletePicture={deletePic}
        />
        <TextInput
          label={"Full Name"}
          name={"fullName"}
          id={"basic-name"}
          value={basicData.fullName}
          onChange={handleChange}
        />
        <TextInput
          label={"Headline"}
          name={"headline"}
          id={"basic-headline"}
          value={basicData.headline}
          onChange={handleChange}
        />
        <div>
          <TextInput
            label={"Email"}
            name={"email"}
            id={"basic-email"}
            value={basicData.email}
            onChange={handleChange}
          />
          <TextInput
            label={"Phone"}
            name={"phoneNumber"}
            id={"basic-phone"}
            value={basicData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextInput
            label={"Website"}
            name={"website"}
            id={"basic-website"}
            value={basicData.website}
            onChange={handleChange}
          />
          <TextInput
            label={"Location"}
            name={"location"}
            id={"basic-location"}
            value={basicData.location}
            onChange={handleChange}
          />
        </div>
      </section>
      <hr />
    </>
  );
}

export default BasicForm;
