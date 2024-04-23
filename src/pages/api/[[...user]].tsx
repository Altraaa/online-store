import { deleteData, retrieveData, updateData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const users = await retrieveData("users");
    const data = users.map((user: any) => {
      delete user.password;
      return;
    });
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Success",
      data: users,
    });
  } else if (req.method === "PUT") {
    const { id, data } = req.body;
    await updateData("users", id, data, (result: boolean) => {
      if (result) {
        res.status(200).json({
          status: true,
          statusCode: 200,
          message: "Success",
        });
      } else {
        res.status(400).json({
          status: false,
          statusCode: 400,
          message: "Failed",
        });
      }
    });
  } else if (req.method === "DELETE") {
    const { user }: any = req.query;
    await deleteData("users", user[1], (result: boolean) => {
      if (result) {
        res.status(200).json({
          status: true,
          statusCode: 200,
          message: "Success",
        });
      } else {
        res.status(400).json({
          status: false,
          statusCode: 400,
          message: "Failed",
        });
      }
    })
  }
}
