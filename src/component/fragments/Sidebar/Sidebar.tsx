import Button from "@/component/shared-component/button/button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

type SideBarproos = {
  label: string;
  lists: Array<{
    title: string;
    url: string;
    icon: string;
  }>;
};

const Sidebar = (props: SideBarproos) => {
  const { lists, label } = props;
  const { pathname } = useRouter();
  return (
    <div className="w-72 h-screen top-0 left-0 p-6 border-r-2 border-r-red-700 space-y-5 flex flex-col justify-between shadow-2xl bg-red-50 shadow-slate-400">
      <div className="flex flex-col space-y-4">
        <h1 className="font-semibold w-full inline-flex items-center justify-center text-2xl">
          {label}
        </h1>
        <hr className="mt-2 border-t-red-700 border-t-2" />
        <div className="flex flex-col w-full gap-3">
          {lists.map((list, index) => (
            <Link
              href={list.url}
              className={`flex gap-3 items-center py-2 px-4  rounded-2xl hover:bg-red-100 transition-all ease-in-out duration-200 ${
                pathname === list.url ? "bg-red-500 text-white hover:bg-red-600" : ""
              }`}
              key={list.title}
            >
              <i className={`text-3xl bx ${list.icon}`} />
              <h2 className="text-lg">{list.title}</h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex w-full z-50">
        <Button
          type="button"
          variant="outlined"
          className="bg-transparent flex"
          onClick={() => signOut()}
        >
          <i className="text-3xl bx bxs-log-out"></i>Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;

          