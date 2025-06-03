import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';

const Hero = () => {
  const handleSmoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleScheduleAppointment = () => {
    handleSmoothScroll('contact');
  };

  const handleEmergencyCall = () => {
    window.open('tel:267-217-3328', '_self');
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* <div className="absolute inset-0 bg-grid-pattern opacity-5"></div> */}
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Smile Deserves{' '}
                <span className="text-blue-600">Expert Care</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience comprehensive dental care for your entire family in our state-of-the-art North Wales facility. Quality dentistry with a personal touch.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white px-8"
                onClick={handleScheduleAppointment}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Your Appointment
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-red-500 text-red-600 hover:bg-red-50"
                onClick={handleEmergencyCall}
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency Dental Care
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-2">Trusted by North Wales families</p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600">4.9/5 from 250+ reviews</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl flex items-center justify-center">
                <div className="text-center text-blue-700">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <p className="text-lg font-semibold">Dr. Yuling Liang, DMD</p>
                  <p className="text-sm">Professional dental photography</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-white font-bold text-sm">NEW</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Available Today</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
