import Button from "../Button";
import Select from "../Select";
import TextInput from "../TextInput";
import "../../styles/profileForm.css";
function ProfileForm({ handleSubmit, data = {}, handleDelete, itemIndex }) {
  return (
    <form id="profile-form" onSubmit={handleSubmit}>
      <div>
        <Select
          label={"Network"}
          name={"network"}
          options={["github", "linkedin"]}
          defaultValue={data.network || ""}
        />
        <TextInput
          label={"Username"}
          name={"username"}
          defaultValue={data.username || ""}
        />
      </div>
      <TextInput
        label={"Website"}
        name={"website"}
        placeholder={"https://linkedin.com/john-doe"}
        defaultValue={data.website || ""}
      />
      <div className="profile-form-buttons">
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

export default ProfileForm;
