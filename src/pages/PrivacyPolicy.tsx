import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  // Update document title
  useEffect(() => {
    document.title = "Privacy Policy | PIHU FILMS";
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading mb-8 text-[#d4646f]">Privacy Policy</h1>
            <div className="w-24 h-1 bg-[#d4646f] mb-12"></div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">1. Introduction</h2>
              <p className="text-gray-700 mb-6">
                PIHU FILMS ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. 
                This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">2. Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">Identity Data includes first name, last name, username or similar identifier.</li>
                <li className="mb-2">Contact Data includes email address, telephone numbers, and physical address.</li>
                <li className="mb-2">Technical Data includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                <li className="mb-2">Usage Data includes information about how you use our website, products, and services.</li>
                <li className="mb-2">Marketing and Communications Data includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
              </ul>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">To register you as a new customer.</li>
                <li className="mb-2">To process and deliver your order.</li>
                <li className="mb-2">To manage our relationship with you.</li>
                <li className="mb-2">To improve our website, products/services, marketing, and customer relationships.</li>
                <li className="mb-2">To recommend products or services that may be of interest to you.</li>
              </ul>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">4. Data Security</h2>
              <p className="text-gray-700 mb-6">
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know.
              </p>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">5. Data Retention</h2>
              <p className="text-gray-700 mb-6">
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements.
              </p>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">6. Your Legal Rights</h2>
              <p className="text-gray-700 mb-4">
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700">
                <li className="mb-2">Request access to your personal data.</li>
                <li className="mb-2">Request correction of your personal data.</li>
                <li className="mb-2">Request erasure of your personal data.</li>
                <li className="mb-2">Object to processing of your personal data.</li>
                <li className="mb-2">Request restriction of processing your personal data.</li>
                <li className="mb-2">Request transfer of your personal data.</li>
                <li className="mb-2">Right to withdraw consent.</li>
              </ul>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">7. Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about this privacy policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-[#f9e0e3] p-6 rounded-lg mb-8">
                <p className="text-gray-700 mb-2"><strong>PIHU FILMS</strong></p>
                <p className="text-gray-700 mb-2">Near Sai Dham Colony Kukas, Amer</p>
                <p className="text-gray-700 mb-2">JAIPUR, Rajasthan 302028, India</p>
                <p className="text-gray-700 mb-2">Email: info@pihufilms.com</p>
                <p className="text-gray-700">Phone: +91 9876543210</p>
              </div>
              
              <h2 className="text-2xl font-heading mb-4 text-gray-800">8. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-6">
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date at the top of this privacy policy.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 