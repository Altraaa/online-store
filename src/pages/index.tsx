import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useSession();

  return (
    <div>
      <div>
        Home Page
      </div>
    </div>
  );
}
