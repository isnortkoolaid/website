import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import Header from "@/components/ui/header";
import HeroSection from "@/components/ui/HeroSection";
import { LazyGallerySection, LazyVideoSection, LazyProjectsSection } from "@/components/ui/LazySection";
import FilloutEmbed from "@/components/ui/FilloutEmbed";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <main id="main">
      <Header />
      <HeroSection />

      {/* About Section - Server rendered for SEO */}
      <section id="about" className="scroll-mt-24 py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-1/2 w-1/2 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            About Our Team
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <Card className="bg-gray-900/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 overflow-hidden backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 p-1">
                <CardTitle className="text-xl font-semibold text-white bg-gray-900/80 p-4 rounded-t-lg">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-300">We&apos;re dedicated to inspiring the next generation of STEM students in Howard County through our participation in Competitive Robotics.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 overflow-hidden backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 p-1">
                <CardTitle className="text-xl font-semibold text-white bg-gray-900/80 p-4 rounded-t-lg">Our Achievements</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">2025-2026 Season (DECODE)</h4>
                    <ul className="list-disc pl-5 text-gray-300 space-y-1">
                      <li>Inspire Award - 3rd Place (Moorefield, WV Qualifier I)</li>
                      <li>Inspire Award - 2nd Place (Union Bridge, MD Qualifier III)</li>
                      <li>Advanced to Chesapeake Regional Competition</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">2024-2025 Season (INTO THE DEEP)</h4>
                    <ul className="list-disc pl-5 text-gray-300 space-y-1">
                      <li>Innovate Award - 2nd Place</li>
                      <li>Alliance Captain at Qualifier</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Lazy-loaded sections */}
      <LazyGallerySection />
      <LazyVideoSection />
      <LazyProjectsSection />

      {/* Interested Section */}
      <section id="interested" className="scroll-mt-24 py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-4 text-center text-white">
            Join the Team
          </h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Curious about what we do? Fill out the interest form below and we&apos;ll reach out with more details.
          </p>
          <div className="max-w-3xl mx-auto">
            <FilloutEmbed />
          </div>
        </div>
      </section>

      {/* Contact Section - Server rendered */}
      <section id="contact" className="scroll-mt-24 py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 blur-3xl"></div>
        </div>
        <div className="container mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-white">
            Other Inquiries?
          </h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto">Whether you&apos;re interested in sponsoring our team, partnering with us, or have any other questions, we&apos;d love to hear from you!</p>
          <Button size="lg" asChild className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full px-8 py-3 font-medium group button-gradient">
            <a href="mailto:contact@ingenuity.team" rel="noopener noreferrer">
              Contact Us
              <ChevronRight aria-hidden="true" focusable="false" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900/50 text-gray-400 py-6 border-t border-gray-800 backdrop-blur-md">
        <div className="container mx-auto text-center">
          <p>Made with &lt;3 by Team Ingenuity <br /> &copy; {new Date().getFullYear()}, all rights reserved</p>
        </div>
      </footer>
    </div>
  );
}