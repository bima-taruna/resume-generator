import TextArea from "../TextArea";
import TextInput from "../TextInput";
import "../../styles/form.css";
import Button from "../Button";
function ExperienceForm({ handleSubmit, data = {}, handleDelete, itemIndex }) {
  return (
    <form id="experience-form" onSubmit={handleSubmit}>
      <div>
        <TextInput
          label={"Company"}
          name={"company"}
          id={"exp-company"}
          defaultValue={data.company || ""}
          required={true}
        />
        <TextInput
          label={"Position"}
          name={"position"}
          id={"exp-position"}
          defaultValue={data.position || ""}
          required={true}
        />
      </div>
      <div>
        <TextInput
          label={"Date or Date Range"}
          name={"date"}
          id={"exp-date"}
          placeholder={"March 2023 - Present"}
          defaultValue={data.date || ""}
          required={true}
        />
        <TextInput
          label={"Location"}
          name={"location"}
          id={"exp-location"}
          defaultValue={data.location || ""}
          required={true}
        />
      </div>
      <TextInput
        label={"Website"}
        name={"website"}
        id={"exp-website"}
        defaultValue={data.website || ""}
      />
      <TextArea
        label={"Summary"}
        name={"summary"}
        id={"exp-summary"}
        defaultValue={data.summary || ""}
      />
      <div className="exp-form-buttons">
        {Object.keys(data).length > 0 && (
          <Button
            className={"btn-red"}
            text={"Delete"}
            onClick={() => handleDelete("experience", itemIndex)}
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
