import Button from "../Button";
import TextInput from "../TextInput";
import "../../styles/form.css";
function EducationForm({ handleSubmit, data = {}, handleDelete, itemIndex }) {
  return (
    <form id="education-form" onSubmit={handleSubmit}>
      <div>
        <TextInput
          label={"Institution"}
          name={"institution"}
          id={"education-institution"}
          defaultValue={data.institution || ""}
          required={true}
        />
        <TextInput
          label={"Type of Study"}
          name={"type"}
          id={"education-type"}
          defaultValue={data.type || ""}
          placeholder={"Bachelor Degree"}
          required={true}
        />
      </div>
      <div>
        <TextInput
          label={"Area of Study"}
          name={"study"}
          id={"education-study"}
          defaultValue={data.study || ""}
          placeholder={"Computer Science"}
          required={true}
        />
        <TextInput
          label={"Score"}
          name={"score"}
          id={"education-score"}
          defaultValue={data.score || ""}
          placeholder={"3.80 GPA"}
          required={true}
        />
      </div>
      <TextInput
        label={"Date or Date Range"}
        name={"date"}
        id={"education-date"}
        defaultValue={data.date || ""}
        required={true}
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
