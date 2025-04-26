import TextArea from "../TextArea";
import TextInput from "../TextInput";
import "../../styles/experienceForm.css";
import Button from "../Button";
function ExperienceForm({ handleSubmit, data = {} }) {
  return (
    <form id="experience-form" onSubmit={handleSubmit}>
      <div>
        <TextInput label={"Company"} name={"company"} value={data.company} />
        <TextInput label={"Position"} name={"position"} value={data.position} />
      </div>
      <div>
        <TextInput
          label={"Date or Date Range"}
          name={"date"}
          placeholder={"March 2023 - Present"}
          value={data.date}
        />
        <TextInput label={"Location"} name={"location"} value={data.location} />
      </div>
      <TextInput label={"Website"} name={"website"} value={data.website} />
      <TextArea label={"Summary"} name={"summary"} value={data.summary} />
      <Button
        className={"btn-white"}
        text={data ? "Update" : "Create"}
        type="submit"
      />
    </form>
  );
}

export default ExperienceForm;
