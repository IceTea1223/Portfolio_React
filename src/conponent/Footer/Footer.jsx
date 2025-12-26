import { Link } from "react-router-dom";

function Footer() {
  // Define navLinks inside the Footer component
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
    { to: "/skills", label: "Skills" },
  ];

  return (
    <footer className="relative z-10 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <Link to="/" className="text-xl sm:text-2xl font-bold text-blue-600">
              MyPortfolio
            </Link>
            <p className="text-gray-600 mt-1 sm:mt-2 text-sm sm:text-base">
              © {new Date().getFullYear()} HONG KIMCHHAY
            </p>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base"
              >
                {link.label}
              </Link> 
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;