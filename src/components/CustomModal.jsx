import EducationForm from "./Forms/EducationForm";
import ExperienceForm from "./Forms/ExperienceForm";
import ProfileForm from "./Forms/ProfileForm";
import ProjectForm from "./Forms/ProjectForm";
import Modal from "./Modal";

function CustomModal({
  type,
  isOpen,
  onClose,
  handleSubmit,
  data,
  itemIndex,
  handleDelete,
}) {
  const renderForm = () => {
    switch (type) {
      case "experience":
        return (
          <ExperienceForm
            handleSubmit={handleSubmit}
            data={data}
            itemIndex={itemIndex}
            handleDelete={handleDelete}
          />
        );
      case "profiles":
        return (
          <ProfileForm
            handleSubmit={handleSubmit}
            data={data}
            itemIndex={itemIndex}
            handleDelete={handleDelete}
          />
        );
      case "education":
        return (
          <EducationForm
            handleSubmit={handleSubmit}
            data={data}
            itemIndex={itemIndex}
            handleDelete={handleDelete}
          />
        );
      case "projects":
        return (
          <ProjectForm
            handleSubmit={handleSubmit}
            data={data}
            itemIndex={itemIndex}
            handleDelete={handleDelete}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      headerText={
        type === "CREATE" ? "+ Create a new item" : "Update an existing item"
      }
      isOpen={isOpen}
      onClose={onClose}
    >
      {renderForm()}
    </Modal>
  );
}

export default CustomModal;
