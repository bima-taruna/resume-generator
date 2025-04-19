import TextArea from "../TextArea";
import TextInput from "../TextInput";
import "../../styles/experienceForm.css";
import Button from "../Button";
function ExperienceForm({ handleSubmit }) {
  return (
    <form id="experience-form" onSubmit={handleSubmit}>
      <div>
        <TextInput label={"Company"} name={"company"} />
        <TextInput label={"Position"} name={"position"} />
      </div>
      <div>
        <TextInput
          label={"Date or Date Range"}
          name={"date"}
          placeholder={"March 2023 - Present"}
        />
        <TextInput label={"Location"} name={"location"} />
      </div>
      <TextInput label={"Website"} name={"website"} />
      <TextArea label={"Summary"} name={"summary"} />
      <Button className={"btn-white"} text={"Create"} type="submit" />
    </form>
  );
}

export default ExperienceForm;
