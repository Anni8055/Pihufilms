import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';
import Map from '@/components/Map';

const Contact = () => {
  // Update document title
  useEffect(() => {
    document.title = "Contact Us | PIHU FILMS";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-heading mb-8 text-center">Contact Us</h1>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We'd love to hear from you! Whether you have a question about our services, pricing, or would like to book a session, our team is here to help.
          </p>
        </div>
        
        {/* Contact Information */}
        <section className="py-12 bg-[#f8f7f0]">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Phone</h3>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-gray-600">Mon-Fri: 9am - 6pm</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Email</h3>
                <p className="text-gray-600">info@pihufilms.com</p>
                <p className="text-gray-600">support@pihufilms.com</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Studio Address</h3>
                <p className="text-gray-600">123 Photography Lane</p>
                <p className="text-gray-600">Delhi, India 110001</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map and Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-heading mb-6">Our Location</h2>
                <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
                  <Map />
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-medium mb-2">Studio Hours</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed (By Appointment)</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-heading mb-6">Send Us a Message</h2>
                <ContactSection />
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-[#f8f7f0]">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-heading mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">How far in advance should I book?</h3>
                <p className="text-gray-600">
                  We recommend booking at least 3-6 months in advance for wedding photography, and 2-4 weeks for portrait sessions. However, we sometimes have last-minute availability, so don't hesitate to inquire about your date.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">What is your payment policy?</h3>
                <p className="text-gray-600">
                  We require a 50% deposit to secure your booking date, with the remaining balance due one week before the event. For portrait sessions, full payment is due at the time of booking.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">How long until I receive my photos?</h3>
                <p className="text-gray-600">
                  Delivery time varies based on the service. Wedding photos typically take 4-6 weeks, while portrait sessions are delivered within 2 weeks. Rush delivery is available for an additional fee.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium mb-2">Do you travel for photo shoots?</h3>
                <p className="text-gray-600">
                  Yes, we are available for travel throughout India and internationally. Travel fees may apply depending on the location. Please contact us for a custom quote for your destination event.
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

export default Contact; 