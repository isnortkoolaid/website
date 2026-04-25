// -- Next.js metadata export for unique page title (WCAG / SEO) --
import type { Metadata } from "next";
// -- shadcn/ui Button wrapper --
import { Button } from "@/components/ui/button";
// -- Decorative icons from lucide-react --
import {
  ChevronRight,
  Calendar,
  Clock,
  MapPin,
  Users,
} from "lucide-react";
// -- Site-wide navigation header --
import Header from "@/components/ui/header";

export const metadata: Metadata = {
  title: "Summer Camp -- Ingenuity",
  description:
    "FIRST LEGO League Summer Camp hosted by FTC Team Ingenuity 24220. Ages 8-14. August 3-7, 2025.",
};

export default function SummerCampPage() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {/* <main id="main"> is the skip-link target defined in layout.tsx.
          Keyboard users who activate "Skip to content" land here. */}
      <main id="main">
        <Header />

        {/* ======================================================
            Hero banner -- full-viewport section with gradient
            background and key camp details front-and-center.
            ====================================================== */}
        <section
          id="hero"
          aria-label="Summer Camp Hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >


          {/* Hero content -- z-20 sits above the background layers */}
          <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
            {/* Season badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/40 bg-orange-500/10 text-orange-300 text-sm font-medium mb-8 backdrop-blur-sm">
              <Calendar aria-hidden="true" focusable="false" className="h-4 w-4" />
              2025-2026 Season: UNEARTHED
            </div>

            {/* Main heading */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95]">
              <span className="block text-white">FLL Summer</span>
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Robotics Camp
              </span>
            </h1>

            {/* Sub-heading */}
            <p className="text-xl md:text-2xl mb-6 leading-relaxed text-gray-300 max-w-3xl mx-auto">
              Hosted by{" "}
              <span className="text-orange-400 font-semibold">
                FTC Team Ingenuity 24220
              </span>
            </p>
            <p className="text-lg md:text-xl mb-10 text-gray-400 max-w-2xl mx-auto">
              A week-long robotics experience for students aged 8&ndash;14, taught by
              mentors with 5+ years in FIRST
            </p>

            {/* Quick stats row */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base">
              <div className="flex items-center gap-2 text-gray-300">
                <Calendar aria-hidden="true" focusable="false" className="h-5 w-5 text-orange-400" />
                Aug 3&ndash;7, 2025
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Clock aria-hidden="true" focusable="false" className="h-5 w-5 text-orange-400" />
                9 AM &ndash; 3 PM
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin aria-hidden="true" focusable="false" className="h-5 w-5 text-orange-400" />
                Columbia, MD
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users aria-hidden="true" focusable="false" className="h-5 w-5 text-orange-400" />
                Ages 8&ndash;14
              </div>
            </div>

            {/* CTA button -- scrolls to the syllabus section */}
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full px-10 py-4 text-lg font-medium group button-gradient focus-visible:ring-2 focus-visible:ring-orange-400"
            >
              <a href="#syllabus">
                View Full Syllabus
                <ChevronRight
                  aria-hidden="true"
                  focusable="false"
                  className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </Button>
          </div>


        </section>

        {/* ======================================================
            Syllabus section -- embedded Google Doc with the full
            camp syllabus. The iframe fills most of the viewport so
            visitors can read it without leaving the site.
            ====================================================== */}
        <section
          id="syllabus"
          className="scroll-mt-24 py-24 relative overflow-hidden"
          aria-label="Camp Syllabus"
        >
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-center text-white">
              Full Syllabus
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              Read the complete day-by-day schedule, materials list, and learning outcomes
            </p>

            {/* Google Docs embed -- rounded container with border to
                blend with the site's dark card aesthetic */}
            <div className="max-w-4xl mx-auto rounded-lg border border-gray-800 overflow-hidden bg-white">
              <iframe
                src="https://docs.google.com/document/d/e/2PACX-1vTGHG15mIJLHoc6XIBUdBspPYWtfIRUw1TC466edQQmzxt-Ufpei4_1OWn_RaVSgXG0s9c1kY0AQEjK/pub?embedded=true"
                title="FLL Summer Camp Syllabus"
                className="w-full h-[80vh] min-h-[600px]"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Site footer -- copyright notice and attribution */}
      <footer className="bg-gray-900/50 text-gray-400 py-6 border-t border-gray-800 backdrop-blur-md">
        <div className="container mx-auto text-center">
          <p>
            Made with &lt;3 by Team Ingenuity <br /> &copy;{" "}
            {new Date().getFullYear()}, all rights reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
