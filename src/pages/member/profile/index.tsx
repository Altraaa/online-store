import ProfileUserView from "@/component/views/member/profile";
import userServices from "@/services/user";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const session: any = useSession();
  useEffect(() => {
    const getAllUsers = async () => {
      const { data } = await userServices.getProfile(session.data?.accessToken);
      console.log(data);
      setProfile(data.data);
    };
    getAllUsers();
  }, []);
  return (
    <>
      <ProfileUserView profile={profile} />
    </>
  );
};

export default ProfilePage;
