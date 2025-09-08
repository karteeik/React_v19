export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Logo / Brand */}
          <h1 className="text-xl font-bold text-white">MyWebsite</h1>

          {/* Copyright */}
          <p className="text-sm mt-4 md:mt-0">
            © {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
