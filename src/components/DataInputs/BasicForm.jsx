import TextInput from "../TextInput";

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
      <TextInput
        label={"Email"}
        name={"email"}
        value={basicData.email}
        onChange={onChange}
      />
      <TextInput
        label={"Website"}
        name={"website"}
        value={basicData.website}
        onChange={onChange}
      />
      <TextInput
        label={"Phone"}
        name={"phone"}
        value={basicData.phoneNumber}
        onChange={onChange}
      />
      <TextInput
        label={"Location"}
        name={"location"}
        value={basicData.location}
        onChange={onChange}
      />
    </form>
  );
}

export default BasicForm;
