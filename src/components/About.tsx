import React from "react";
import { Award, BookOpen, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">
              About Sajeewan Priyantha
            </h2>

            <div className="prose prose-lg text-slate-600 mb-8">
              <p className="mb-4">
                As a newly licensed professional counselor, I bring fresh
                energy, contemporary training, and a deep commitment to helping
                individuals navigate life's challenges. My recent graduate
                education from ICBT provided me with the latest evidence-based
                therapeutic techniques and a strong foundation in
                trauma-informed care
              </p>

              <p className="mb-4">
                I believe that everyone deserves access to quality mental health
                support, and I'm passionate about creating a safe,
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
                health treatment."
              </p>
            </div>

            {/* Credentials */}
            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Professional Credentials
              </h3>
              <div className="grid grid-cols-1 gap-4 w-full">
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                  <div className="w-full">
                    <p className="font-medium text-slate-800">
                      Licensed Professional Counselor
                    </p>
                    <p className="text-slate-600 text-sm">
                      Sri Lanka National Institute of Professional Counselors
                    </p>
                  </div>
                </div>
                {/*}
                <div className="flex items-start">
                  <BookOpen className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">
                      Ph.D. in Clinical Psychology
                    </p>
                    <p className="text-slate-600 text-sm">
                      University of California, Berkeley
                    </p>
                  </div>
                </div>*

                <div className="flex items-start">
                  <Heart className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">
                      Trauma-Informed Care Certified
                    </p>
                    <p className="text-slate-600 text-sm">
                      National Center for Trauma-Informed Care
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users className="h-5 w-5 text-emerald-600 mr-3 mt-1" />
                  <div>
                    <p className="font-medium text-slate-800">
                      American Psychological Association
                    </p>
                    <p className="text-slate-600 text-sm">Member since 2008</p>
                  </div>
                </div>*/}
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
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-slate-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">Fresh</div>
                <div className="text-slate-600 text-sm">Perspective</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6 border border-slate-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">
                  Certified
                </div>
                <div className="text-slate-600 text-sm">Counselour</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
