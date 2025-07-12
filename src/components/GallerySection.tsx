import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

// Portfolio projects data
const portfolioProjects = [
  {
    id: 'project-1',
    title: 'Ananya & Vikram',
    description: 'Traditional Wedding in Jaipur',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1974&auto=format&fit=crop',
    category: 'Wedding',
    featured: true,
    height: 'tall'
  },
  {
    id: 'project-2',
    title: 'Mehendi Night',
    description: 'Pre-wedding celebration',
    image: 'https://images.unsplash.com/photo-1592104292443-c7f0e9e7123b?q=80&w=2071&auto=format&fit=crop',
    category: 'Pre-Wedding',
    featured: false,
    height: 'medium'
  },
  {
    id: 'project-3',
    title: 'Riya & Arjun',
    description: 'Destination Wedding in Udaipur',
    image: 'https://images.unsplash.com/photo-1630653231851-85b24a7a0038?q=80&w=1974&auto=format&fit=crop',
    category: 'Destination',
    featured: true,
    height: 'medium'
  },
  {
    id: 'project-4',
    title: 'Haldi Ceremony',
    description: 'Traditional pre-wedding ritual',
    image: 'https://images.unsplash.com/photo-1577034239376-d3cf6fb4e5fb?q=80&w=1964&auto=format&fit=crop',
    category: 'Pre-Wedding',
    featured: false,
    height: 'short'
  },
  {
    id: 'project-5',
    title: 'Priya & Karan',
    description: 'Modern wedding at The Leela',
    image: 'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?q=80&w=1964&auto=format&fit=crop',
    category: 'Wedding',
    featured: false,
    height: 'tall'
  },
  {
    id: 'project-6',
    title: 'Sangeet Night',
    description: 'Musical celebration',
    image: 'https://images.unsplash.com/photo-1617575522053-46dc2da5a58b?q=80&w=1974&auto=format&fit=crop',
    category: 'Pre-Wedding',
    featured: true,
    height: 'medium'
  },
  {
    id: 'project-7',
    title: 'Neha & Rahul',
    description: 'Engagement photoshoot',
    image: 'https://images.unsplash.com/photo-1594062116884-282afc3086f2?q=80&w=1974&auto=format&fit=crop',
    category: 'Engagement',
    featured: false,
    height: 'medium'
  },
  {
    id: 'project-8',
    title: 'Royal Wedding',
    description: 'Luxury celebration in Jodhpur',
    image: 'https://images.unsplash.com/photo-1609151376730-f246ec0b99e5?q=80&w=1974&auto=format&fit=crop',
    category: 'Wedding',
    featured: true,
    height: 'short'
  },
  {
    id: 'project-9',
    title: 'Beach Engagement',
    description: 'Romantic sunset photoshoot',
    image: 'https://images.unsplash.com/photo-1583939411023-14783179e581?q=80&w=1974&auto=format&fit=crop',
    category: 'Engagement',
    featured: false,
    height: 'tall'
  }
];

// About page tabs
const aboutTabs = [
  {
    id: 'about-us',
    title: 'ABOUT US',
    content: 'Photography for us is a means to seal a moment that can be savoured for a lifetime. Our style of work is capturing moments in their true authentic mood, with a touch of artistry for an everlasting impact.'
  },
  {
    id: 'our-style',
    title: 'OUR STYLE',
    content: 'For us it is not just about capturing the \'Wow\' moments but also about how they are captured (lighting, perfect proportions, adequate head space, perfect angles to leave out the unnecessary noise and make them truly enchanting). What we stand for is steal worthy natural expressions, artistic angles which make the pictures look classic and portraits that are stylish with a touch of regality.'
  },
  {
    id: 'why-hire-us',
    title: 'WHY HIRE US?',
    content: 'We believe in creating timeless images that tell your unique story. Our team brings years of experience in capturing Indian weddings with sensitivity to cultural traditions and an eye for those special moments. We work closely with each client to understand their vision and deliver photographs that exceed expectations.'
  },
  {
    id: 'pricing',
    title: 'PRICING',
    content: 'We offer customized packages to suit different needs and budgets. Our wedding photography packages start from ₹75,000 and include pre-wedding shoots, full day coverage, edited digital images, and custom photo albums. Contact us for a personalized quote based on your specific requirements.'
  }
];

const PortfolioSection = () => {
  const [activeTab, setActiveTab] = useState('about-us');
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(portfolioProjects);
  const [isLoading, setIsLoading] = useState(true);
  
  const categories = ['All', 'Wedding', 'Pre-Wedding', 'Engagement', 'Destination'];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(portfolioProjects);
    } else {
      setFilteredProjects(portfolioProjects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  return (
    <>
      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 relative overflow-hidden bg-[#f8f7f0]">
        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-drip mb-3 text-gray-900"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Portfolio
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              A curated collection of our finest work capturing life's most precious moments
            </motion.p>
          </div>
          
          {/* Filter Categories */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleFilterClick(category)}
                className={`px-6 py-2 text-sm rounded-full transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-black text-white shadow-md' 
                    : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
          
          {/* Masonry Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`group relative overflow-hidden rounded-lg ${
                  project.height === 'tall' 
                    ? 'row-span-2 aspect-[3/4]' 
                    : project.height === 'medium' 
                      ? 'aspect-square' 
                      : 'aspect-[4/3]'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img 
                  src={project.image}
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <h3 className="text-xl font-medium text-white">{project.title}</h3>
                    <p className="text-sm text-white/80 mt-1">{project.description}</p>
                    {project.featured && (
                      <div className="mt-3">
                        <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* View All Projects Button */}
          <motion.div 
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button 
              className="bg-black hover:bg-gray-800 text-white border-none shadow-md hover:shadow-lg px-8 py-6"
            >
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Tab Navigation */}
              <div className="md:w-1/3">
                <div className="space-y-6">
                  {aboutTabs.map((tab) => (
                    <div 
                      key={tab.id}
                      className="relative cursor-pointer"
                      onClick={() => setActiveTab(tab.id)}
                    >
                      <div className="flex items-center">
                        <div className="relative h-20">
                          {/* Vertical line that runs through all tabs */}
                          <div className="absolute left-0 top-0 bottom-0 w-px h-full bg-[#f9e0e3]"></div>
                          
                          {/* Indicator bar for active tab */}
                          {activeTab === tab.id && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[#d4646f]" style={{ width: '4px' }}></div>
                          )}
                        </div>
                        
                        <h3 className={`text-2xl font-heading pl-6 transition-colors ${
                          activeTab === tab.id 
                            ? 'text-[#d4646f]' 
                            : 'text-gray-500 hover:text-[#d4646f]/70'
                        }`}>
                          {tab.title}
                        </h3>
                      </div>
                      
                      {/* Question mark for WHY HIRE US? */}
                      {tab.id === 'why-hire-us' && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[30px] text-3xl font-bold text-[#d4646f]/70">
                          ?
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tab Content */}
              <div className="md:w-2/3 bg-white p-8 shadow-sm border border-[#f9e0e3]/50">
                {aboutTabs.map((tab) => (
                  <div 
                    key={tab.id}
                    className={`space-y-4 transition-opacity duration-300 ${
                      activeTab === tab.id 
                        ? 'block opacity-100' 
                        : 'hidden opacity-0'
                    }`}
                  >
                    <h2 className="text-3xl font-drip mb-4 text-[#d4646f]">{tab.title}</h2>
                    <div className="prose max-w-none">
                      {tab.id === 'our-style' ? (
                        <>
                          <p className="text-gray-700 mb-4">
                            For us it is not just about <span className="font-semibold text-[#d4646f]">capturing the 'Wow' moments</span> but also about <span className="font-semibold text-[#d4646f]">how they are captured</span> (<span className="italic">lighting, perfect proportions, adequate head space, perfect angles</span> to leave out the unnecessary noise and make them truly enchanting).
                          </p>
                          <p className="text-gray-700">
                            What we stand for is steal worthy <span className="font-semibold text-[#d4646f]">natural expressions, artistic angles</span> which make the pictures look classic and <span className="font-semibold text-[#d4646f]">portraits that are stylish</span> with a touch of regality.
                          </p>
                        </>
                      ) : (
                        <p className="text-gray-700">{tab.content}</p>
                      )}
                    </div>
                    
                    {tab.id === 'pricing' && (
                      <div className="mt-6">
                        <Button className="bg-[#d4646f] text-white hover:bg-[#b85560] border-none">
                          Contact for Quote
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioSection;
