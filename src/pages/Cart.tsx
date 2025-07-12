import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

// Sample cart items for demonstration
const initialCartItems = [
  {
    id: 1,
    name: 'Premium Wedding Album',
    price: 12999,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1543169108-32ac15a21e05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2VkZGluZyUyMGFsYnVtfGVufDB8fDB8fHww'
  },
  {
    id: 2,
    name: 'Engagement Photoshoot Package',
    price: 8499,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW5nYWdlbWVudHxlbnwwfHwwfHx8MA%3D%3D'
  }
];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  
  // Update document title
  useEffect(() => {
    document.title = "Shopping Cart | RAJ PHOTO";
  }, []);

  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  
  // Calculate tax (assuming 18% GST)
  const tax = subtotal * 0.18;
  
  // Calculate total
  const total = subtotal + tax;

  // Update quantity
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Format price in Indian Rupees
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-heading mb-8 text-[#d4646f]">Shopping Cart</h1>
          <div className="w-24 h-1 bg-[#d4646f] mb-12"></div>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-100">
                        <tr>
                          <th className="text-left p-4 font-medium text-gray-600">Product</th>
                          <th className="text-center p-4 font-medium text-gray-600">Quantity</th>
                          <th className="text-right p-4 font-medium text-gray-600">Price</th>
                          <th className="text-right p-4 font-medium text-gray-600">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems.map((item) => (
                          <tr key={item.id} className="border-b border-gray-100">
                            <td className="p-4">
                              <div className="flex items-center">
                                <img 
                                  src={item.image} 
                                  alt={item.name} 
                                  className="w-16 h-16 object-cover rounded-md mr-4"
                                />
                                <span className="font-medium text-gray-800">{item.name}</span>
                              </div>
                            </td>
                            <td className="p-4">
                              <div className="flex items-center justify-center">
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                                >
                                  -
                                </button>
                                <span className="mx-3 w-8 text-center">{item.quantity}</span>
                                <button 
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100"
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="p-4 text-right font-medium">
                              {formatPrice(item.price * item.quantity)}
                            </td>
                            <td className="p-4 text-right">
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="text-gray-400 hover:text-red-500"
                                aria-label="Remove item"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mt-8 flex justify-between items-center">
                  <Link to="/#shop" className="text-[#d4646f] hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Continue Shopping
                  </Link>
                  <Button 
                    onClick={() => setCartItems([])} 
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
              
              {/* Order Summary */}
              <div>
                <div className="bg-[#f9e0e3] p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-heading mb-6 text-[#d4646f]">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium text-gray-800">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tax (18% GST)</span>
                      <span className="font-medium text-gray-800">{formatPrice(tax)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 mt-4">
                      <div className="flex justify-between">
                        <span className="text-lg font-medium text-gray-800">Total</span>
                        <span className="text-lg font-bold text-[#d4646f]">{formatPrice(total)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-[#d4646f] text-white hover:bg-[#b85560] border-none">
                    Proceed to Checkout
                  </Button>
                  
                  <div className="mt-6 text-center text-sm text-gray-600">
                    <p>Need help? Contact our customer support at</p>
                    <a href="mailto:info@rajphoto.com" className="text-[#d4646f] hover:underline">info@rajphoto.com</a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-2xl font-heading mb-4 text-gray-800">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
              <Link to="/#shop">
                <Button className="bg-[#d4646f] text-white hover:bg-[#b85560] border-none">
                  Browse Products
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart; 