import MemberLayout from "@/component/Layouts/MemberLayout/MemberLayout";
import TextField from "@/component/shared-component/textfield/textField";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useSession } from "next-auth/react";
import { useState } from "react";

type MemberUserProps ={
  profile: any;
}

const ProfileUserView = (props: MemberUserProps) => {
  const { profile } = props;
  console.log(profile);
  return (
    <div>
      <MemberLayout label="Profile Page">
        <div className="w-full max-h-screen flex gap-4">
          <div className="border w-80 h-72">jk whdkjqwhkuh</div>
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="font-bold text-lg">
                      Data User
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                      <TableCell className="space-y-4">
                        <TextField
                          label="Name"
                          defaultValue={profile?.fullname}
                          disabled
                          type="text"
                          name="name"
                        />
                      </TableCell>
                    </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </MemberLayout>
    </div>
  );
};

export default ProfileUserView;
