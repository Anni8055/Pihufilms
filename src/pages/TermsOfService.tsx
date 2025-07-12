import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  // Update document title
  useEffect(() => {
    document.title = "Terms of Service | PIHU FILMS";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading mb-8 text-[#d4646f]">Terms of Service</h1>
            <div className="w-24 h-1 bg-[#d4646f] mb-12"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">1. Introduction</h2>
              <p className="text-gray-700 mb-6">
                These terms and conditions outline the rules and regulations for the use of PIHU FILMS's website.
                By accessing this website, we assume you accept these terms and conditions. Do not continue to use our website
                if you do not agree to take all of the terms and conditions stated on this page.
              </p>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">2. License</h2>
              <p className="text-gray-700 mb-6">
                Unless otherwise stated, PIHU FILMS and/or its licensors own the intellectual property rights for
                all material on this website. All intellectual property rights are reserved. You may access this from our website
                for your own personal use subjected to restrictions set in these terms and conditions.
              </p>
              
              <h3 className="text-xl font-heading mb-3 text-gray-800">You must not:</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">Republish material from our website</li>
                <li className="mb-2">Sell, rent, or sub-license material from our website</li>
                <li className="mb-2">Reproduce, duplicate, or copy material from our website</li>
                <li className="mb-2">Redistribute content from our website</li>
              </ul>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">3. Photography Services</h2>
              <p className="text-gray-700 mb-6">
                PIHU FILMS provides photography services including but not limited to wedding photography, 
                portrait sessions, commercial photography, and video production. By booking our services, you agree to the following:
              </p>
              
              <h3 className="text-xl font-heading mb-3 text-gray-800">Bookings and Payments:</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">A non-refundable deposit is required to secure your booking date.</li>
                <li className="mb-2">Full payment is due prior to or on the day of the photography session unless otherwise agreed upon in writing.</li>
                <li className="mb-2">Rescheduling may be accommodated at our discretion and subject to availability.</li>
              </ul>
              
              <h3 className="text-xl font-heading mb-3 text-gray-800">Copyright and Usage:</h3>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">PIHU FILMS retains copyright of all images created.</li>
                <li className="mb-2">Clients are granted a license to use the images for personal use.</li>
                <li className="mb-2">Commercial use of images requires additional licensing agreements.</li>
                <li className="mb-2">PIHU FILMS reserves the right to use images for promotional purposes unless otherwise agreed upon in writing.</li>
              </ul>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">4. Product Purchases</h2>
              <p className="text-gray-700 mb-6">
                For physical products purchased through our website (albums, prints, etc.), the following terms apply:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">All prices are subject to change without notice.</li>
                <li className="mb-2">Shipping times are estimates and not guaranteed.</li>
                <li className="mb-2">Products may vary slightly from their pictures on the website.</li>
                <li className="mb-2">Returns are accepted within 14 days of delivery for damaged or defective items only.</li>
              </ul>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">5. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                In no event shall PIHU FILMS, nor any of its officers, directors, and employees, be liable for 
                anything arising out of or in any way connected with your use of this website, whether such liability is under 
                contract, tort, or otherwise. PIHU FILMS shall not be liable for any indirect, consequential, or 
                special liability arising out of or in any way related to your use of this website.
              </p>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">6. Indemnification</h2>
              <p className="text-gray-700 mb-6">
                You hereby indemnify to the fullest extent PIHU FILMS from and against any and all liabilities, costs, 
                demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
              </p>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">7. Severability</h2>
              <p className="text-gray-700 mb-6">
                If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted 
                without affecting the remaining provisions herein.
              </p>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">8. Variation of Terms</h2>
              <p className="text-gray-700 mb-6">
                PIHU FILMS is permitted to revise these Terms at any time as it sees fit, and by using this website, 
                you are expected to review these Terms on a regular basis.
              </p>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">9. Governing Law & Jurisdiction</h2>
              <p className="text-gray-700 mb-6">
                These Terms will be governed by and interpreted in accordance with the laws of India, and you submit to the 
                non-exclusive jurisdiction of the state and federal courts located in Jaipur, Rajasthan for the resolution of any disputes.
              </p>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">10. Contact Information</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="bg-[#f9e0e3] p-6 rounded-lg mb-8">
                <p className="text-gray-700 mb-2"><strong>PIHU FILMS</strong></p>
                <p className="text-gray-700 mb-2">Near Sai Dham Colony Kukas, Amer</p>
                <p className="text-gray-700 mb-2">JAIPUR, Rajasthan 302028, India</p>
                <p className="text-gray-700 mb-2">Email: info@pihufilms.com</p>
                <p className="text-gray-700">Phone: +91 9876543210</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService; 