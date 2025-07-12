import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found | PIHU FILMS";
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-9xl font-bold mb-4 text-[#d4646f]">404</h1>
            <div className="w-24 h-1 bg-[#d4646f] mx-auto mb-8"></div>
            <h2 className="text-3xl font-heading mb-6 text-gray-800">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/">
              <Button className="bg-[#d4646f] text-white hover:bg-[#b85560] border-none px-8 py-6">
                Return to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
