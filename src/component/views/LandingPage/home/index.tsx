import Button from "@/component/shared-component/button/button";
import Img1 from "@/assets/image/homebg.jpg"
import Image from "next/image";
import Link from "next/link";

const HomeView = () => {
  return (
    <section
      className="h-screen flex justify-center md:pt-24 md:px-16 xl:px-28 2xl:px-80 px-5 items-center w-full"
      id="home"
    >
      <Image src={Img1} alt="food" className="w-full h-full absolute -z-50 brightness-50 inset-0 shadow-lg filter  bg-black object-cover"/>
      <main className="w-full flex items-center justify-center h-full">
        <div className="text-center px-5">
          <h2 className="md:text-4xl text-2xl font-bold text-white text-center mb-4">Welcome to Our <span className="text-red-600">Website</span></h2>
          <p className="md:text-lg text-sm text-white text-center mb-6">
            Welcome to the one-stop food shop, everything from traditional to contemporary food is
            available. Eits, don't worry, the prices here are all cheap and pocket friendly.
          </p>
          <div className="w-full md:px-56">
            <Button type="button" label="Get Started" className="w-32 mt-4"/>
          </div>
        </div>
      </main>
    </section>
  );
};
export default HomeView;
