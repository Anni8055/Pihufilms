import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';

const Testimonials = () => {
  // Update document title
  useEffect(() => {
    document.title = "Testimonials | PIHU FILMS";
  }, []);

  // Featured testimonials
  const featuredTestimonials = [
    {
      id: 'ft1',
      name: 'Ananya & Rohit',
      event: 'Wedding Photography',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
      quote: 'PIHU FILMS captured our wedding day perfectly. Every time we look at our photos, we relive those beautiful moments all over again. The team was professional, creative, and made us feel completely at ease.'
    },
    {
      id: 'ft2',
      name: 'Vikram S.',
      event: 'Corporate Event',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
      quote: 'We hired PIHU FILMS for our company\'s annual conference, and they exceeded all expectations. The photos were stunning, and they managed to capture the energy and essence of the event perfectly. Highly recommended!'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-heading mb-8 text-center">Client Testimonials</h1>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Hear what our clients have to say about their experience working with PIHU FILMS. We take pride in delivering exceptional service and creating beautiful memories.
          </p>
        </div>
        
        {/* Featured Testimonials */}
        <section className="py-16 bg-[#f8f7f0]">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-heading mb-12 text-center">Featured Stories</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {featuredTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-md flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{testimonial.name}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.event}</p>
                    </div>
                  </div>
                  <div className="mb-6">
                    <svg className="w-8 h-8 text-gray-300 mb-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-gray-700 italic">{testimonial.quote}</p>
                  </div>
                  <div className="mt-auto">
                    <Button variant="outline" className="text-sm">Read Full Story</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Main Testimonials Section */}
        <TestimonialsSection />
        
        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-3xl font-heading mb-6">Share Your Experience</h2>
            <p className="text-gray-600 mb-8">
              We value your feedback! If you've worked with us, we'd love to hear about your experience. Your testimonial helps us improve and helps other clients make informed decisions.
            </p>
            <Button className="bg-black hover:bg-gray-800 text-white">Submit Your Testimonial</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials; 