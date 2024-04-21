import Button from "@/component/shared-component/button/button";
import { signIn, signOut, useSession } from "next-auth/react";

const NavbarView = () => {
  const { data } = useSession();
  return (
    <div className="h-20 xl:h-24 w-full justify-end flex items-center bg-white border-b-2 border-red-600 shadow-xl">
      <div className="w-full flex items-center justify-end px-10">
        <div className="w-28 flex">
          <Button type="button" onClick={() => (data ? signOut() : signIn())}>
            {data ? "Sign Out" : "Sign In"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavbarView;
