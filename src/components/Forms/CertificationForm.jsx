import Button from "../Button";
import TextArea from "../TextArea";
import TextInput from "../TextInput";

function CertificationForm({
  handleSubmit,
  data = {},
  handleDelete,
  itemIndex,
}) {
  return (
    <form id="certifications-form" onSubmit={handleSubmit}>
      <div>
        <TextInput
          label={"Name"}
          name={"name"}
          defaultValue={data.name || ""}
          required={true}
        />
        <TextInput
          label={"Issuer"}
          name={"issuer"}
          defaultValue={data.issuer || ""}
          required={true}
        />
      </div>
      <div>
        <TextInput
          label={"Date"}
          name={"date"}
          placeholder={"March 2023"}
          defaultValue={data.date || ""}
          required={true}
        />
        <TextInput
          label={"Website"}
          name={"website"}
          defaultValue={data.website || ""}
          required={false}
        />
      </div>
      <TextArea
        label={"Summary"}
        name={"summary"}
        defaultValue={data.summary || ""}
        required={false}
      />
      <div className="cert-form-buttons">
        {Object.keys(data).length > 0 && (
          <Button
            className={"btn-red"}
            text={"Delete"}
            onClick={() => handleDelete("certifications", itemIndex)}
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

export default CertificationForm;
