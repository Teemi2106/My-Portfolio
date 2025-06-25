import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../CSS/Contact.css"; // Import your CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

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

  const closeAlert = () => {
    setAlert({ show: false, type: "", message: "" });
  };

  return (
    <section
      id="mainContact"
      className="py-10 px-4 max-w-6xl mx-auto hacker-contact"
    >
      <h2 className="text-4xl font-bold text-center mb-6 text-cyan-400 glitch">
        Contact Me
      </h2>
      {/* Animated Alert */}
      {alert.show && (
        <div
          className={`flex items-center p-4 mb-6 rounded-md shadow-md animate-fade-in border-2 ${
            alert.type === "success"
              ? "bg-green-900 text-cyan-400 border-cyan-400"
              : "bg-red-900 text-red-400 border-red-400"
          }`}
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {alert.type === "success" ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            )}
          </svg>
          <span className="flex-1">{alert.message}</span>
          <button
            onClick={closeAlert}
            className="ml-4 text-current hover:text-gray-400 focus:outline-none"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
      <div className="contact-container grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Contact Details */}
        <div className="contact-details">
          <div className="command-line">$ connect@terminal :</div>
          <hr className="border-gray-100 my-4" />
          <div className="contact-item">
            <span className="icon">📧</span>
            <span>Email: </span>
            <span>gbengatimi166@gmail.com</span>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <span>Phone: </span>
            <span>+234 7043464244</span>
          </div>

          <div className="contact-item">
            <span className="icon">✔️</span>
            <span>Available for work</span>
          </div>
          <div className="terminal-commands">
            <div className="command-line">$ contact --status</div>
            <span>Available for freelance and full-time opportunities</span>
          </div>
          <div className="terminal-commands">
            <div className="command-line">$ contact --location</div>
            <span>Nigeria</span>
          </div>
        </div>
        {/* Right Column - Contact Form */}
        <div className="contact-form">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">
            Send Message
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label
                htmlFor="name"
                className="block text-sm font-mono text-cyan-400 required"
              >
                Name <span className="required-text">&lt;required&gt;</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="mt-1 block w-full bg-gray-900 border border-cyan-400 rounded-md p-3 text-white focus:ring-cyan-400 focus:border-cyan-400"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="email"
                className="block text-sm font-mono text-cyan-400 required"
              >
                Email <span className="required-text">&lt;required&gt;</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="mt-1 block w-full bg-gray-900 border border-cyan-400 rounded-md p-3 text-white focus:ring-cyan-400 focus:border-cyan-400"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="number"
                className="block text-sm font-mono text-cyan-400 required"
              >
                Email <span className="required-text">&lt;required&gt;</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="mt-1 block w-full bg-gray-900 border border-cyan-400 rounded-md p-3 text-white focus:ring-cyan-400 focus:border-cyan-400"
              />
            </div>
            <div className="form-group">
              <label
                htmlFor="message"
                className="block text-sm font-mono text-cyan-400 required"
              >
                Message <span className="required-text">&lt;required&gt;</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
                className="mt-1 block w-full bg-gray-900 border border-cyan-400 rounded-md p-3 text-white focus:ring-cyan-400 focus:border-cyan-400"
              ></textarea>
            </div>
            <div className="relative mt-4">
              <button
                style={{ fontSize: "16px", border: "2px dashed green" }}
                type="submit"
                id="submitMsg"
                disabled={isLoading}
                className={`inline-flex items-center px-6 py-3 bg-cyan-400 text-gray-900 rounded-md hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 glitch font-size-5 text-sm ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-green-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 0C4 0 5.373 0 12 5.373 0 4 0 4 0 12h4zm2 5.291A7.962 0 014 12H0 0 3 7.938l3-2.647z"
                      />
                    </svg>
                    Transmitting...
                  </span>
                ) : (
                  <>
                    Send Transmission
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="ml-2 w-5 h-5"
                    >
                      <path
                        clipRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75s4.365 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 0-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1.06l3-3z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
