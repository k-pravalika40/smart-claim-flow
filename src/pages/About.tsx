
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Shield, 
  Brain, 
  Users, 
  Target, 
  ArrowLeft,
  CheckCircle 
} from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="insurance-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About ClaimAI
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Transforming the insurance industry through artificial intelligence and automation
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We envision a future where insurance claims are processed instantly, accurately, and transparently. 
                By leveraging cutting-edge artificial intelligence, we're eliminating the frustration and delays 
                that have plagued the insurance industry for decades.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>The Problem</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Traditional insurance claim processing is slow, manual, and often frustrating for customers. 
                    Claims can take weeks or months to resolve, with multiple back-and-forth communications 
                    and unclear status updates.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Our Solution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    ClaimAI automates the entire claim lifecycle using advanced machine learning algorithms. 
                    From damage assessment to fraud detection and settlement calculation, our AI handles 
                    it all with unprecedented speed and accuracy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Matters Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why AI Automation Matters
              </h2>
              <p className="text-xl text-gray-600">
                The importance of transforming insurance claims through artificial intelligence
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Speed and Efficiency</h3>
                  <p className="text-gray-600">
                    AI can process claims 24/7 without breaks, analyzing thousands of claims simultaneously. 
                    What once took weeks can now be completed in minutes, dramatically improving customer satisfaction.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Accuracy and Consistency</h3>
                  <p className="text-gray-600">
                    Machine learning models eliminate human error and bias, ensuring consistent evaluation 
                    criteria across all claims. This leads to fairer outcomes and reduced disputes.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fraud Prevention</h3>
                  <p className="text-gray-600">
                    Advanced pattern recognition and anomaly detection algorithms can identify potentially 
                    fraudulent claims with much higher accuracy than traditional methods, protecting both 
                    insurers and honest policyholders.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Reduction</h3>
                  <p className="text-gray-600">
                    Automation significantly reduces operational costs, allowing insurance companies to 
                    offer better rates to customers while maintaining profitability and improving service quality.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Transparency and Trust</h3>
                  <p className="text-gray-600">
                    AI provides clear, data-driven explanations for claim decisions, building trust through 
                    transparency and giving customers insight into how their claims are being processed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to making insurance claims processing faster, fairer, and more transparent 
              for everyone. By combining cutting-edge AI technology with deep insurance industry expertise, 
              we're building the future of claims management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Security First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We prioritize the security and privacy of customer data with enterprise-grade 
                  encryption and compliance standards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Continuous research and development in AI and machine learning to stay at the 
                  forefront of claims automation technology.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Customer Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every feature we build is designed with the customer experience in mind, 
                  ensuring claims processing is simple and stress-free.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 insurance-gradient text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Revolution
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience the future of insurance claims today and see why thousands trust ClaimAI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link to="/claim/submit">Submit Your First Claim</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
