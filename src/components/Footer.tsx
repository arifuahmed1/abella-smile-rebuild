
import React from 'react';
import { Heart, Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Practice Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Abbella Dental Care</h3>
                <p className="text-gray-400 text-sm">Dr. Yuling Liang, DMD</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing exceptional dental care to the North Wales community with modern technology and personalized attention.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">Our Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Dr. Liang</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">Patient Reviews</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Patient Portal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Insurance</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Preventive Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cosmetic Dentistry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Dental Implants</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Emergency Care</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Family Dentistry</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Restorative Care</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <a href="tel:267-217-3328" className="text-gray-400 hover:text-white transition-colors text-sm">
                    (267) 217-3328
                  </a>
                  <p className="text-xs text-gray-500">Call or text anytime</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">217 N Main St</p>
                  <p className="text-gray-400 text-sm">North Wales, PA 19454</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <a href="mailto:info@abbelladental.com" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@abbelladental.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400 text-sm">Mon: 9AM-7PM</p>
                  <p className="text-gray-400 text-sm">Tue: 1PM-7PM</p>
                  <p className="text-gray-400 text-sm">Thu: 10AM-6PM</p>
                  <p className="text-gray-400 text-sm">Fri: 10AM-4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 Abbella Dental Care. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">HIPAA Notice</a>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Serving North Wales, Lansdale, Montgomery County, and the greater Philadelphia area
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
