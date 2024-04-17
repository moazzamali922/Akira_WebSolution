import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import iconFacebook from "./assets/pictures/Icons/icons_facebook.webp";
import iconLinkedin from "./assets/pictures/Icons/Icons_LinkedIn.webp";
import iconEnvelope from "./assets/pictures/Icons/Icon_Email.webp";

function useVisible(initialVisibility = false) {
  const [isVisible, setIsVisible] = useState(initialVisibility);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(entry.isIntersecting);
        }
      });
    });

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

function Footer() {
  const [footerRef, footerVisible] = useVisible();

  const animationClasses = (isVisible) =>
    `transition-opacity duration-700 ease-in-out ${
      isVisible ? "opacity-100" : "opacity-0"
    }`;

  return (
    <footer
      ref={footerRef}
      className={`bg-white text-gray-700  border-gray-200 mt-10 ${animationClasses(
        footerVisible
      )}`}
      
    >
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start">
        <div>
          <h2 className="  text-gray-900 text-1xl sm:text-1xl md:text-2xl lg:text-2xl sm:truncate">
            Connect with us Further
          </h2>
          <p className="mt-2 text-base text-gray-500">
            Connect with us on LinkedIn, Facebook, or send us an email at
            <a
              href="mailto:connect@akirawebsolutions.com"
              className="text-[#FF0033] ml-1"
            >
              connect@akirawebsolutions.com
            </a>
          </p>
          <div className="flex mt-4 space-x-6">
            <Link
              to="https://www.linkedin.com/company/akira-web-solutions/"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">LinkedIn</span>
              <img
                alt="linkedin-marketing-nashville"
                className="h-6 w-6"
                src={iconLinkedin}
              />
            </Link>
            <Link
              to="https://www.facebook.com/profile.php?id=61550844571239"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Facebook</span>
              <img
                alt="facebook-marketing-nashville"
                className="h-6 w-6"
                src={iconFacebook}
              />
            </Link>
            <Link to="/connect" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Email</span>
              <img
                alt="email-marketing-nashville"
                className="h-6 w-6"
                src={iconEnvelope}
              />
            </Link>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <h3 className="text-gray-900 text-1xl sm:text-1xl md:text-2xl lg:text-2xl sm:truncate">
            Solutions
          </h3>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/solutions"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Customer Service AI Chatbots
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Analytics
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link
                  to="/solutions"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Website Customization
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
