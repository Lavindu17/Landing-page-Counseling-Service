import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    contactMethod: "email",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        contactMethod: "email",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to take the first step toward better mental health? I'm here
            to help you on your journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Send a Message
            </h3>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                    placeholder="(123) 456-7890"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contactMethod"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone</option>
                    <option value="either">Either</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message / Reason for Contact
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 resize-none"
                    placeholder="Tell me a bit about what brings you here and how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-slate-600 mb-4">
                  I've received your message and will respond within 24 hours.
                </p>
                <p className="text-sm text-slate-500">
                  If this is urgent, please call (123) 456-7890
                </p>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <p className="font-semibold text-slate-800">Office Address</p>
                  <p className="text-slate-600">
                    235/A <br />
                    Wawila Road (70620)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <p className="font-semibold text-slate-800">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                  >
                    (+94) 71 8000 623
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <p className="font-semibold text-slate-800">Email</p>
                  <a
                    href="mailto:sajeevansltas@gmail.com"
                    className="text-slate-600 hover:text-emerald-600 transition-colors duration-200"
                  >
                    sajeevansltas@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-6 w-6 text-emerald-600 mr-4 mt-1" />
                <div>
                  <p className="font-semibold text-slate-800">Office Hours</p>
                  <div className="text-slate-600">
                    <p>Monday - Thursday: 9:00 AM - 7:00 PM</p>
                    <p>Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 3:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h4 className="font-semibold text-amber-800 mb-2">
                Emergency Contact
              </h4>
              <p className="text-amber-700 text-sm">
                If you're experiencing a mental health crisis, please call 1333
                (Courage Compassion Commitment) or go to your nearest emergency
                room. For urgent but non-emergency situations, call my office
                and I'll do my best to accommodate same-day appointments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
