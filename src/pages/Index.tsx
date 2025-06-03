
import React from 'react';
import { Phone, MapPin, Clock, Star, Shield, Heart, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Insurance from '@/components/Insurance';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
const Index = () => {
  const handleSmoothScroll = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const handleScheduleAppointment = () => {
    // Scroll to contact section for appointment scheduling
    handleSmoothScroll('contact');
  };
  const handleEmergencyCall = () => {
    // Initiate phone call for emergency care
    window.open('tel:267-217-3328', '_self');
  };
  return <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img alt="Abbella Dental Care Logo" className="h-12 w-auto" src="/lovable-uploads/b30c4365-1bbe-495b-90e1-c71a31115905.png" />
            </div>

            {/* Desktop Navigation & Contact */}
            <div className="hidden lg:flex items-center justify-between w-full max-w-4xl mx-auto">
              {/* Spacer for logo */}
              <div className="w-32"></div>
              
              {/* Centered Navigation */}
              <nav className="flex items-center space-x-6">
                <button onClick={() => handleSmoothScroll('services')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                  Services
                </button>
                <button onClick={() => handleSmoothScroll('about')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                  About
                </button>
                <button onClick={() => handleSmoothScroll('testimonials')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                  Reviews
                </button>
                <button onClick={() => handleSmoothScroll('contact')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
                  Contact
                </button>
              </nav>
              
              {/* Contact Info */}
              <div className="flex items-center space-x-4">
                <a href="tel:267-217-3328" className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="font-semibold">(267) 217-3328</span>
                </a>
                <Button onClick={handleScheduleAppointment} className="bg-orange-500 hover:bg-orange-600 text-white">
                  Schedule Appointment
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button variant="outline" size="sm" onClick={handleEmergencyCall}>
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Patients Choose Abbella Dental Care
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the difference that expert care and modern technology make in your dental health journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Comprehensive Care</h3>
                <p className="text-gray-600 text-sm">
                  Complete dental care for patients of all ages in one convenient location
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Advanced Technology</h3>
                <p className="text-gray-600 text-sm">
                  State-of-the-art digital facility with the latest dental technology
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Affordable Options</h3>
                <p className="text-gray-600 text-sm">
                  Accept most insurance plans with discount programs for uninsured patients
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Convenient Scheduling</h3>
                <p className="text-gray-600 text-sm">
                  Extended hours and same-day emergency appointments available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* About Section */}
      <About />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Insurance Section */}
      <Insurance />

      {/* Location & Hours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visit Our North Wales Dental Office
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conveniently located with ample parking, serving patients throughout Montgomery County and the Philadelphia area
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-6">
                <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-2" />
                    <p className="text-blue-700 font-medium">Interactive Map</p>
                    <p className="text-blue-600 text-sm">217 N Main St, North Wales, PA 19454</p>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </Button>
              </CardContent>
            </Card>

            {/* Hours & Contact */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-blue-600" />
                    Office Hours
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday</span>
                      <span className="font-medium">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tuesday</span>
                      <span className="font-medium">1:00 PM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Wednesday</span>
                      <span className="font-medium text-red-600">Closed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Thursday</span>
                      <span className="font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Friday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">By Appointment</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium text-red-600">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-red-900 mb-2">
                    Dental Emergency?
                  </h3>
                  <p className="text-red-700 mb-4">
                    We provide same-day emergency care for urgent dental situations.
                  </p>
                  <Button onClick={handleEmergencyCall} className="w-full bg-red-600 hover:bg-red-700">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now: (267) 217-3328
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>;
};
export default Index;
