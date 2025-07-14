import React from 'react';
import { Award, BookOpen, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              About Dr. Sarah Mitchell
            </h2>
            
            <div className="prose prose-lg text-slate-600 mb-8">
              <p className="mb-4">
                With over 15 years of experience in mental health counseling, I am passionate about 
                helping individuals navigate life's challenges and discover their inner strength. 
                My approach combines evidence-based therapeutic techniques with genuine compassion 
                and understanding.
              </p>
              
              <p className="mb-4">
                I believe that everyone has the capacity for growth and healing. My role is to 
                provide a safe, non-judgmental space where you can explore your thoughts and 
                feelings, develop coping strategies, and work toward meaningful change.
              </p>
              
              <p>
                What led me to counseling was my own journey of personal growth and the profound 
                impact that therapeutic support had on my life. I am committed to paying that 
                forward by helping others find their path to wellness.
              </p>
            </div>
            
            {/* Credentials */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">Professional Credentials</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Licensed Professional Counselor</p>
                    <p className="text-slate-600 text-sm">State of California #LPC-12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <BookOpen className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Ph.D. in Clinical Psychology</p>
                    <p className="text-slate-600 text-sm">University of California, Berkeley</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Heart className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">Trauma-Informed Care Certified</p>
                    <p className="text-slate-600 text-sm">National Center for Trauma-Informed Care</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">American Psychological Association</p>
                    <p className="text-slate-600 text-sm">Member since 2008</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-100 to-sky-100 rounded-2xl p-8">
              <img
                src="https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Dr. Sarah Mitchell - Professional Counselor"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-slate-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">15+</div>
                <div className="text-slate-600 text-sm">Years Experience</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-slate-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">500+</div>
                <div className="text-slate-600 text-sm">Clients Helped</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;