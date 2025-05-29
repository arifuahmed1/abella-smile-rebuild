
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, GraduationCap, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-8">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">
                Meet Your Dentist
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Dr. Yuling Liang
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Dr. Yuling Liang brings extensive training and a gentle approach to every patient interaction at Abbella Dental Care. After graduating with honors from dental school, Dr. Liang has dedicated her career to providing exceptional dental care while continuously advancing her skills through ongoing education.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Her commitment to patient comfort and outstanding results has earned her a reputation as one of North Wales' most trusted dental professionals. Dr. Liang believes in building lasting relationships with her patients through personalized care and clear communication.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">DMD Degree</p>
                  <p className="text-sm text-gray-600">Doctor of Medicine in Dentistry</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">10+ Years</p>
                  <p className="text-sm text-gray-600">Professional Experience</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">1000+ Patients</p>
                  <p className="text-sm text-gray-600">Successfully Treated</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Same Day</p>
                  <p className="text-sm text-gray-600">Emergency Care</p>
                </div>
              </div>
            </div>

            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Schedule with Dr. Liang
            </Button>
          </div>

          {/* Right Content - Doctor Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-blue-200">
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                    <div className="text-center text-blue-700">
                      <div className="w-32 h-32 bg-white rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <svg className="w-16 h-16 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Dr. Yuling Liang</h3>
                      <p className="text-lg mb-4">Doctor of Medicine in Dentistry</p>
                      <Badge className="bg-white text-blue-600">
                        Professional Portrait
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Credential Cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border-l-4 border-blue-600">
              <p className="font-semibold text-gray-900 text-sm">Board Certified</p>
              <p className="text-xs text-gray-600">American Dental Association</p>
            </div>

            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border-l-4 border-green-600">
              <p className="font-semibold text-gray-900 text-sm">Continuing Education</p>
              <p className="text-xs text-gray-600">Latest Techniques & Technology</p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Our Dedicated Team
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Sarah Johnson", role: "Dental Hygienist", experience: "8 years experience" },
              { name: "Maria Rodriguez", role: "Dental Assistant", experience: "5 years experience" },
              { name: "Jennifer Chen", role: "Office Manager", experience: "10 years experience" }
            ].map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-blue-600 text-sm mb-1">{member.role}</p>
                  <p className="text-gray-500 text-xs">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
