import TextArea from "../TextArea";
import TextInput from "../TextInput";
import "../../styles/experienceForm.css";
import Button from "../Button";
function ExperienceForm({ handleSubmit, data = {}, handleDelete, itemIndex }) {
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
      <div className="exp-form-buttons">
        {Object.keys(data).length > 0 && (
          <Button
            className={"btn-red"}
            text={"Delete"}
            onClick={() => handleDelete(itemIndex)}
          />
        )}
        <Button
          className={"btn-white"}
          text={Object.keys(data).length > 0 ? "Update" : "Create"}
          type="submit"
        />
      </div>
    </form>
  );
}

export default ExperienceForm;
