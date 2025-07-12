import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    id: 'testimonial-1',
    quote: 'The right mixes and timing of the Wedding Film is so unique that it made us feel like the leads of a cinematic film.',
    author: 'Shekhar Prasad',
    role: 'Senior Consultant, Bristlecome'
  },
  {
    id: 'testimonial-2',
    quote: 'If you are getting a chance to work with them, jump and take it!',
    author: 'Richa Pancholy',
    role: 'HR Manager, LinkedIn'
  },
  {
    id: 'testimonial-3',
    quote: 'Trust me and just get them onboard to capture your special day, you will be assured of memories that will last you a lifetime!',
    author: 'Akshata Pai',
    role: 'Nike Ambassador for Running'
  },
  {
    id: 'testimonial-4',
    quote: 'What makes their work standout is their understanding of the people they are shooting.',
    author: 'Amritanshu Gupta',
    role: 'Assistant professor, IIT Mumbai'
  }
];

// Services data
const services = [
  {
    id: 'photography',
    title: 'PHOTOGRAPHY',
    description: 'Candid photography (focusing on natural candid shots of the bride-groom and main family) & traditional photography (coverage of the entire event).',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
        <circle cx="12" cy="13" r="3"></circle>
      </svg>
    )
  },
  {
    id: 'videography',
    title: 'VIDEOGRAPHY',
    description: 'Cinematography (artistic style videography with focus on the bride-groom and main family and their priceless candid moments) & traditional videography (coverage of the entire event).',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7"></polygon>
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
      </svg>
    )
  },
  {
    id: 'photobooks',
    title: 'PHOTOBOOKS & ALBUMS',
    description: 'Handcrafted custom designed wedding photo books and albums to cater to every taste and preference.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      </svg>
    )
  },
  {
    id: 'post-production',
    title: 'POST-PRODUCTION',
    description: 'Editing services in cinematic teaser and short film & traditional video.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <path d="M14 2v6h6"></path>
        <path d="M9 15v-6"></path>
        <path d="M12 12v6"></path>
        <path d="M15 15v-6"></path>
      </svg>
    )
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#FFF9F0] to-[#FFFAF5]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-drip mb-4 bg-gradient-to-r from-rose-500 to-amber-500 text-transparent bg-clip-text">Client Testimonials</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-amber-400 mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              What our happy couples have to say about their experience with us.
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-white/70 backdrop-blur-sm border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-6 text-amber-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" className="opacity-50">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p className="text-xl font-serif italic mb-6 text-gray-700">{testimonial.quote}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-medium text-gray-800">{testimonial.author}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden bg-[#f8f7f0]">
      {/* Horizontally scrolling background text */}
      <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none">
        <div className="animate-marquee whitespace-nowrap">
          {Array.from({ length: 10 }).map((_, i) => (
            <span key={i} className="text-[15rem] font-bold text-[#d4646f] opacity-10 inline-block mx-10">SERVICES</span>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-drip mb-4 text-[#d4646f]">Our Services</h2>
            <div className="w-24 h-1 bg-[#d4646f] mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We offer comprehensive wedding photography and videography services to capture your special day in the most beautiful way.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.id} className="bg-white/80 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="mb-6 text-[#d4646f]">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[#d4646f]">{service.title}</h3>
                  <p className="text-gray-600 flex-grow">{service.description}</p>
                  <div className="mt-6 pt-4 border-t border-[#f9e0e3]">
                    <Button variant="link" className="p-0 text-[#d4646f] hover:text-[#b85560] flex items-center gap-1">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* CTA */}
          <div className="mt-16 text-center">
            <Button className="bg-[#d4646f] text-white hover:bg-[#b85560] border-none shadow-md hover:shadow-lg px-8 py-6">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;