import TextInput from "../TextInput";
import "../../styles/basicForm.css";
import { FaRegUser } from "react-icons/fa";
import PicUpload from "./PicUpload";

function BasicForm({
  basicData,
  onChange,
  profilePic,
  handlePicUpload,
  deletePic,
}) {
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
          onChange={onChange}
        />
        <TextInput
          label={"Headline"}
          name={"headline"}
          id={"basic-headline"}
          value={basicData.headline}
          onChange={onChange}
        />
        <div>
          <TextInput
            label={"Email"}
            name={"email"}
            id={"basic-email"}
            value={basicData.email}
            onChange={onChange}
          />
          <TextInput
            label={"Phone"}
            name={"phoneNumber"}
            id={"basic-phone"}
            value={basicData.phoneNumber}
            onChange={onChange}
          />
        </div>
        <div>
          <TextInput
            label={"Website"}
            name={"website"}
            id={"basic-website"}
            value={basicData.website}
            onChange={onChange}
          />
          <TextInput
            label={"Location"}
            name={"location"}
            id={"basic-location"}
            value={basicData.location}
            onChange={onChange}
          />
        </div>
      </section>
      <hr />
    </>
  );
}

export default BasicForm;
