import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GallerySection from '@/components/GallerySection';

const Portfolio = () => {
  // Update document title
  useEffect(() => {
    document.title = "Portfolio | PIHU FILMS";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-heading mb-8 text-center">Our Portfolio</h1>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Explore our collection of photography and videography work showcasing our passion for capturing beautiful moments and telling compelling visual stories.
          </p>
        </div>
        <GallerySection />
        
        {/* Featured Projects Section */}
        <section className="py-16 bg-[#f8f7f0]">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-heading mb-8 text-center">Featured Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop" 
                  alt="Wedding Photography" 
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-heading mb-2">Wedding Collection</h3>
                <p className="text-gray-600 mb-4">
                  Our wedding photography captures the emotions, details, and special moments that make your day unforgettable. From intimate ceremonies to grand celebrations, we document every precious moment.
                </p>
                <div className="flex justify-end">
                  <button className="text-black hover:underline font-medium">View Collection →</button>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=2069&auto=format&fit=crop" 
                  alt="Portrait Photography" 
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
                <h3 className="text-2xl font-heading mb-2">Portrait Sessions</h3>
                <p className="text-gray-600 mb-4">
                  Our portrait sessions are designed to capture your unique personality and style. Whether for professional headshots, family portraits, or creative personal projects, we create images that reflect who you are.
                </p>
                <div className="flex justify-end">
                  <button className="text-black hover:underline font-medium">View Collection →</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio; 