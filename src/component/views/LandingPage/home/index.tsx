import Button from "@/component/shared-component/button/button";

const HomeView = () => {
  return (
    <section
      className="h-screen flex justify-center pt-24 md:px-16 xl:px-28 2xl:px-80 px-5 items-center w-full mb-28 md:mb-0"
      id="home"
    >
      <main className="w-full items-center grid grid-cols-1 md:grid-cols-2 gap-5  h-full">
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Welcome to Our Website</h2>
          <p className="text-md text-gray-600">
            Welcome to the one-stop food shop, everything from traditional to contemporary food is 
            available. Eits, don't worry, the prices here are all cheap and pocket friendly.
          </p>
          <Button type="button" label="Get Started" className="w-32 mt-4" />
        </div>
        <div className="text-center w-full flex justify-end items-center">
          <img
            src="https://via.placeholder.com/400"
            alt="Image"
            className="mx-auto md:mx-0 rounded-lg"
          />
        </div>
      </main>
    </section>
  );
};
export default HomeView;
