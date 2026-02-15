// 'use client' is required because next/dynamic with ssr: false performs
// client-side code splitting.
'use client'

import dynamic from 'next/dynamic';

// Each dynamic import loads the component only when needed (not during SSR).
// ssr: false prevents server-side rendering of these heavy components.
// The loading prop provides a placeholder div whose height matches the final
// rendered component, preventing layout shift while the chunk loads.

const GallerySection = dynamic(() => import("./GallerySection"), { 
  ssr: false,
  loading: () => <div className="py-8 bg-black h-[257px]" />
});

const VideoSection = dynamic(() => import("./VideoSection"), { 
  ssr: false,
  loading: () => <div className="py-16 bg-black h-[600px]" />
});

const ProjectsSection = dynamic(() => import("./ProjectsSection"), { 
  ssr: false,
  loading: () => <div className="py-32 bg-black h-[400px]" />
});

// Thin wrapper components that render the dynamically imported sections.
// Exported as named exports and used in the home page to keep heavy client
// components out of the initial server-rendered bundle.

export function LazyGallerySection() {
  return <GallerySection />;
}

export function LazyVideoSection() {
  return <VideoSection />;
}

export function LazyProjectsSection() {
  return <ProjectsSection />;
}
