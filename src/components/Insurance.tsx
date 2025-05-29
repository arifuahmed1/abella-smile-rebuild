
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, CreditCard, Heart, CheckCircle } from 'lucide-react';

const Insurance = () => {
  const insuranceCompanies = [
    "Delta Dental", "Cigna", "Aetna", "Blue Cross Blue Shield", 
    "MetLife", "Guardian", "Humana", "United Healthcare"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Most Insurance Plans Accepted",
      description: "We work with most major dental insurance providers to maximize your benefits"
    },
    {
      icon: CreditCard,
      title: "Flexible Payment Options",
      description: "Multiple payment methods including financing options for larger treatments"
    },
    {
      icon: Heart,
      title: "Discount Plans Available",
      description: "Special discount programs for uninsured patients and families"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Making Quality Dental Care Affordable
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Abbella Dental Care, we believe everyone deserves access to quality dental treatment. We offer transparent pricing and multiple payment options.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Insurance Plans */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Insurance Plans Accepted
                </h3>
                <p className="text-gray-600">
                  We accept most major dental insurance plans and will help you maximize your benefits
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {insuranceCompanies.map((company, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{company}</span>
                  </div>
                ))}
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                Verify Your Insurance
              </Button>
            </CardContent>
          </Card>

          {/* Payment Options */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Payment Options
                </h3>
                <p className="text-gray-600">
                  Flexible payment solutions to fit your budget and treatment needs
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cash & Credit Cards</h4>
                    <p className="text-sm text-gray-600">Visa, MasterCard, American Express, Discover</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Financing Available</h4>
                    <p className="text-sm text-gray-600">CareCredit and other financing options with 0% interest plans</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Payment Plans</h4>
                    <p className="text-sm text-gray-600">Custom payment arrangements for extensive treatments</p>
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50">
                Learn About Financing
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special Offers */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Special Offer for New Patients
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Comprehensive exam, digital X-rays, and professional cleaning for new patients. Regular price $300, now only $99!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Badge className="bg-orange-500 text-white text-lg px-4 py-2">
              Save $201
            </Badge>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Claim This Offer
            </Button>
          </div>
          <p className="text-xs text-blue-200 mt-4">
            *Offer valid for new patients only. Cannot be combined with insurance benefits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Insurance;
