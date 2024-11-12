const LocationView = () => {
  return (
    <section
      className="h-screen flex justify-center lg:pt-56 md:px-16 px-6 xl:px-28 2xl:px-80 mb-44 items-center w-full"
      id="location"
    >
      <div className="bg-white w-full rounded-lg shadow-md border-2 py-10 sm:py-14 lg:py-20 border-red-600 flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-center">
          Our Location
        </h2>
        <hr className="border-t-4 border-t-red-700 w-32 mb-4 sm:mb-6"/>
        <p className="text-gray-600 text-center max-w-md sm:max-w-lg lg:max-w-3xl mb-4 sm:mb-6 px-4">
          We are located in a prime area with easy access to nearby facilities.
          Our office provides a welcoming environment where you can reach us for all inquiries.
          We are committed to offering the best customer service and a comfortable experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full mt-6 max-w-md sm:max-w-lg lg:max-w-4xl px-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-600">Jalan Ahmad Yani 114 Lumintang</p>
            <h3 className="text-lg sm:text-xl font-semibold mt-4 mb-2">
              Contact Information
            </h3>
            <p className="text-gray-600">Phone: +62 123456789</p>
            <p className="text-gray-600">Email: info@company.com</p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Find Us on Map</h3>
            <div className="w-full h-48 sm:h-64 lg:h-80 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31556.831406379457!2d115.17231647431643!3d-8.633967699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23f3bffffff8d%3A0xd2f47fda02064c9a!2sToko%20annisa!5e0!3m2!1sid!2sid!4v1730764525959!5m2!1sid!2sid" 
                width="100%"
                height="100%"
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationView;
