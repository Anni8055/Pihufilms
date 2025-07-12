import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';

const About = () => {
  // Update document title
  useEffect(() => {
    document.title = "About Us | PIHU FILMS";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-heading mb-8 text-center">About Us</h1>
        </div>
        <AboutSection />
        
        {/* Additional About Page Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-heading mb-6">Our Story</h2>
                <p className="mb-4">
                  Founded with a passion for visual storytelling, PIHU FILMS has grown from a small photography studio into a creative powerhouse dedicated to capturing life's most precious moments.
                </p>
                <p className="mb-4">
                  Our journey began with a simple belief: every person, every moment, and every story deserves to be told with authenticity and artistic vision. This philosophy continues to guide our work today.
                </p>
                <p>
                  With years of experience and countless events captured, we've refined our craft to deliver photography and videography services that exceed expectations and create lasting memories.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-heading mb-6">Our Approach</h2>
                <p className="mb-4">
                  We believe that great photography is about more than just technical skill—it's about connection, emotion, and storytelling. Our team takes the time to understand your unique vision and needs.
                </p>
                <p className="mb-4">
                  Using state-of-the-art equipment and creative techniques, we capture authentic moments that reflect your personality and style. Every image is carefully edited to ensure the highest quality.
                </p>
                <p>
                  From the initial consultation to the final delivery, we provide a seamless, professional experience that makes capturing your special moments effortless and enjoyable.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About; 