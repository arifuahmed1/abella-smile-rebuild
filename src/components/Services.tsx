
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Star, Heart, Zap, Phone } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: "Preventive Care",
      description: "Maintain your oral health with regular check-ups, professional cleanings, fluoride treatments, and protective sealants. Our preventive approach helps you avoid costly procedures.",
      features: ["Regular Check-ups", "Professional Cleanings", "Fluoride Treatments", "Sealants"],
      cta: "Schedule Your Check-up",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Star,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our range of cosmetic services, including professional whitening, porcelain veneers, and smile makeovers customized to enhance your natural beauty.",
      features: ["Teeth Whitening", "Porcelain Veneers", "Smile Makeovers", "Bonding"],
      cta: "Explore Cosmetic Options",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Heart,
      title: "Restorative Dentistry",
      description: "Restore function and appearance with our expert restorative treatments, including fillings, crowns, bridges, and dentures designed to look natural and feel comfortable.",
      features: ["Dental Fillings", "Crowns & Bridges", "Dentures", "Root Canals"],
      cta: "Learn About Restorations",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Zap,
      title: "Dental Implants",
      description: "Replace missing teeth with dental implants, the gold standard for tooth replacement. Our implant solutions provide stable, long-lasting results that look and function like natural teeth.",
      features: ["Single Implants", "Multiple Implants", "All-on-4", "Implant Crowns"],
      cta: "Discover Implant Solutions",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Phone,
      title: "Emergency Care",
      description: "Experiencing dental pain? Our same-day emergency care provides quick relief and effective treatment when you need it most. Available for urgent situations.",
      features: ["Same-Day Appointments", "Pain Relief", "Urgent Repairs", "24/7 Support"],
      cta: "Call Now for Emergency Care",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Heart,
      title: "Family Dentistry",
      description: "Comprehensive dental care for patients of all ages, from children's first visits to senior dental health. We make dental care comfortable and stress-free for the whole family.",
      features: ["Pediatric Care", "Adult Dentistry", "Senior Care", "Family Plans"],
      cta: "Book Family Appointment",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Dental Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From preventive care to advanced restorative treatments, we provide complete dental solutions for your entire family
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className={`w-12 h-12 ${service.color} rounded-lg mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                >
                  {service.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Not Sure Which Treatment You Need?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a comprehensive consultation with Dr. Liang to discuss your dental needs and create a personalized treatment plan.
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
