import "../../styles/form.css";
import Button from "../Button";
import TextInput from "../TextInput";

function LanguageForm({ handleSubmit, data, handleDelete, itemIndex }) {
  return (
    <form id="languages-form" onSubmit={handleSubmit}>
      <TextInput
        label={"Name"}
        name={"name"}
        id={"language-name"}
        defaultValue={data || ""}
        required={true}
      />
      <div className="languages-form-buttons">
        {data && (
          <Button
            className={"btn-red"}
            text={"Delete"}
            onClick={() => handleDelete("languages", itemIndex)}
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

export default LanguageForm;
