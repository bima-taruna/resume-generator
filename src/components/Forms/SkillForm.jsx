import Button from "../Button";
import TextInput from "../TextInput";
import "../../styles/form.css";
function SkillForm({ handleSubmit, data, handleDelete, itemIndex }) {
  return (
    <form id="skills-form" onSubmit={handleSubmit}>
      <TextInput
        label={"Name"}
        name={"name"}
        id={"skill-name"}
        defaultValue={data || ""}
        required={true}
      />
      <div className="skills-form-buttons">
        {data && (
          <Button
            className={"btn-red"}
            text={"Delete"}
            onClick={() => handleDelete("skills", itemIndex)}
          />
        )}
        <Button
          className={"btn-white"}
          text={data ? "Update" : "Create"}
          type="submit"
        />
      </div>
    </form>
  );
}

export default SkillForm;
