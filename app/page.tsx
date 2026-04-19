// -- UI primitives (shadcn/ui Card components) --
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// -- shadcn/ui Button wrapper --
import { Button } from "@/components/ui/button";
// -- Decorative chevron icon from lucide-react --
import { ChevronRight } from 'lucide-react';
// -- Site-wide navigation header --
import Header from "@/components/ui/header";
// -- Lazy-loaded client components (ssr:false). Background needs WebGL,
//    Gallery/Video/Projects are heavy and code-split for fast initial load. --
import { LazyBackground, LazyGallerySection, LazyVideoSection, LazyProjectsSection } from "@/components/ui/LazySection";
// -- Third-party embedded form for prospective member sign-ups --
import FilloutEmbed from "@/components/ui/FilloutEmbed";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {/* <main id="main"> is the skip-link target defined in layout.tsx.
          Keyboard users who activate "Skip to content" land here. */}
      <main id="main">
      <Header />

      {/* Hero section -- full-viewport intro with 3D canvas background.
          The canvas fills the section via an absolute inset-0 layer (z-0)
          while text sits above it (z-20). overflow-hidden clips the canvas. */}
      <section
        id="hero"
        aria-label="Hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* 3D canvas -- absolutely fills the hero section */}
        <div className="absolute inset-0 z-0">
          <LazyBackground />
        </div>

        {/* Dark gradient under the header for clear visual separation */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black via-black/75 to-transparent z-10" />
        {/* Subtle full-section dark tint for text legibility */}
        <div className="pointer-events-none absolute inset-0 bg-black/50 z-10" />

        {/* Hero text -- z-20 sits above both overlay layers */}
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold mb-8 leading-[0.9]">
            We are{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Ingenuity
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-10 leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Building the Future of STEM in Howard County
          </p>
          {/* Learn More scrolls to #about. asChild lets <a> receive Button styles. */}
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full px-10 py-4 text-lg font-medium group button-gradient focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            <a href="#about">
              Learn More
              <ChevronRight
                aria-hidden="true"
                focusable="false"
                className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </Button>
        </div>
      </section>

      {/* About section -- server-rendered for SEO. Contains the team's
          mission statement and a list of competition achievements.
          scroll-mt-24 adds top margin so the section heading is not hidden
          behind the fixed header when navigated to via an anchor link. */}
      <section id="about" className="scroll-mt-24 py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-1/2 w-1/2 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">
            About Our Team
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            {/* Mission card */}
            <Card className="bg-gray-900/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 overflow-hidden backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-red-600 to-orange-600 p-1">
                <CardTitle className="text-xl font-semibold text-white bg-gray-900/80 p-4 rounded-t-lg">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-300">We&apos;re dedicated to inspiring the next generation of STEM students in Howard County through our participation in Competitive Robotics.</p>
              </CardContent>
            </Card>
            {/* Achievements card -- season-by-season awards and milestones */}
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

      {/* Lazy-loaded sections -- these are heavy client components
          (image gallery, video player, project cards) wrapped with
          next/dynamic and ssr: false. They are code-split into separate
          chunks so the initial page load stays fast. */}
      <LazyGallerySection />
      <LazyVideoSection />
      <LazyProjectsSection />

      {/* Interested section -- contains an embedded Fillout form where
          prospective members can express interest in joining the team.
          scroll-mt-24 offsets for the fixed header on anchor navigation. */}
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

      {/* Contact section -- server-rendered CTA for sponsorship, partnership,
          and general inquiries. Links to the team email.
          scroll-mt-24 offsets for the fixed header on anchor navigation. */}
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
              {/* ChevronRight is purely decorative, so aria-hidden="true"
                  and focusable="false" hide it from screen readers. */}
              <ChevronRight aria-hidden="true" focusable="false" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </section>

      </main>

      {/* Site footer -- copyright notice and attribution */}
      <footer className="bg-gray-900/50 text-gray-400 py-6 border-t border-gray-800 backdrop-blur-md">
        <div className="container mx-auto text-center">
          <p>Made with &lt;3 by Team Ingenuity <br /> &copy; {new Date().getFullYear()}, all rights reserved</p>
        </div>
      </footer>
    </div>
  );
}