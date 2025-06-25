import Button from "../Button";
import TextArea from "../TextArea";
import TextInput from "../TextInput";
import "../../styles/form.css";
function ProjectForm({ handleSubmit, data = {}, handleDelete, itemIndex }) {
  return (
    <form id="projects-form" onSubmit={handleSubmit}>
      <div>
        <TextInput
          label={"Name"}
          name={"name"}
          id={"project-name"}
          defaultValue={data.name || ""}
          required={true}
        />
        <TextInput
          label={"Description"}
          name={"description"}
          id={"project-description"}
          defaultValue={data.description || ""}
        />
      </div>
      <div>
        <TextInput
          label={"Date or Date Range"}
          name={"date"}
          id={"project-date"}
          defaultValue={data.date || ""}
          required={true}
          placeholder={"March 2023 - Present"}
        />
        <TextInput
          label={"Website"}
          id={"project-website"}
          name={"website"}
          defaultValue={data.website || ""}
        />
      </div>
      <TextArea
        label={"Summary"}
        id={"project-summary"}
        name={"summary"}
        defaultValue={data.summary || ""}
      />
      <div className="project-form-buttons">
        {Object.keys(data).length > 0 && (
          <Button
            className={"btn-red"}
            text={"Delete"}
            onClick={() => handleDelete("projects", itemIndex)}
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
