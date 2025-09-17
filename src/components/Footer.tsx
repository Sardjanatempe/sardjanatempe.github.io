const Footer = () => {
  return (
    <footer className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <p className="text-center flex justify-center items-center text-sm text-gray-600 dark:text-gray-300">
          &copy; {new Date().getFullYear()} Sardjana Tempe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
