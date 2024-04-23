import Button from "@/component/shared-component/button/button";
import userServices from "@/services/user";
import Modal from "@/component/shared-component/modal";

const ModalDelete = (props: any) => {
  const { deletedUser, setDeletedUser, setUsersData } = props;
  const handleDelete = async () => {
    userServices.deleteUser(deletedUser.id);
    setDeletedUser({});
    const { data } = await userServices.getAllUsers();
    setUsersData(data.data);
  };
  return (
    <Modal onClose={() => setDeletedUser({})}>
      <div className="flex flex-col items-center">
        <p>Are you sure you want to</p>
        <h1 className="text-3xl font-bold">Delete this Data?</h1>
      </div>
      <div className="flex gap-2">
        <Button type="button" onClick={() => handleDelete()}>
          Delete
        </Button>
        <Button type="button" variant="outlined">
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDelete;
