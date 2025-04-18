import TextArea from "../TextArea";
import TextInput from "../TextInput";

function ExperienceForm() {
  return (
    <form className="experience-form">
      <TextInput label={"Company"} name={"exp-company"} />
      <TextInput label={"Date or Date Range"} name={"exp-date"} />
      <TextInput label={"Position"} name={"exp-position"} />
      <TextInput label={"Location"} name={"exp-location"} />
      <TextInput label={"Website"} />
      <TextArea label={"Summary"} name={"exp-summary"} />
    </form>
  );
}

export default ExperienceForm;
