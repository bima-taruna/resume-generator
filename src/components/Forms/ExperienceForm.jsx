import TextArea from "../TextArea";
import TextInput from "../TextInput";
import "../../styles/experienceForm.css";
import Button from "../Button";
function ExperienceForm() {
  return (
    <form className="experience-form">
      <div>
        <TextInput label={"Company"} name={"exp-company"} />
        <TextInput label={"Position"} name={"exp-position"} />
      </div>
      <div>
        <TextInput
          label={"Date or Date Range"}
          name={"exp-date"}
          placeholder={"March 2023 - Present"}
        />
        <TextInput label={"Location"} name={"exp-location"} />
      </div>
      <TextInput label={"Website"} />
      <TextArea label={"Summary"} name={"exp-summary"} />
      <Button className={"btn-white"} text={"create"} />
    </form>
  );
}

export default ExperienceForm;
