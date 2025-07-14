import React from 'react';
import { Brain, Heart, Users, Zap, Shield, Compass } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Brain className="h-8 w-8 text-emerald-600" />,
      title: "Anxiety & Depression",
      description: "Evidence-based treatment for anxiety disorders, depression, and mood-related challenges using CBT and mindfulness techniques.",
      approach: "Cognitive Behavioral Therapy (CBT)",
      audience: "Adults experiencing anxiety, depression, or mood disorders"
    },
    {
      icon: <Heart className="h-8 w-8 text-emerald-600" />,
      title: "Trauma & PTSD",
      description: "Specialized trauma-informed therapy to help process difficult experiences and develop healthy coping mechanisms.",
      approach: "EMDR and Trauma-Focused CBT",
      audience: "Individuals with trauma history or PTSD symptoms"
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "Relationship Counseling",
      description: "Support for couples and families to improve communication, resolve conflicts, and strengthen emotional bonds.",
      approach: "Gottman Method and EFT",
      audience: "Couples and families seeking relationship improvement"
    },
    {
      icon: <Zap className="h-8 w-8 text-emerald-600" />,
      title: "Stress Management",
      description: "Learn practical strategies to manage work stress, life transitions, and overwhelming responsibilities effectively.",
      approach: "Mindfulness-Based Stress Reduction",
      audience: "Professionals and individuals facing high stress levels"
    },
    {
      icon: <Shield className="h-8 w-8 text-emerald-600" />,
      title: "Addiction Recovery",
      description: "Comprehensive support for substance abuse recovery, including relapse prevention and healthy lifestyle development.",
      approach: "Motivational Interviewing and 12-Step Integration",
      audience: "Individuals in recovery or seeking sobriety"
    },
    {
      icon: <Compass className="h-8 w-8 text-emerald-600" />,
      title: "Life Transitions",
      description: "Navigate major life changes such as career shifts, loss, divorce, or other significant transitions with confidence.",
      approach: "Solution-Focused Brief Therapy",
      audience: "Adults experiencing major life changes"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Counseling Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive mental health support tailored to your unique needs and goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100"
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-slate-800 ml-3">
                  {service.title}
                </h3>
              </div>
              
              <p className="text-slate-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <div className="space-y-2">
                <div className="bg-emerald-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-emerald-800">
                    Approach: {service.approach}
                  </p>
                </div>
                
                <div className="bg-sky-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-sky-800">
                    For: {service.audience}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <button
            onClick={scrollToContact}
            className="bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Learn More About My Approach
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;