import React, { useState, useEffect, useRef } from 'react';
import Market1 from './assets/pictures/MarkingImage2.png';
import react1 from './assets/pictures/ryanh5800_React_icon_programming_68468fde-6f40-4320-8555-184738340d8c.webp';
import { useNavigate } from 'react-router-dom';

function useVisible(initialVisibility = false) {
    const [isVisible, setIsVisible] = useState(initialVisibility);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        }, { threshold: 0.1 });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return [ref, isVisible];
}

const HeadlineCards = () => {
    const navigate = useNavigate();
    const [card2Ref, card2Visible] = useVisible();
    const [card3Ref, card3Visible] = useVisible();

    const handleViewTestimonials = () => navigate('/CaseStudies');
    const handleViewSolutions = () => navigate('/solutions');

    const animationClasses = isVisible => 
        `transform transition-all duration-1000 ease-in-out ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`;

    return (
        <div className='flex flex-wrap justify-center items-center mx-auto p-4 py-12 gap-8 max-w-full'>
            {/* Card 2 */}
            <div 
                ref={card2Ref} 
                className={`bg-gradient-to-b from-black to-transparent rounded-xl overflow-hidden shadow-lg ${animationClasses(card2Visible)}`}
                style={{ width: "90%", maxWidth: "500px" }} // Responsive width with a maximum
            >
                <img className='w-full h-40 object-cover' src={Market1} alt='Marketing Solutions' />
                <div className='absolute inset-0 flex flex-col justify-end p-4'>
                    <p className='text-xl font-bold text-white text-center mb-2'>Web Solutions</p>
                    <p className='text-md text-white-300 text-center text-white '>Responsive AI Chatbots</p>
                    <p className='text-md text-white-300 mb-4 text-center text-white'>Application Development</p>
                    <button onClick={handleViewSolutions} className="self-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        View Now
                    </button>
                </div>
            </div>

            {/* Card 3 */}
            <div 
                ref={card3Ref} 
                className={`bg-gradient-to-b from-black to-transparent rounded-xl overflow-hidden shadow-lg ${animationClasses(card3Visible)}`}
                style={{ width: "90%", maxWidth: "500px" }} // Responsive width with a maximum
            >
                <img className='w-full h-40 object-cover' src={react1} alt='Premium Websites' />
                <div className='absolute inset-0 flex flex-col justify-end p-4'>
                    <p className='text-xl font-bold text-white text-center mb-2'>Premium Websites</p>
                    <p className='text-md text-white-300 text-center text-white'>Customized Solutions</p>
                    <p className='text-md text-white-300 mb-4 text-center text-white'>Increased Visibility with SEO</p>
                    <button onClick={handleViewTestimonials} className="self-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                        Our Work
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeadlineCards;
