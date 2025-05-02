import Button from "../Button";
import TextInput from "../TextInput";

function EducationForm({ handleSubmit, data = {}, handleDelete, itemIndex }) {
  return (
    <form id="education-form" onSubmit={handleSubmit}>
      <div>
        <TextInput
          label={"Institution"}
          name={"institution"}
          defaultValue={data.institution || ""}
        />
        <TextInput
          label={"Type of Study"}
          name={"type"}
          defaultValue={data.type || ""}
          placeholder={"Bachelor Degree"}
        />
      </div>
      <div>
        <TextInput
          label={"Area of Study"}
          name={"study"}
          defaultValue={data.study || ""}
          placeholder={"Computer Science"}
        />
        <TextInput
          label={"Score"}
          name={"score"}
          defaultValue={data.score || ""}
          placeholder={"3.80 GPA"}
        />
      </div>
      <TextInput
        label={"Date or Date Range"}
        name={"date"}
        defaultValue={data.date || ""}
      />
      <div className="edu-form-buttons">
        {Object.keys(data).length > 0 && (
          <Button
            className={"btn-red"}
            text={"Delete"}
            onClick={() => handleDelete("education", itemIndex)}
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

export default EducationForm;
