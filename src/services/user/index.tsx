import instance from "@/lib/axios/instance";
import { deleteUser } from "firebase/auth";

export const userServices = {
  getAllUsers: () => instance.get("/api/user"),
  updateUsers: (id: string, data: any, token: string) =>
    instance.put(`/api/user/${id}`, { data }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  deleteUsers: (id: string, token: string) =>
    instance.delete(`/api/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    getProfile: (token: string) => instance.get(`/api/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
};

export default userServices;
