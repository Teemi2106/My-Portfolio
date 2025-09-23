import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../CSS/Contact.css"; // Import your CSS for styling
import { AnimatedText } from "../Pages/Work";
import { Loader, Send } from "lucide-react";

// Phone input
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [setAlert] = useState({ show: false, type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setAlert({ show: false, type: "", message: "" });

    const serviceID = "service_h6tqv1n";
    const templateID = "template_is00sxn";
    const userID = "YOye_ljeaetLACZMq";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          ...formData,
          time: new Date().toLocaleString(),
        },
        userID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsLoading(false);
        setAlert({
          show: true,
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "", number: "" }); // Reset form fields
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setIsLoading(false);
        setAlert({
          show: true,
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      });
  };

  return (
    <section
      id="mainContact"
      className="py-10 px-4 max-w-6xl mx-auto hacker-contact"
    >
      <AnimatedText delay={400}>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
          <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone Number with country selector */}
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Phone Number
                </label>
                <PhoneInput
                  country={"us"} // Default country
                  value={formData.number}
                  onChange={(phone) =>
                    setFormData({ ...formData, number: phone })
                  }
                  inputClass="!w-full !px-4 !py-3 !bg-gray-800/50 !border !border-gray-700 !rounded-xl !text-white placeholder-gray-400 focus:!border-purple-500 focus:!ring-1 focus:!ring-purple-500 transition-all duration-300"
                  buttonClass="!bg-gray-800/50 !border-gray-700"
                  dropdownClass="!bg-gray-900 !text-white"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isLoading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <p className="text-xs text-gray-500 text-center">
                Note: To enable actual email sending, uncomment the EmailJS code
                in the component
              </p>
            </div>
          </div>
        </div>
      </AnimatedText>
    </section>
  );
};

export default Contact;
