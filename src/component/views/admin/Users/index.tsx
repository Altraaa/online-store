import AdminLayout from "@/component/Layouts/AdminLayout/AdminLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import Button from "@/component/shared-component/button/button";
import ModalUpdate from "./ModalUpdate/ModalUpdate";
import { useEffect, useState } from "react";
import userServices from "@/services/user";
import ModalDelete from "./ModalDelete/ModalDelete";

type AdminUsersProps = {
  Users: any;
};

const UsersAdminView = (props: AdminUsersProps) => {
  const [updatedUser, setUpdatedUser] = useState<any>({});
  const [deletedUser, setDeletedUser] = useState<any>({});
  const [usersData, setUsersData] = useState<any>([]);
  const { Users } = props;

    useEffect(() => {
        setUsersData(Users);
    }, [Users])
  return (
    <>
      <AdminLayout label="User Management">
        <div className="space-y-6">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="font-bold text-lg">No:</TableCell>
                  <TableCell className="font-bold text-lg">Name:</TableCell>
                  <TableCell className="font-bold text-lg">Email:</TableCell>
                  <TableCell className="font-bold text-lg">Phone:</TableCell>
                  <TableCell className="font-bold text-lg">Role:</TableCell>
                  <TableCell className="font-bold text-lg">Edit:</TableCell>
                  <TableCell className="font-bold text-lg">Delete:</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usersData.map((user: any, index: number) => (
                  <TableRow>
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell>{user.fullname}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Button
                        type="button"
                        variant="icon"
                        onClick={() => setUpdatedUser(user)}
                        className="text-blue-500 hover:text-blue-600"
                      >
                        <i className="bx bx-edit"></i>
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        type="button"
                        variant="icon"
                        onClick={() => setDeletedUser(user)}
                        className="text-red-500 hover:text-red-600"
                      >
                        <i className="bx bx-trash-alt"></i>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </AdminLayout>
      <div className="w-full h-full hidden fixed">
        {Object.keys(updatedUser).length && (
          <ModalUpdate
            updatedUser={updatedUser}
            setUpdatedUser={setUpdatedUser}
            setUsersData={setUsersData}
          />
        )}
        {Object.keys(deletedUser).length && (
          <ModalDelete
            deletedUser={deletedUser}
            setDeletedUser={setDeletedUser}
            setUsersData={setUsersData}
          />
        )}
      </div>
    </>
  );
};

export default UsersAdminView;
