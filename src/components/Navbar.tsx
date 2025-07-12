import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle navbar color change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-2">
        <div className={`max-w-4xl mx-auto rounded-full px-4 py-1.5 ${isScrolled ? 'bg-white/80 backdrop-blur-sm text-black shadow-sm' : 'bg-transparent text-white'} flex items-center justify-between`}>
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/about" 
              className="nav-link uppercase tracking-wider text-current hover:text-[#d4646f] transition-colors text-xs"
            >
              About
            </Link>
            <Link 
              to="/portfolio" 
              className="nav-link uppercase tracking-wider text-current hover:text-[#d4646f] transition-colors text-xs"
            >
              Portfolio
            </Link>
            <Link 
              to="/services" 
              className="nav-link uppercase tracking-wider text-current hover:text-[#d4646f] transition-colors text-xs"
            >
              Services
            </Link>
          </nav>

          {/* Logo */}
          <div className="flex-1 flex justify-center">
            <Link to="/" className="flex items-center justify-center transition-transform hover:scale-105">
              <div className="rounded-full overflow-hidden w-12 h-12 shadow-lg flex items-center justify-center">
                <img 
                  src="/images/pihufilms-logo.png" 
                  alt="Pihufilms Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Right Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/testimonials" 
              className="nav-link uppercase tracking-wider text-current hover:text-[#d4646f] transition-colors text-xs"
            >
              Testimonials
            </Link>
            <Link 
              to="/contact" 
              className="nav-link uppercase tracking-wider text-current hover:text-[#d4646f] transition-colors text-xs"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-current focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {!isMobileMenuOpen ? (
              <div className="flex flex-col items-end space-y-1">
                <span className="block w-5 h-0.5 bg-current"></span>
                <span className="block w-4 h-0.5 bg-current"></span>
                <span className="block w-3 h-0.5 bg-current"></span>
              </div>
            ) : (
              <div className="relative w-5 h-5">
                <span className="absolute top-1/2 left-0 w-5 h-0.5 bg-current -translate-y-1/2 rotate-45"></span>
                <span className="absolute top-1/2 left-0 w-5 h-0.5 bg-current -translate-y-1/2 -rotate-45"></span>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden max-w-4xl mx-auto bg-white text-black mt-2 rounded-xl shadow-lg">
            <div className="flex flex-col py-3 space-y-2">
              <Link 
                to="/about" 
                className="px-4 py-1 uppercase hover:bg-gray-50 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/portfolio" 
                className="px-4 py-1 uppercase hover:bg-gray-50 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                to="/services" 
                className="px-4 py-1 uppercase hover:bg-gray-50 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/testimonials" 
                className="px-4 py-1 uppercase hover:bg-gray-50 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-1 uppercase hover:bg-gray-50 text-sm"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
