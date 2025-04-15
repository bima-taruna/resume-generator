import TextInput from "../TextInput";
import "../../styles/basicForm.css";

function BasicForm({ basicData, onChange }) {
  return (
    <form className="basic-form">
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
    </form>
  );
}

export default BasicForm;
