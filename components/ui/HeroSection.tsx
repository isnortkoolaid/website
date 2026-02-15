/**
 * HeroSection -- client component.
 * 'use client' is required because child components (TextRotation and
 * ImageRotation) rely on client-side hooks (useEffect / useState) for
 * their animations.
 */
'use client'

import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import TextRotation from './textroate';
import ImageRotation from './ImageRotation';

export default function HeroSection() {
  return (
    /**
     * Full-height hero <header> element.
     * Responsive layout: content stacks vertically on mobile (flex-col)
     * and sits side-by-side on desktop (md:flex-row).
     * min-h-screen ensures the hero fills the viewport.
     */
    <header className="relative flex flex-col md:flex-row justify-between items-center py-32 text-left px-4 md:px-16 lg:px-24 xl:px-32 min-h-screen overflow-hidden">
      <div className="flex-1 relative z-10 max-w-full">
        {/* h1 with TextRotation -- a typewriter effect that cycles through
            identity words (e.g. "Innovators", "Engineers", "Ingenuity"). */}
        <h1 className="will-change-contents text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text align-text-bottom">
          We are <br/> <TextRotation />
          {/* Blinking cursor -- purely decorative. aria-hidden keeps
              screen readers from announcing the pipe character. */}
          <span className="will-change-opacity blinking-cursor text-center select-none pointer-events-none inline-block w-[14px]" aria-hidden>|</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-300 max-w-2xl">
          Building the Future of STEM in Howard County
        </p>
        {/* "Learn More" button -- scrolls to the #about section.
            Uses the shadcn Button with asChild so the <a> tag receives
            all button styling, including the red-to-orange gradient. */}
        <Button size="lg" asChild className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full px-8 py-3 font-medium group button-gradient">
          <a href="#about">
            Learn More
            {/* Decorative chevron icon -- aria-hidden so screen readers
                do not announce it. Slides right on hover via group-hover. */}
            <ChevronRight aria-hidden="true" focusable="false" className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
      {/* ImageRotation -- auto-cycling hero images displayed on the
          right side of the header on desktop, below the text on mobile. */}
      <div className="flex-1 flex justify-end mt-8 md:mt-0 md:ml-4 w-full md:w-auto">
        <ImageRotation />
      </div>
    </header>
  );
}
