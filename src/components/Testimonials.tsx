
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      treatment: "Cosmetic Dentistry",
      rating: 5,
      text: "Dr. Liang completely transformed my smile! The veneers look so natural, and the entire process was comfortable. The staff is incredibly professional and caring.",
      date: "2 weeks ago"
    },
    {
      name: "Robert Chen",
      treatment: "Dental Implant",
      rating: 5,
      text: "After losing a tooth in an accident, Dr. Liang restored my confidence with a perfect dental implant. You can't even tell it's not my original tooth!",
      date: "1 month ago"
    },
    {
      name: "Lisa Thompson",
      treatment: "Family Dentistry",
      rating: 5,
      text: "We've been bringing our whole family here for 3 years. Dr. Liang is wonderful with our kids, and the office is always clean and welcoming.",
      date: "3 weeks ago"
    },
    {
      name: "Michael Rodriguez",
      treatment: "Emergency Care",
      rating: 5,
      text: "Had a dental emergency on a Saturday and they saw me the same day! Dr. Liang relieved my pain immediately. Excellent emergency care!",
      date: "1 week ago"
    },
    {
      name: "Amanda Wilson",
      treatment: "Preventive Care",
      rating: 5,
      text: "Best dental experience I've ever had. The hygienist is gentle, and Dr. Liang explains everything clearly. My teeth have never been healthier!",
      date: "2 months ago"
    },
    {
      name: "David Kim",
      treatment: "Restorative Dentistry",
      rating: 5,
      text: "Dr. Liang saved my tooth with a root canal that was completely painless. I was amazed at how comfortable the procedure was.",
      date: "3 weeks ago"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Don't just take our word for it - hear from real patients about their experiences at Abbella Dental Care
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-900">4.9/5</p>
              <p className="text-sm text-gray-600">Based on 250+ reviews</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">{testimonial.date}</span>
                </div>
                
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-100" />
                  <p className="text-gray-600 leading-relaxed pl-6">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{testimonial.name}</p>
                      <p className="text-blue-600 text-xs">{testimonial.treatment}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join Our Happy Patients?
            </h3>
            <p className="text-gray-600 mb-6">
              Experience the same exceptional care that our patients rave about. Schedule your appointment today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule Appointment
              </Button>
              <Button size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
                Read More Reviews
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
