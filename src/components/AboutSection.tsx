import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#f8f7f0] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/natural-texture.png')] opacity-5"></div>
      
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Image Column - Tilted Card */}
            <div className="relative z-10">
              <div className="tilted-card overflow-hidden rounded-lg shadow-2xl">
                <img 
                  src="/images/about/camera-equipment.jpg" 
                  alt="Professional Camera Equipment" 
                  className="w-full h-full object-cover"
                />
                <div className="tilted-card-overlay bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h4 className="text-xl font-medium">Professional Equipment</h4>
                  <p className="text-sm opacity-80">Capturing life's precious moments</p>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="z-10">
              <div className="overflow-hidden">
                <h2 className="script-heading scrolling-text">PIHU FILMS </h2>
              </div>
              <h3 className="text-3xl md:text-4xl font-drip font-normal mb-6">
                Artistic Story Telling<br />
                Celebrating YOU!
              </h3>
              
              <div className="about-content space-y-4">
                <p>
                  Welcome to PIHU FILMS STUDIO, where we transform ordinary moments into extraordinary memories through our creative lens and artistic vision.
                </p>
                <p>
                  We are a passionate team of photographers and filmmakers dedicated to capturing the authentic emotions and beautiful stories that make each event unique.
                </p>
                <p>
                  Our philosophy centers on creating visual narratives that reflect your personality and style, ensuring every photograph tells your story in its most genuine form.
                </p>
                
                <div className="flex gap-4 mt-8">
                  <Button className="btn-primary">
                    Our Portfolio
                  </Button>
                  <Button className="btn-outline">
                    About Us
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
