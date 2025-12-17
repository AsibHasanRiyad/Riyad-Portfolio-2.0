const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 border-t border-gray-400/50 text-center">
      <p className="text-gray-100 hover:text-primary transition-colors duration-300">
        &copy; {currentYear} All rights reserved to Abdullah
      </p>
    </footer>
  );
};

export default Footer;
