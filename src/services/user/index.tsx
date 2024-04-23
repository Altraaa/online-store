import instance from "@/lib/axios/instance";
import { deleteUser } from "firebase/auth";

export const userServices = {
  getAllUsers: () => instance.get("/api/user"),
  updateUsers: (id: string, data: any,) =>
    instance.put("/api/user", { id, data, }),
    deleteUser: (id: string) => instance.delete(`/api/user/${id}`),
};

export default userServices;
