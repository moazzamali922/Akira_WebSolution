import React, { useState, useEffect, useRef } from 'react';

const BookAMeeting = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });
    
        const currentRef = ref.current; // Create a local variable
    
        if (currentRef) {
            observer.observe(currentRef);
        }
    
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    

    const animationClasses = (isVisible) => 
        `transform transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

    return (
        <div ref={ref} className={animationClasses(isVisible)}>
            <h1 className="px-4 py-16 text-center text-xl md:text-2xl lg:text-2xl  md:py-2"> Schedule a Meeting with Us! 📞  </h1>
            <p className=' text-center '>via Calendly</p>

        </div>
    );
}

export default BookAMeeting;
