import Button from "../Button";
import TextArea from "../TextArea";
import TextInput from "../TextInput";

function ProjectForm({ handleSubmit, data = {}, handleDelete, itemIndex }) {
  return (
    <form id="project-form" onSubmit={handleSubmit}>
      <div>
        <TextInput
          label={"Name"}
          name={"name"}
          defaultValue={data.name || ""}
          required={true}
        />
        <TextInput
          label={"Description"}
          name={"description"}
          defaultValue={data.description || ""}
        />
      </div>
      <div>
        <TextInput
          label={"Date or Date Range"}
          name={"date"}
          defaultValue={data.date || ""}
          required={true}
          placeholder={"March 2023 - Present"}
        />
        <TextInput
          label={"Website"}
          name={"website"}
          defaultValue={data.website || ""}
        />
      </div>
      <TextArea
        label={"Summary"}
        name={"summary"}
        defaultValue={data.summary || ""}
      />
      <div className="project-form-buttons">
        {Object.keys(data).length > 0 && (
          <Button
            className={"btn-red"}
            text={"Delete"}
            onClick={() => handleDelete("project", itemIndex)}
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

export default ProjectForm;
