import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { Image } from '@mui/icons-material';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "John Doe",
            position: "CEO, Company A",
            text: "This is the best service I've ever used. Highly recommend it to everyone!",
            image: "/product1.jpg",
            rating: 5
        },
        {
            name: "Jane Smith",
            position: "Marketing Manager, Company B",
            text: "An amazing experience from start to finish. The team was very professional.",
            image: "/product2.jpg",
            rating: 4
        },
        {
            name: "Alice Johnson",
            position: "Product Designer, Company C",
            text: "I am very impressed with the quality and efficiency. Will definitely use again.",
            image: "/product3.jpg",
            rating: 3
        },
        {
            name: "Bob Brown",
            position: "Software Engineer, Company D",
            text: "Excellent service with top-notch support. It exceeded my expectations.",
            image: "/product2.jpg",
            rating: 4
        }
    ];

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000
    };

    return (
        <div className="w-full p-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                            <div className="flex items-center mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className="w-5 h-5 text-yellow-500"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21 12 17.27Z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-lg text-gray-700 mb-4">"{testimonial.text}"</p>
                            <h3 className="text-xl font-semibold mb-1">{testimonial.name}</h3>
                            <p className="text-sm text-gray-500 mb-4">{testimonial.position}</p>
                            <img 
                                src={testimonial.image} 
                                alt={testimonial.name} 
                                className="w-16 h-16 rounded-full object-cover"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialsSection;