import TextInput from "../TextInput";
import "../../styles/basicForm.css";
import { FaRegUser } from "react-icons/fa";

function BasicForm({ basicData, onChange }) {
  return (
    <section id="basics">
      <header>
        <FaRegUser />
        <h2>Basics</h2>
      </header>
      <TextInput
        label={"Full Name"}
        name={"fullName"}
        value={basicData.fullName}
        onChange={onChange}
      />
      <TextInput
        label={"Headline"}
        name={"headline"}
        value={basicData.headline}
        onChange={onChange}
      />
      <div>
        <TextInput
          label={"Email"}
          name={"email"}
          value={basicData.email}
          onChange={onChange}
        />
        <TextInput
          label={"Phone"}
          name={"phone"}
          value={basicData.phoneNumber}
          onChange={onChange}
        />
      </div>
      <div>
        <TextInput
          label={"Website"}
          name={"website"}
          value={basicData.website}
          onChange={onChange}
        />
        <TextInput
          label={"Location"}
          name={"location"}
          value={basicData.location}
          onChange={onChange}
        />
      </div>
    </section>
  );
}

export default BasicForm;
