import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { validateEmail } from "../utils/validators";
import { Link } from "react-router-dom";

function useVisible(initialVisibility = false) {
  const [isVisible, setIsVisible] = useState(initialVisibility);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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

const fields = ["name", "email", "message"];

const NewsLetter = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    fields.forEach((field) => {
      if (!formData[field].trim()) {
        newErrors[field] = "Input field is required.";
      } else if (field === "email" && !validateEmail(formData[field])) {
        newErrors[field] = "Invalid email address.";
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const emailData = {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        };
        try {
          const response = await axios.post(
            "https://ryans-portfolio.herokuapp.com/contact",
            emailData
          );
          alert(response.data.message);
        } catch (error) {
          if (error.response) {
            console.error("Response Error:", error.response.data);
          } else if (error.request) {
            console.error("Request Error:", error.request);
          } else {
            console.error("Error:", error.message);
          }
          alert("Failed to send email.");
        }
      } catch (error) {
        console.error(error);
        alert("Failed to send email.");
      }
    }
  };

  const [newsletterRef, newsletterVisible] = useVisible();

  const animationClasses = (isVisible) =>
    `transform transition-all duration-1000 ease-in-out ${
      isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`;

  return (
    <div
    ref={newsletterRef}
    className={`w-full py-2 sm:py-3 md:py-4 lg:py-6 xl:py-12 px-4 text-white mt-20 ${animationClasses(newsletterVisible)}`}
    style={{
      background: "linear-gradient(90deg, #351342 0%, #B51459 50%, #C00618 100%)"
    }}
  >
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-1xl sm:text-1xl md:text-2xl lg:text-3xl  mb-6">
            🤖 Want to enhance efficiency and elevate customer satisfaction with
            a chatbot?
            <br />
            <br />
            🖥️ Need a website or application developed that boosts your online
            presence?
          </h1>
          <p className="mb-8">
            See how we can improve your business and save you time!
          </p>
        </div>
        <div className="bg-white text-gray-800 rounded-lg shadow-lg p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <h1 className="text-xl  text-center mb-4">Contact</h1>
            {fields.map((field) => (
              <div key={field} className="flex flex-col">
                <label htmlFor={field} className="mb-2 font-medium">
                  {field[0].toUpperCase() + field.slice(1)}:
                </label>
                {field !== "message" ? (
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    placeholder={field[0].toUpperCase() + field.slice(1)}
                    className="p-3 w-full rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    value={formData[field]}
                    onChange={handleInputChange}
                    required
                  />
                ) : (
                  <textarea
                    placeholder="Message"
                    className="p-3 min-h-[100px] w-full rounded-md bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                )}
                {errors[field] && (
                  <span className="text-xs text-red-600 mt-1">
                    {errors[field]}
                  </span>
                )}
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 rounded-md  py-3 text-white transition duration-300 ease-in-out"
            >
              Send Email
            </button>
          </form>
        </div>
        <p className="text-center text-sm md:text-base mt-6">
          Learn more about our established techniques on our{" "}
          <Link to="/solutions" className="text-red-500 hover:text-red-400">
            Solutions
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
