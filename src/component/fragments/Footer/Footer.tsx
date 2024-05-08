const Footer = () => {
  return (
    <footer className="bg-red-700 md:px-16 xl:px-28 2xl:px-80 px-6 py-8">
      <main>
        <div className="gap-6 flex flex-col md:flex-row">
          <div className="space-y-2 md:w-1/2">
            <h1 className="text-2xl text-white font-bold">ANISSA STORE</h1>
            <p className="text-gray-300 text-sm">
              Anissa is a cake shop located in Bali, selling various traditional
              snacks originating from Bali as well as from outside Bali.
              Starting from moist cakes to dry cakes, everything is available
              here at affordable prices.
            </p>
          </div>
          <div className="md:w-1/2 flex md:justify-end items-end">
            <div className="space-y-1">
              <h2 className="text-lg text-white font-semibold">Contact Us:</h2>
              <ul className="text-gray-300">
                <li className="flex items-center gap-1">
                  <i className="text-2xl bx bxl-instagram"></i>Instagram
                </li>
                <li className="flex items-center gap-1">
                  <i className="text-2xl bx bxl-tiktok"></i>Tiktok
                </li>
                <li className="flex items-center gap-1">
                  <i className="text-2xl bx bxl-twitter"></i>Twitter
                </li>
                <li className="flex items-center gap-1">
                  <i className="text-2xl bx bxl-facebook-circle"></i>Facebook
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="block border-t-2 border-t-gray-300 mt-5" />
        <p className="text-gray-300 text-sm mt-3 inline-flex justify-center w-full">
          Copyright &copy; 2022 - Anissa Store. All rights reserved
        </p>
      </main>
    </footer>
  );
};

export default Footer;
