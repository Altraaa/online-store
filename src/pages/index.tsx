import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import NavbarView from "@/component/fragments/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useSession();

  return (
    <div>
      <div>
        <NavbarView />
      </div>
    </div>
  );
}
