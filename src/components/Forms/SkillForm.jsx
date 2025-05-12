import Button from "../Button";
import TextInput from "../TextInput";

function SkillForm({ handleSubmit, data, handleDelete, itemIndex }) {
  return (
    <form id="skills-form" onSubmit={handleSubmit}>
      <TextInput
        label={"Name"}
        name={"name"}
        defaultValue={data || ""}
        required={true}
      />
      <div className="skills-form-buttons">
        {data && (
          <Button
            className={"btn-red"}
            text={"Delete"}
            onClick={() => handleDelete("profiles", itemIndex)}
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
