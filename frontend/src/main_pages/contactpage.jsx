import React from "react";
import MainNavbar from "../components/main_navbar.jsx";
import Footer from "../components/footer.jsx";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }

    if (formData.phone && !/^\+?[0-9\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 20) {
      newErrors.message = "Message should be at least 20 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus({
        submitted: true,
        success: true,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        submitted: true,
        success: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetSubmitStatus = () => {
    setSubmitStatus({
      submitted: false,
      success: false,
    });
  };
  return (
    <>
      <MainNavbar />
      <section id="contact" className="py-5 px-[5%] md:px-[10%] bg-gray-50">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl text-gray-800 mb-3 font-playfair font-bold">
            Contact Us
          </h2>
          <div className="h-[3px] w-20 bg-teal-600 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
            We'd love to hear from you! Whether you have a question about our
            rooms, amenities, or anything else, our team is ready to assist you.
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <div className="lg:w-1/3">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="text-2xl font-playfair text-teal-600 mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-2xl text-teal-600 mr-4">📍</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Address</h4>
                    <p className="text-gray-600">
                      Beachfront Avenue, Puerto Princesa, Palawan, Philippines
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl text-teal-600 mr-4">📞</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+63 912 345 6789</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl text-teal-600 mr-4">✉️</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@elpiseinn.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="text-2xl text-teal-600 mr-4">⏰</div>
                  <div>
                    <h4 className="font-bold text-gray-800">Hours</h4>
                    <p className="text-gray-600">
                      24/7 - Our front desk is always open
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-bold text-gray-800 mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-teal-600 hover:text-teal-800 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-teal-600 hover:text-teal-800 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-teal-600 hover:text-teal-800 transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            {submitStatus.submitted && submitStatus.success ? (
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-center py-10">
                  <div className="text-7xl mb-4 text-teal-600">✓</div>
                  <h3 className="text-2xl font-playfair text-gray-800 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Your message has been successfully sent. We will contact you
                    very soon!
                  </p>
                  <button
                    onClick={resetSubmitStatus}
                    className="px-6 py-3 bg-teal-600 text-white rounded font-semibold transition-all duration-300 hover:bg-teal-700"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : submitStatus.submitted && !submitStatus.success ? (
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="text-center py-10">
                  <div className="text-7xl mb-4 text-red-500">✕</div>
                  <h3 className="text-2xl font-playfair text-gray-800 mb-4">
                    Oops!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Something went wrong while sending your message. Please try
                    again later or contact us directly.
                  </p>
                  <button
                    onClick={resetSubmitStatus}
                    className="px-6 py-3 bg-teal-600 text-white rounded font-semibold transition-all duration-300 hover:bg-teal-700"
                  >
                    Try Again
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <h3 className="text-2xl font-playfair text-teal-600 mb-6">
                  Send Us a Message
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="+1 (123) 456-7890"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                        errors.subject ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Room Inquiry"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message Field */}
                <div className="mt-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Write your message here..."
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-teal-600 text-white rounded font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
