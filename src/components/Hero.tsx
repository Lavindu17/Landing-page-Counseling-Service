import React from "react";
import { Phone, Calendar, Sparkles, Leaf } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 overflow-hidden"
    >
      {/* Modern Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-300/20 to-teal-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-teal-300/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-200/15 to-teal-300/15 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Subtle leaf pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2310b981%22 fill-opacity=%220.08%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221.5%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>

        {/* Floating leaves */}
        <div className="absolute top-32 left-1/4 w-4 h-4 text-emerald-400/30 animate-bounce">
          <Leaf className="w-full h-full" />
        </div>
        <div className="absolute bottom-32 right-1/4 w-6 h-6 text-teal-400/30 animate-bounce delay-700">
          <Leaf className="w-full h-full" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="text-center">
          {/* Modern Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-emerald-200/50 text-emerald-700 text-sm font-medium mb-8 shadow-lg">
            <Sparkles className="h-4 w-4 mr-2" />
            Professional Mental Health Support
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 leading-tight">
            Find Your Path to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 block">
              Mental Wellness
            </span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
            Professional, compassionate counseling services to help you overcome
            challenges, build resilience, and create lasting positive change in
            your life.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="group relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Calendar className="h-5 w-5 mr-2 relative z-10" />
              <span className="relative z-10">Schedule Free Consultation</span>
            </button>

            <a
              href="tel:+94718000623"
              className="group relative bg-white/80 backdrop-blur-sm text-emerald-700 px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center border border-emerald-200/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              <Phone className="h-5 w-5 mr-2 relative z-10" />
              <span className="relative z-10">+94 71 8000 623</span>
            </a>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-white/30 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/40">
              <img
                src="https://wallpaperaccess.com/full/970875.jpg"
                alt="Professional counselor in a calming therapy office"
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent"></div>

              {/* Floating elements */}
              <div className="absolute top-6 left-6 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                <Leaf className="h-8 w-8 text-emerald-200" />
              </div>

              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2 border border-white/40">
                <div className="flex items-center text-emerald-700">
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span className="text-sm font-medium">Healing & Growth</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full opacity-70 animate-pulse delay-700"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-emerald-300 to-teal-300 rounded-full opacity-50 animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
