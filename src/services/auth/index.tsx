import { addData, retrieveDataByField } from "@/lib/firebase/service";
import bcrypt from "bcrypt";
import { getDatabase } from "firebase/database";

export async function signUp(
  userData: {
    email: string;
    password: string;
    fullname: string;
    phone: string;
    role: string;
    created_at: Date;
    updated_at: Date;
  },
  callBack: Function
) {
  const data = await retrieveDataByField("users", "email", userData.email);

  if (data.length > 0) {
    callBack(false);
  } else {
    if (!userData.role) {
      userData.role = "member";
    }
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.created_at = new Date();
    userData.updated_at = new Date();
    addData("users", userData, (result: boolean) => {
      callBack(result);
    });
  }
}

export async function signIn(email: string) {
  const data = await retrieveDataByField("users", "email", email);

  if (data) {
    return data[0];
  } else {
    return null;
  }
}

export async function loginWithGoogle(
  data: { email: string; role?: string },
  callBack: Function
) {
  const googleData = await retrieveDataByField("users", "email", data.email);

  if (googleData.length > 0) {
    callBack(googleData[0]);
  } else {
    data.role = "member";
    await addData("users", data, (result: boolean) => {
      if (result) {
        callBack(data);
      }
    });
  }
}
