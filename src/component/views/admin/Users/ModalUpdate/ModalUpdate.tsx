import TextField from "@/component/shared-component/textfield/textField";
import SelectInput from "@/component/shared-component/selectInput/SelectInput";
import Button from "@/component/shared-component/button/button";
import { FormEvent, useState } from "react";
import userServices from "@/services/user";
import Modal from "@/component/shared-component/modal";

const ModalUpdate = (props: any) => {
  const { updatedUser, setUpdatedUser, setUsersData } = props;
  const [isLoading, setIsLoading] = useState(false);
  const handleUpdateUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const form: any = event.target as HTMLFormElement;
    const data = {
      role: form.role.value,
    };

    const result = await userServices.updateUsers(updatedUser.id, data);

    if (result.status === 200) {
      setIsLoading(false);
      setUpdatedUser({});
      const { data } = await userServices.getAllUsers();
      setUsersData(data.data);
    } else {
      setIsLoading(false);
    }
  };
  return (
    <Modal onClose={() => setUpdatedUser({})}>
      <h1 className="inline-flex justify-center text-3xl font-bold">
        Update Users
      </h1>
      <hr />
      <form onSubmit={handleUpdateUser} className="space-y-6">
        <TextField
          name="fullname"
          type="text"
          label="Username"
          defaultValue={updatedUser.fullname}
          disabled
        />
        <TextField
          name="email"
          type="email"
          label="Email"
          defaultValue={updatedUser.email}
          disabled
        />
        <TextField
          name="phone"
          type="number"
          label="Phone"
          defaultValue={updatedUser.phone}
          disabled
        />
        <SelectInput
          name="role"
          label="Role"
          defaultValue={updatedUser.role}
          options={[
            { label: "Admin", value: "admin" },
            { label: "Member", value: "member" },
          ]}
        />
        <Button type="submit">{isLoading ? "Loading..." : "Update"}</Button>
      </form>
    </Modal>
  );
};

export default ModalUpdate;
