import React from "react";
import { Award, BookOpen, Heart, Users, Sparkles } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-200/10 to-emerald-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                About Sajeewan Priyantha
              </h2>
              <div className="flex items-center gap-2 text-slate-600">
                <Sparkles className="h-5 w-5 text-emerald-500" />
                <span className="font-medium">Professional Counselor</span>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 mb-8">
              <div className="prose prose-lg text-slate-600">
                <p className="mb-4">
                  As a newly licensed professional counselor, I bring fresh
                  energy, contemporary training, and a deep commitment to
                  helping individuals navigate life's challenges. My recent
                  graduate education from ICBT provided me with the latest
                  evidence-based therapeutic techniques and a strong foundation
                  in trauma-informed care.
                </p>

                <p className="mb-4">
                  I believe that everyone deserves access to quality mental
                  health support, and I'm passionate about creating a safe,
                  non-judgmental space where clients can explore their thoughts
                  and feelings. My approach combines proven therapeutic methods
                  with genuine empathy and understanding, helping individuals
                  develop coping strategies and work toward meaningful change.
                </p>

                <p>
                  What drives my work is the opportunity to be part of someone's
                  healing journey from the very beginning of my career. I'm
                  committed to ongoing professional development and staying
                  current with the latest research and best practices in mental
                  health treatment.
                </p>
              </div>
            </div>

            {/* Credentials */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
              <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-8 h-8 rounded-full flex items-center justify-center mr-3">
                  <Award className="h-4 w-4 text-white" />
                </div>
                Professional Credentials
              </h3>
              <div className="grid grid-cols-1 gap-6 w-full">
                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-emerald-400 to-teal-400 p-2 rounded-xl mr-4 group-hover:shadow-lg transition-all duration-300">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div className="w-full">
                    <p className="font-medium text-slate-800">
                      Licensed Professional Counselor
                    </p>
                    <p className="text-slate-600 text-sm">
                      Sri Lanka National Institute of Professional Counselors
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-teal-400 to-cyan-400 p-2 rounded-xl mr-4 group-hover:shadow-lg transition-all duration-300">
                    <Heart className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      Trauma-Informed Care Certified
                    </p>
                    <p className="text-slate-600 text-sm">
                      National Center for Trauma-Informed Care
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-cyan-400 to-blue-400 p-2 rounded-xl mr-4 group-hover:shadow-lg transition-all duration-300">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      Group Therapy Specialist
                    </p>
                    <p className="text-slate-600 text-sm">
                      American Group Psychotherapy Association
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-gradient-to-r from-blue-400 to-indigo-400 p-2 rounded-xl mr-4 group-hover:shadow-lg transition-all duration-300">
                    <BookOpen className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">
                      Continuing Education
                    </p>
                    <p className="text-slate-600 text-sm">
                      Regular training in latest therapeutic techniques
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-emerald-100 to-sky-100 rounded-2xl p-8">
              <img
                src="https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/490423511_2671882433020695_5814158748285136557_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeGb7skl8s03r7FHyys63-Y65HMtGiF0E5jkcy0aIXQTmOEamt92D_b6prAAu2HiXfTorDVqqHqDH3lDKw0q9lSb&_nc_ohc=l7uzQpqhe78Q7kNvwHY_4pP&_nc_oc=AdlTF8ZRs67CsItqxwhAY6Y3wk0UxnbEPdOEoE8JKGzfp1ayjxyiz9jsF9V9JfNSH-0ZDOnhzqh8qD0uhRbU-qKy&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=vAe_8QOC9qD0ZeAOtABZFA&oh=00_AfRe01o81mKCnk_64IA2JCj06BQ5JvTyC4D4_ExS_js3hA&oe=687B2FB5"
                alt="Sajeewan Priyantha - Professional Counselor"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">Fresh</div>
                <div className="text-slate-600 text-sm">Perspective</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 border border-white/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">100%</div>
                <div className="text-slate-600 text-sm">Dedicated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
