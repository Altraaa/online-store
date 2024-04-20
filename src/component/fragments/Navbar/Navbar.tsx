import { signIn, signOut, useSession } from "next-auth/react";

const NavbarView = () => {
  const { data } = useSession();
  return (
    <div className="h-20 xl:h-24 w-full justify-end flex items-center bg-white border-b-2 border-red-600 shadow-xl">
      <div className="w-full flex items-center justify-end px-10">
        <button
          className="bg-red-500 hover:bg-red-700 transition-all duration-300 ease-in-out text-white font-semibold py-2 px-4 rounded-xl"
          onClick={() => (data ? signOut() : signIn())}
        >
          {data ? "Sign Out" : "Sign In"}
        </button>
      </div>
    </div>
  );
};

export default NavbarView;
