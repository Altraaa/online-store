import { Inter } from "next/font/google";
import { useSession } from "next-auth/react";
import HomeView from "@/component/views/LandingPage/home";
import HomeProduct from "@/component/views/LandingPage/product";
import Footer from "@/component/fragments/Footer/Footer";
import LocationView from "@/component/views/LandingPage/location";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useSession();

  return (
    <div>
      <HomeView />
      <HomeProduct />
      <LocationView />
      <Footer />
    </div>
  );
}
