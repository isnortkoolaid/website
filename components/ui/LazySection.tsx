'use client'

import dynamic from 'next/dynamic';

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

export function LazyGallerySection() {
  return <GallerySection />;
}

export function LazyVideoSection() {
  return <VideoSection />;
}

export function LazyProjectsSection() {
  return <ProjectsSection />;
}
