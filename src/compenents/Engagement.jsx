    import React, { useState, useEffect, useRef } from "react";
    import Engagement1 from "./assets/pictures/Engagment1.webp";
    import { useNavigate } from 'react-router-dom';
    import AkiraLogo from './assets/pictures/Icons/AkiraLogoTransparent.webp';
    import LaptopIcon from './assets/pictures/Icons/laptopicon.webp';
    import SearchEngine from './assets/pictures/Icons/searchicon.webp';

    const Engagement = () => {
        const navigate = useNavigate();

        const [contentIsVisible, setContentIsVisible] = useState(false);
        const contentRef = useRef(null);

        const [imgIsVisible, setImgIsVisible] = useState(false);
        const imgRef = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.target === contentRef.current && entry.isIntersecting) {
                        setContentIsVisible(true);
                    } else if (entry.target === imgRef.current && entry.isIntersecting) {
                        setImgIsVisible(true);
                    }
                });
            });

            const currentContentRef = contentRef.current;
            const currentImgRef = imgRef.current;

            if (currentContentRef) {
                observer.observe(currentContentRef);
            }

            if (currentImgRef) {
                observer.observe(currentImgRef);
            }

            return () => {
                if (currentContentRef) {
                    observer.unobserve(currentContentRef);
                }
                if (currentImgRef) {
                    observer.unobserve(currentImgRef);
                }
            };
        }, []);

        const handleViewSolutions = () => {
            navigate('/solutions');
        };

        const animationClasses = (isVisible) => 
            `transform transition duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`;

        return (
            <div className="w-full  py-16 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                    <img 
                        ref={imgRef}
                        className={`w-full h-auto mx-auto my-4 rounded-lg shadow-lg ${animationClasses(imgIsVisible)}`} 
                        src={Engagement1} 
                        alt="AI-web-solutions" 
                    />
                    <div 
                        ref={contentRef}
                        className={`flex flex-col space-y-4 ${animationClasses(contentIsVisible)}`}
                    >
                        <p className="text-center text-gray-600 text-1xl">Akira Web Solutions</p>
                        <h1 className="text-center md:text-4xl text-2xl  text-gray-800">Our Solutions</h1>
                        
                        <div className="space-y-6">
                            <div className="bg-white border border-red-500 rounded-lg p-4 shadow-xl">
                                <div className="flex items-center space-x-4">
                                    <img className="h-12" src={AkiraLogo} alt="ai-chatbots-nashville" />
                                    <h2 className="text-1xl ">Customer Service AI Chatbots</h2>
                                </div>
                                <p className="text-gray-600 mt-2">
                                    We excel in building, maintaining, and analyzing advanced chatbots. These digital assistants not only enhance user interactions but also significantly cut operational costs and elevate customer satisfaction. With the power of in-depth data analytics, our chatbots offer valuable insights, allowing you to understand and cater to your clients' needs more effectively, optimizing engagement and fostering loyalty.
                                </p>
                            </div>
                            <div className="bg-white border border-red-500 rounded-lg p-4 shadow-xl">
                                <div className="flex items-center space-x-4">
                                    <img className="h-12" src={SearchEngine} alt="seo-services-nashville" />
                                    <h2 className="text-1xl ">Search Engine Optimization</h2>
                                </div>
                                <p className="text-gray-600 mt-2">
                                    Our specialized SEO services are designed to boost your online visibility, ensuring your business consistently achieves higher rankings on search engines.
                                </p>
                            </div>
                            <div className="bg-white border border-red-500 rounded-lg p-4 shadow-xl">
                                <div className="flex items-center space-x-4">
                                    <img className="h-12" src={LaptopIcon} alt="custom-website-build-nashville" />
                                    <h2 className="text-1xl ">Custom Website Builds</h2>
                                </div>
                                <p className="text-gray-600 mt-2">
                                    Crafted to mirror your brand, our websites ensure a seamless and engaging user experience tailored to your business needs.
                                </p>
                            </div>
                        </div>

                        <button 
                            onClick={handleViewSolutions} 
                            className="bg-red-500 hover:bg-red-600 text-white  py-2 px-6 rounded-lg transition duration-300 mx-auto">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    export default Engagement;
