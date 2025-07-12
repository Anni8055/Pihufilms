import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Google Reviews Data
const googleReviews = [
  {
    id: 'review-1',
    name: 'Arpita Javalagi',
    avatar: 'A',
    avatarColor: 'bg-purple-600',
    rating: 5,
    time: 'a year ago',
    text: 'The team at PIHU FILMS did an amazing job capturing our wedding. The photos came out beautifully and they were very professional throughout the entire process.',
    googleIcon: true
  },
  {
    id: 'review-2',
    name: 'Alya Tapia',
    avatar: 'A',
    avatarColor: 'bg-purple-600',
    rating: 5,
    time: '2 years ago',
    text: 'We couldn\'t be happier with our wedding photos! They captured every special moment and the quality of work exceeded our expectations.',
    googleIcon: true
  },
  {
    id: 'review-3',
    name: 'Hussain Kazi',
    avatar: 'h',
    avatarColor: 'bg-teal-600',
    rating: 5,
    time: '2 years ago',
    text: 'I got my wedding album done with them after lot of search and I must say that the team has done an extremely great job. Right from our first discussion they understood exactly what we wanted.',
    googleIcon: true
  },
  {
    id: 'review-4',
    name: 'Shekhar Prasad',
    avatar: 'S',
    avatarColor: 'bg-blue-600',
    rating: 5,
    time: '6 months ago',
    text: 'The right mixes and timing of the Wedding Film is so unique that it made us feel like the leads of a cinematic film.',
    googleIcon: true
  },
  {
    id: 'review-5',
    name: 'Richa Pancholy',
    avatar: 'R',
    avatarColor: 'bg-pink-600',
    rating: 5,
    time: '1 year ago',
    text: 'If you are getting a chance to work with them, jump and take it! Their attention to detail and creativity is unmatched.',
    googleIcon: true
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleReviews, setVisibleReviews] = useState([]);
  const reviewsPerPage = 3;

  useEffect(() => {
    // Calculate which reviews to show based on current index
    const endIndex = Math.min(currentIndex + reviewsPerPage, googleReviews.length);
    setVisibleReviews(googleReviews.slice(currentIndex, endIndex));
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex(Math.min(googleReviews.length - reviewsPerPage, currentIndex + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(Math.min(Math.max(0, index), googleReviews.length - reviewsPerPage));
  };

  return (
    <section id="testimonials" className="py-20 bg-[#f8f7f0]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="mb-6 md:mb-0">
              <h2 className="text-5xl font-heading mb-4 text-[#d4646f]">Client Testimonials</h2>
              <div className="w-24 h-1 bg-[#d4646f] mb-6"></div>
              <div className="flex items-center">
                <div className="mr-4">
                  <span className="text-4xl font-bold text-gray-800">4.6</span>
                  <div className="flex mt-1">
                    {[1, 2, 3, 4].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className="text-gray-300"></path>
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className="text-yellow-400" clipPath="inset(0 50% 0 0)"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700">Based on 28 reviews</p>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-gray-600 mr-1">powered by</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="24" viewBox="0 0 272 92">
                      <path fill="#EA4335" d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                      <path fill="#FBBC05" d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z"/>
                      <path fill="#4285F4" d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z"/>
                      <path fill="#34A853" d="M225 3v65h-9.5V3h9.5z"/>
                      <path fill="#EA4335" d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.37-11.59 12.93z"/>
                      <path fill="#4285F4" d="M35.29 41.41V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-20.49.01z"/>
                    </svg>
                  </div>
                  <a 
                    href="https://www.google.com/search?q=pihu+films" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-sm text-blue-600 hover:underline"
                  >
                    <span className="mr-1">review us on</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                onClick={goToPrevious} 
                disabled={currentIndex === 0}
                variant="outline"
                size="icon"
                className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
                <span className="sr-only">Previous</span>
              </Button>
              <Button 
                onClick={goToNext} 
                disabled={currentIndex >= googleReviews.length - reviewsPerPage}
                variant="outline"
                size="icon"
                className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-100 disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
          
          {/* Reviews Carousel */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleReviews.map((review) => (
              <Card key={review.id} className="bg-white border-none shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 ${review.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
                        {review.avatar}
                      </div>
                      <div className="ml-3">
                        <p className="font-medium text-gray-800">{review.name}</p>
                        <p className="text-gray-500 text-xs">{review.time}</p>
                      </div>
                    </div>
                    {review.googleIcon && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48">
                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/>
                        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/>
                        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/>
                        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/>
                      </svg>
                    )}
                  </div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm line-clamp-4">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.min(googleReviews.length - reviewsPerPage + 1, 5) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  currentIndex === index ? 'bg-[#d4646f]' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 