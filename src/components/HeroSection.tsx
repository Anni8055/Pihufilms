import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

const images = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=1800&auto=format&fit=crop",
    alt: "Woman in white dress on moss island",
    lowResSrc: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1613336026275-d6d473084e85?q=80&w=1800&auto=format&fit=crop",
    alt: "Woman in white dress with moss",
    lowResSrc: "https://images.unsplash.com/photo-1613336026275-d6d473084e85?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1604537372136-89b3dae196e3?q=80&w=1800&auto=format&fit=crop",
    alt: "Woman with flowers in field",
    lowResSrc: "https://images.unsplash.com/photo-1604537372136-89b3dae196e3?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1524215674230-166d7969896f?q=80&w=1800&auto=format&fit=crop",
    alt: "Woman in lavender flowers",
    lowResSrc: "https://images.unsplash.com/photo-1524215674230-166d7969896f?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1621784564114-6eea05b89863?q=80&w=1800&auto=format&fit=crop",
    alt: "Woman with flowers",
    lowResSrc: "https://images.unsplash.com/photo-1621784564114-6eea05b89863?q=80&w=400&auto=format&fit=crop"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1604350741629-5396e40adf84?q=80&w=1800&auto=format&fit=crop",
    alt: "Woman in white by water",
    lowResSrc: "https://images.unsplash.com/photo-1604350741629-5396e40adf84?q=80&w=400&auto=format&fit=crop"
  }
];

// Animation variants
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

const slideUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerChildren: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(Array(images.length).fill(false));
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Preload images with low-res first approach
  useEffect(() => {
    // First load low-res versions for quick display
    const lowResImagePromises = images.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image.lowResSrc;
        img.onload = () => resolve(img);
        img.onerror = () => {
          console.error(`Failed to load low-res image: ${image.lowResSrc}`);
          resolve(null);
        };
      });
    });

    // Then load high-res versions
    Promise.all(lowResImagePromises).then(() => {
      const highResImagePromises = images.map((image, index) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = image.src;
          img.onload = () => {
            setImagesLoaded(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            resolve(img);
          };
          img.onerror = () => {
            console.error(`Failed to load high-res image: ${image.src}`);
            resolve(null);
          };
        });
      });

      Promise.all(highResImagePromises).then(() => {
        setIsInitialLoad(false);
      });
    });
  }, []);

  // Auto-rotate images
  useEffect(() => {
    // Only start rotation after initial load
    if (isInitialLoad) return;
    
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId);
  }, [isInitialLoad]);

  // Split heading text for letter animation
  const headingText = "BOOK YOUR";
  const headingSpanText = "PHOTO TOUR!";

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Hero Background Images */}
      {images.map((image, index) => (
        <div 
          key={image.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <img 
            src={imagesLoaded[index] ? image.src : image.lowResSrc}
            alt={image.alt} 
            className="w-full h-full object-cover object-center"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Hero Content */}
      <motion.div 
        className="container mx-auto px-4 z-10 text-center"
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
      >
        <motion.h1 
          className="font-drip text-5xl md:text-6xl lg:text-8xl text-white mb-6 tracking-wide leading-tight"
          variants={fadeIn}
        >
          <motion.div className="overflow-hidden">
            {headingText.split('').map((letter, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.05 }}
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.div>
          <br />
          <motion.span className="overflow-hidden inline-block">
            {headingSpanText.split('').map((letter, index) => (
              <motion.span
                key={index}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 + index * 0.05 }}
                className="inline-block"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-white max-w-2xl mx-auto mb-10 font-light"
          variants={slideUp}
        >
          Photo tour for creative souls, Germany, 9 - 14 June 2025.
          Intensive photo tour includes creating photos for your 
          portfolio in 3 different locations and one special day of
          shooting owls at a sunset scenery.
        </motion.p>
        
        <motion.div variants={slideUp}>
          <Button
            className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 uppercase tracking-widest"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              contactSection?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book Now →
          </Button>
        </motion.div>
      </motion.div>

      {/* Page Indicators */}
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-3 text-white/80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        {images.map((image, index) => (
          <motion.span 
            key={image.id}
            className={`${index === currentImageIndex ? "opacity-100" : "opacity-60"} cursor-pointer`}
            onClick={() => setCurrentImageIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {String(index + 1).padStart(2, '0')}
          </motion.span>
        ))}
        <span className="w-12 h-px bg-white/60 mx-1"></span>
      </motion.div>

      {/* Corner Frames */}
      <motion.div 
        className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.5 }}
      ></motion.div>
      <motion.div 
        className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.5 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.5 }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.5 }}
      ></motion.div>
    </section>
  );
};

export default HeroSection;
