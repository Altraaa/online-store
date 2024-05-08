import Button from "@/component/shared-component/button/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavItems = [
  {
    title: "Home",
    url: "#home",
  },
  {
    title: "Menu",
    url: "#menu",
  },
  {
    title: "Location",
    url: "#location",
  },
  {
    title: "About Us",
    url: "#about",
  },
];

type NavProps = {
  onClose?: any;
};
const NavbarView = (props: NavProps) => {
  const { onClose } = props;
  const { data } = useSession();
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const blurThreshold = 50;

      if (scrollTop > blurThreshold) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`h-16 fixed xl:h-20 w-full justify-end flex items-center z-50 bg-white border-b-2 border-red-600 shadow-xl ${isBlurred ? "bg-black bg-opacity-10 backdrop-filter backdrop-blur-xl" : ""}`}>
      <div className="w-full h-full flex items-center justify-between px-6 md:px-16 xl:px-28 2xl:px-80">
        <div>
          <h1 className="lg:text-xl xl:text-2xl text-lg font-bold text-red-600">
            ANISSA STORE
          </h1>
        </div>
        <div className="hidden lg:text-md xl:text-lg text-sm gap-4 lg:gap-10 xl:gap-14 md:flex">
          {NavItems.map((item) => (
            <div className=" after:content-[''] w-auto after:block after:absolute md:after:h-[1px] inline-flex justify-center xl:after:h-[2px] after:bg-red-600 after:w-0 hover:after:w-10 after:transition-all after:duration-300 after:ease-in-out transition-all ease-in-out duration-300">
              <Link
                key={item.title}
                href={item.url}
                className={`${"flex"} ${
                  pathname === item.url && [
                    " font-semibold border-t-2 border-red-600",
                  ]
                }`}
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
        <div className=" hidden md:flex">
          <Button
            type="button"
            variant="outlined"
            onClick={() => (data ? signOut() : signIn())}
          >
            {data ? "Sign Out" : "Sign In"}
          </Button>
        </div>

        {/* Mobile Navgiaton Bar */}
        {isOpen && (
          <div
            className={`absolute -z-50 min-h-[50vh] border-t-2 border-t-red-600 shadow-lg rounded-b-lg  flex-col flex gap-8 py-6 left-0 top-[99%] w-full bg-white md:hidden ${
              isOpen ? "animate-slide-down" : "animate-slide-up"
            }`}
          >
            {NavItems.map((item) => (
              <div className=" after:content-[''] w-auto after:block after:absolute md:after:h-[1px] inline-flex justify-center xl:after:h-[2px] after:bg-red-600 after:w-0 hover:after:w-10 after:transition-all after:duration-300 after:ease-in-out transition-all ease-in-out duration-300">
                <Link
                  key={item.title}
                  href={item.url}
                  className={`${"flex"} ${
                    pathname === item.url && [
                      " font-semibold border-t-2 border-red-600",
                    ]
                  }`}
                >
                  {item.title}
                </Link>
              </div>
            ))}
            <div className="w-full px-28 inline-flex justify-center">
              <Button
                type="button"
                variant="outlined"
                onClick={() => (data ? signOut() : signIn())}
              >
                {data ? "Sign Out" : "Sign In"}
              </Button>
            </div>
          </div>
        )}
        <div className="flex md:hidden">
          <Button type="button" variant="icon" onClick={toggle}>
            <i className="bx bx-menu text-3xl"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavbarView;