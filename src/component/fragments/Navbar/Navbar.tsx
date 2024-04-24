import Button from "@/component/shared-component/button/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";


const NavItems =[
  {
    title: "Home",
    url: "/"
  },
  {
    title: "Products",
    url: "/products"
  },
  {
    title: "Cart",
    url: ""
  },
  {
    title: "About Us",
    url: ""
  }
]
const NavbarView = () => {
  const { data } = useSession();
  const { pathname } = useRouter();
  return (
    <div className="h-20 fixed xl:h-24 w-full justify-end flex items-center bg-white border-b-2 border-red-600 shadow-xl">
      <div className="w-full h-full flex items-center justify-between px-16">
        <div>
          <h1 className="text-2xl font-semibold text-red-600">Altraaa Store</h1>
        </div>
        <div className="text-lg gap-4 hidden md:flex">
          {NavItems.map((item) => (
            <div className=" after:content-[''] w-28 after:block after:absolute md:after:h-[1px] inline-flex justify-center  xl:after:h-[2px] after:bg-red-600 after:w-0 hover:after:w-10 after:transition-all after:duration-300 after:ease-in-out transition-all ease-in-out duration-300">
              <Link
                key={`nav-${item.title}`}
                href={item.url}
                className={`${"flex"} ${
                  pathname === item.url && [" font-semibold border-t-2 border-red-600"]
                }`}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className="w-28 hidden md:flex">
          <Button
            type="button"
            variant="outlined"
            onClick={() => (data ? signOut() : signIn())}
          >
            {data ? "Sign Out" : "Sign In"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavbarView;
