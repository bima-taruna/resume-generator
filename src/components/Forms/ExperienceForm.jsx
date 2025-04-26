import TextArea from "../TextArea";
import TextInput from "../TextInput";
import "../../styles/experienceForm.css";
import Button from "../Button";
function ExperienceForm({ handleSubmit, data = {} }) {
  return (
    <form id="experience-form" onSubmit={handleSubmit}>
      <div>
        <TextInput
          label={"Company"}
          name={"company"}
          defaultValue={data.company || ""}
        />
        <TextInput
          label={"Position"}
          name={"position"}
          defaultValue={data.position || ""}
        />
      </div>
      <div>
        <TextInput
          label={"Date or Date Range"}
          name={"date"}
          placeholder={"March 2023 - Present"}
          defaultValue={data.date || ""}
        />
        <TextInput
          label={"Location"}
          name={"location"}
          defaultValue={data.location || ""}
        />
      </div>
      <TextInput
        label={"Website"}
        name={"website"}
        defaultValue={data.website || ""}
      />
      <TextArea
        label={"Summary"}
        name={"summary"}
        defaultValue={data.summary || ""}
      />
      <Button
        className={"btn-white"}
        text={data ? "Update" : "Create"}
        type="submit"
      />
    </form>
  );
}

export default ExperienceForm;
