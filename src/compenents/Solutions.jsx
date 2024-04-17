import React, { useState, useEffect, useRef } from "react";
import Laptop from "./assets/pictures/webPhoto1.png";
import { useNavigate } from "react-router-dom";
import EmailMarketing from "./assets/pictures/webPhoto2.png";
import CustomWebsite from "./assets/pictures/CustomWebsite2.png";
import SearchEngine from "./assets/pictures/SearchEngine3.png";

function useVisible(initialVisibility = false) {
  const [isVisible, setIsVisible] = useState(initialVisibility);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

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

const Solutions = () => {
  const navigate = useNavigate();
  const [laptopImgRef, laptopImgVisible] = useVisible();
  const [emailDivRef, emailDivVisible] = useVisible();
  const [emailImgRef, emailImgVisible] = useVisible();
  const [seoDivRef, seoDivVisible] = useVisible();
  const [seoImgRef, seoImgVisible] = useVisible();
  const [websiteDivRef, websiteDivVisible] = useVisible();
  const [websiteImgRef, websiteImgVisible] = useVisible();

  const handleViewContact = () => navigate("/connect");

  const animationClasses = (isVisible) =>
    `transition-all duration-1000 ease-in-out transform ${
      isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
    }`;

  return (
    <div className=" py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Laptop and Our Solutions section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center my-12">
          <img
            ref={laptopImgRef}
            className={`rounded-xl ${animationClasses(laptopImgVisible)}`}
            style={{ width: "100%", height: "70vh" }}
            src={Laptop}
            alt="Laptop"
          />
          <div
            ref={laptopImgRef}
            className={`space-y-4 ${animationClasses(laptopImgVisible)}`}
          >
            <h1 className="text-2xl sm:text-1xl lg:text-3xl text-gray-900 ">
              Our Solutions
            </h1>
            <p className="text-lg text-gray-700 text-justify">
              Elevate your business to new heights with our innovative
              solutions. Implement the power of AI chatbots and data analytics
              to automate and refine your customer service, gain deeper
              understanding of your clients and boost customer satisfaction. Our
              custom website builds not only enhance your online presence but
              also fortify your brand's image. With search engine optimized text
              and layout, we ensure you shine brighter on Google. Witness the
              transformation our products can bring. Book a call today and let's
              chart a path to your business's brighter future.
            </p>
          </div>
        </div>

        {/* Customized AI Chatbots section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center my-12">
          <div
            ref={emailDivRef}
            className={`space-y-4 ${animationClasses(emailDivVisible)}`}
          >
            <h1 className="text-2xl sm:text-1xl lg:text-3xl text-gray-900 ">
              Customized AI Chatbots
            </h1>
            <p className="text-lg text-gray-700 text-justify">
              Our AI chatbots, expertly trained for customer service and
              marketing, respond swiftly and accurately to client questions. Opt
              for training based on your data, collaborate with us for tailored
              solutions, or both. With our in-depth data analytics, monitor
              client conversations to enhance satisfaction by better
              understanding your customers. The result? Significant time and
              money savings. Choose Akira Web Solutions for AI-driven
              excellence.
            </p>
            <button
              onClick={handleViewContact}
              className="bg-[#FF0033] rounded-md font-medium py-3 px-6 text-white hover:bg-red-700 transition duration-300"
            >
              Contact Us
            </button>
          </div>
          <img
            ref={emailImgRef}
            className={` rounded-xl ${animationClasses(emailImgVisible)}`}
            src={EmailMarketing}
            style={{ width: "100%", height: "70vh" }}
            alt="Email Marketing"
          />
        </div>

        {/* Search Engine Optimization section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center my-12">
          <img
            ref={seoImgRef}
            className={` rounded-xl ${animationClasses(seoImgVisible)}`}
            src={SearchEngine}
            style={{ width: "100%", height: "60vh" }}
            alt="Search Engine"
          />
          <div
            ref={seoDivRef}
            className={`space-y-4 ${animationClasses(seoDivVisible)}`}
          >
            <h1 className="text-2xl sm:text-1xl lg:text-3xl text-gray-900 ">
              Search Engine Optimization
            </h1>
            <p className="text-lg text-gray-700 text-justify">
              Boost your online visibility through our comprehensive Search
              Engine Optimization (SEO) services. Our experts will fine-tune
              your website, ensuring it ranks higher on search engine results
              pages. Experience increased exposure and attract a wider audience
              with our proven strategies.and watch your visibility soar on the
              internet.
            </p>
            <button
              onClick={handleViewContact}
              className="bg-[#FF0033] rounded-md font-medium py-3 px-6 text-white hover:bg-red-700 transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Custom Website Builds section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center my-12">
          <div
            ref={websiteDivRef}
            className={`space-y-4 ${animationClasses(websiteDivVisible)}`}
          >
            <h1 className="text-2xl sm:text-1xl lg:text-3xl text-gray-900 ">
              Custom Website Builds
            </h1>
            <p className="text-lg text-gray-700 text-justify">
              Acquire a tailor-made website that encapsulates your unique brand
              essence. Our services encompass website design and development. We
              will craft customized features to fulfill your specific needs. In
              today's digital landscape, a compelling landing page is
              indispensable for every company. Let us create an online presence
              that truly reflects your business while incorporating essential
              website features.
            </p>
            <button
              onClick={handleViewContact}
              className="bg-[#FF0033] rounded-md font-medium py-3 px-6 text-white hover:bg-red-700 transition duration-300"
            >
              Contact Us
            </button>
          </div>
          <img
            ref={websiteImgRef}
            className={` rounded-xl ${animationClasses(websiteImgVisible)}`}
            src={CustomWebsite}
            style={{ width: "100%", height: "60vh" }}
            alt="Custom Website"
          />
        </div>
      </div>
    </div>
  );
};

export default Solutions;
