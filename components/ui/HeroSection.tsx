'use client'

import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
import TextRotation from './textroate';
import ImageRotation from './ImageRotation';

export default function HeroSection() {
  return (
    <header className="relative flex flex-col md:flex-row justify-between items-center py-32 text-left px-4 md:px-16 lg:px-24 xl:px-32 min-h-screen overflow-hidden">
      <div className="flex-1 relative z-10 max-w-full">
        <h1 className="will-change-contents text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text align-text-bottom">
          We are <br/> <TextRotation /><span className="will-change-opacity blinking-cursor text-center select-none pointer-events-none inline-block w-[14px]" aria-hidden>|</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-300 max-w-2xl">
          Building the Future of STEM in Howard County
        </p>
        <Button size="lg" asChild className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full px-8 py-3 font-medium group button-gradient">
          <a href="#about">
            Learn More
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
      <div className="flex-1 flex justify-end mt-8 md:mt-0 md:ml-4 w-full md:w-auto">
        <ImageRotation />
      </div>
    </header>
  );
}
