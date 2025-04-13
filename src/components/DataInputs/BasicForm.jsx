import TextInput from "../TextInput";

function BasicForm() {
  return (
    <form className="basic-form">
      <TextInput label={"Full Name"} name={"full-name"} />
      <TextInput label={"Headline"} name={"headline"} />
      <TextInput label={"Email"} name={"email"} />
      <TextInput label={"Website"} name={"website"} />
      <TextInput label={"Phone"} name={"phone"} />
      <TextInput label={"Location"} name={"location"} />
    </form>
  );
}

export default BasicForm;
