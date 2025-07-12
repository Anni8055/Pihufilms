import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Product type definition
interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

const Shop = () => {
  // Update document title
  useEffect(() => {
    document.title = "Shop | PIHU FILMS";
  }, []);

  // Sample products data
  const products: Product[] = [
    {
      id: 'p1',
      name: 'Premium Photo Album',
      category: 'albums',
      price: 5999,
      image: 'https://images.unsplash.com/photo-1595609452137-58edf9675594?q=80&w=1974&auto=format&fit=crop',
      description: 'Handcrafted premium photo album with 30 pages and customizable cover.'
    },
    {
      id: 'p2',
      name: 'Wedding Collection Album',
      category: 'albums',
      price: 8999,
      image: 'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?q=80&w=2070&auto=format&fit=crop',
      description: 'Elegant wedding album with 50 pages, premium paper, and leather cover.'
    },
    {
      id: 'p3',
      name: 'Fine Art Print (16"x20")',
      category: 'prints',
      price: 2499,
      image: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop',
      description: 'Museum-quality print on archival paper with vibrant colors.'
    },
    {
      id: 'p4',
      name: 'Canvas Print (24"x36")',
      category: 'prints',
      price: 4999,
      image: 'https://images.unsplash.com/photo-1577083552686-b097a7c2e481?q=80&w=2070&auto=format&fit=crop',
      description: 'Gallery-wrapped canvas print ready to hang, with premium finish.'
    },
    {
      id: 'p5',
      name: 'Digital Collection Package',
      category: 'digital',
      price: 3499,
      image: 'https://images.unsplash.com/photo-1620674156044-52b714665d46?q=80&w=2069&auto=format&fit=crop',
      description: 'Full resolution digital images with printing rights and online gallery.'
    },
    {
      id: 'p6',
      name: 'Video Highlight Package',
      category: 'digital',
      price: 7999,
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop',
      description: 'Professionally edited 5-10 minute highlight video in 4K resolution.'
    }
  ];

  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter products by category
  const filterProducts = (category: string) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-heading mb-8 text-center">Shop</h1>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Browse our collection of premium photo products, albums, prints, and digital packages to preserve your precious memories.
          </p>
          
          {/* Product Categories Tabs */}
          <Tabs defaultValue="all" className="mb-12">
            <div className="flex justify-center">
              <TabsList className="mb-8">
                <TabsTrigger 
                  value="all" 
                  onClick={() => filterProducts('all')}
                  className={activeCategory === 'all' ? 'font-medium' : ''}
                >
                  All Products
                </TabsTrigger>
                <TabsTrigger 
                  value="albums" 
                  onClick={() => filterProducts('albums')}
                  className={activeCategory === 'albums' ? 'font-medium' : ''}
                >
                  Photo Albums
                </TabsTrigger>
                <TabsTrigger 
                  value="prints" 
                  onClick={() => filterProducts('prints')}
                  className={activeCategory === 'prints' ? 'font-medium' : ''}
                >
                  Fine Art Prints
                </TabsTrigger>
                <TabsTrigger 
                  value="digital" 
                  onClick={() => filterProducts('digital')}
                  className={activeCategory === 'digital' ? 'font-medium' : ''}
                >
                  Digital Packages
                </TabsTrigger>
              </TabsList>
            </div>
            
            {/* Products Grid */}
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
                        <Link to="/cart">
                          <Button className="bg-black hover:bg-gray-800 text-white">
                            Add to Cart
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="albums" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
                        <Link to="/cart">
                          <Button className="bg-black hover:bg-gray-800 text-white">
                            Add to Cart
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="prints" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
                        <Link to="/cart">
                          <Button className="bg-black hover:bg-gray-800 text-white">
                            Add to Cart
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="digital" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
                        <Link to="/cart">
                          <Button className="bg-black hover:bg-gray-800 text-white">
                            Add to Cart
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Custom Orders */}
          <section className="py-16 bg-[#f8f7f0] rounded-lg mt-16">
            <div className="container mx-auto px-4 max-w-4xl text-center">
              <h2 className="text-3xl font-heading mb-6">Custom Orders</h2>
              <p className="text-gray-600 mb-8">
                Looking for something special? We offer custom photo products tailored to your specific needs. Contact us to discuss your requirements and get a personalized quote.
              </p>
              <Button className="bg-black hover:bg-gray-800 text-white">Request Custom Order</Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop; 