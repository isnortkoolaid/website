"use client";

// import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Head from 'next/head';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { ChevronRight, Video } from 'lucide-react';
import { useState } from "react";
import dynamic from 'next/dynamic';

const Modal = dynamic(() => import("@/components/ui/modal"), { ssr: false });

// import { SpeedInsights } from "@vercel/speed-insights/next";
import TextRotation from '../components/ui/textroate';
import ImageRotation from '../components/ui/ImageRotation'
import Header from "@/components/ui/header";
import Marquee from "react-fast-marquee";
// import Gallery from "@/components/ui/gallery";

export default function Component() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<{title: string, content: React.ReactNode} | null>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0) // Start with featured2.mp4
  const videos = [
    { src: '/videos/featured2.mp4', title: 'Autonomous Mode', alt: 'Video of the robot in autonomous mode' },
    { src: '/videos/featured1.mp4', title: 'Robot Driving', alt: 'Video of the robot driving' }
  ]

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const projectData = [
    { 
      title: 'Current Robot', 
      description: "Learn about our latest robot design for this year's challenge.",
      content: (
        <>
          <p className="mb-4">
            Our 2025-2026 robot represents the culmination of months of design, prototyping, and testing. 
            Built specifically for this year&apos;s DECODE challenge.
          </p>

          <Marquee>
            <div className="px-2 h-56 flex items-center">
              <Image
                src="/images/compressed-untitled2.jpg"
                alt="Team Ingenuity constructing the robot"
                width={400}
                height={225}
                className="rounded-lg object-cover h-full"
              />
            </div>
            <div className="px-2 h-56 flex items-center">
              <Image
                src="/images/outreach2.png"
                alt="Team Ingenuity scrimmaging"
                width={400}
                height={225}
                className="rounded-lg object-cover h-full"
              />
            </div>
            <div className="px-2 h-56 flex items-center">
              <Image
                src="/images/robot2.png"
                alt="Team Ingenuity's robot for DECODE in OnShape"
                width={400}
                height={225}
                className="rounded-lg object-cover h-full"
              />
            </div>
          </Marquee>

          {/* <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Advanced autonomous navigation system</li>
            <li>Precision-engineered intake mechanism</li>
            <li>Custom-designed chassis for optimal maneuverability</li>
            <li>Integrated sensor array for real-time feedback</li>
          </ul>
          <p>
            The team has logged over 500 hours of build time, iterating through multiple design revisions 
            to achieve peak performance. Our robot excels in both autonomous and driver-controlled periods, 
            with a focus on consistency and reliability.
          </p> */}
        </>
      )
    },
    { 
      title: 'Outreach Programs', 
      description: "Discover how we're inspiring the next generation of engineers.",
      content: (
        <>
          <p className="mb-4">
            Team Ingenuity is committed to spreading STEM education throughout Howard County and beyond through our outreach. Some of our efforts include: 
          </p>
          <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Mentoring FTC Team #31161 <i>HoCo RoBo</i></li>
            <li>Connecting with robotics experts from the US Army and Northrop Gruman</li>
            <li>Presenting at Howard County Seeds to </li>
            {/* <li>Increasing knowledge of FTC through teachings</li> */}
          </ul>
          <Marquee>
            <div className="px-2 h-56 flex items-center">
              <Image
                src="/images/outreach1.png"
                alt="Team Ingenuity doing outreach"
                width={400}
                height={225}
                className="rounded-lg object-cover h-full"
              />
            </div>
            <div className="px-2 h-56 flex items-center">
              <Image
                src="/images/outreach2.png"
                alt="Team Ingenuity doing outreach"
                width={400}
                height={225}
                className="rounded-lg object-cover h-full"
              />
            </div>
            <div className="px-2 h-56 flex items-center">
              <Image
                src="/images/outreach3.png"
                alt="Team Ingenuity doing outreach"
                width={400}
                height={225}
                className="rounded-lg object-cover h-full"
              />
            </div>
          </Marquee>

          {/* <ul className="list-disc pl-5 mb-4 space-y-2">
            <li>Elementary school robotics workshops</li>
            <li>Annual STEM fair participation</li>
            <li>Mentoring FLL and FLL Jr. teams</li>
            <li>Community demonstration events</li>
            <li>Virtual coding tutorials for beginners</li>
          </ul>
          <p>
            This year alone, we&apos;ve reached over 300 students through our programs, inspiring young minds 
            to pursue careers in science, technology, engineering, and mathematics. We believe that by sharing 
            our passion for robotics, we can help build a stronger, more innovative future.
          </p> */}
        </>
      )
    },
    // { 
    //   title: 'Research Initiatives', 
    //   description: "Explore our team's contributions to robotics research.",
    //   content: (
    //     <>
    //       <p className="mb-4">
    //         Beyond competition, Team Ingenuity actively contributes to the broader robotics community 
    //         through research and innovation:
    //       </p>
    //       <ul className="list-disc pl-5 mb-4 space-y-2">
    //         <li>Computer vision algorithms for object detection</li>
    //         <li>Machine learning models for autonomous path planning</li>
    //         <li>Custom control systems for enhanced precision</li>
    //         <li>Documentation and open-source contributions</li>
    //         <li>Collaboration with local universities and research institutions</li>
    //       </ul>
    //       <p>
    //         Our engineering notebook details our research methodology, experimental results, and lessons learned. 
    //         We regularly publish our findings and share code repositories to help other teams advance their own 
    //         robotics programs.
    //       </p>
    //     </>
    //   )
    // },
  ];

  const handleProjectClick = (project: typeof projectData[0]) => {
    setSelectedProject({ title: project.title, content: project.content })
    setModalOpen(true)
  };

  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
      <link rel="preload" href="/images/compressed-untitled4.jpg" as="image" type="image/jpeg"/>
      <link rel="preload" href="/images/compressed-untitled2.jpg" as="image" type="image/jpeg"/>
      <link rel="preload" href="/images/compressed-Image_20251004_202757_942.jpg" as="image" type="image/jpeg"/>
      <link rel="preload" href="/videos/featured1.mp4" as="video" type="video/mp4"/>
      <link rel="preload" href="/videos/featured2.mp4" as="video" type="video/mp4"/>
      <meta name="preconnect" content="https://fonts.googleapis.com" />
    </Head>
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <Header />
        <header className="relative flex flex-col md:flex-row justify-between items-center py-32 text-left px-4 md:px-16 min-h-screen overflow-hidden">
        <div className="flex-1 relative z-10 max-w-full">
          <h1 className="will-change-contents text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text align-text-bottom">
            We are <br/> <TextRotation /><span className="will-change-opacity blinking-cursor text-center select-none pointer-events-none" aria-hidden>|</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed text-gray-300 max-w-2xl">
            Building the Future of STEM in Howard County
          </p>
          <Button size="lg" asChild className="bg-gradient-to-r from-red-500 to-yellow-500 text-white rounded-full px-8 py-3 font-medium group button-gradient">
            <a href="#about">
              Learn More
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
        <div className="flex-1 items-center mt-8 md:mt-0 mx-4 w-full md:w-auto">
          <ImageRotation />
        </div>
      </header>
       


        {/* About Section */}
        <section id="about" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 left-1/2 w-1/2 blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent">
              About Our Team
            </h2>
            <div className="grid gap-12 md:grid-cols-2">
              <Card className="bg-gray-900/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 overflow-hidden backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-red-500 to-yellow-500 p-1">
                  <CardTitle className="text-xl font-semibold text-white bg-gray-900/80 p-4 rounded-t-lg">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-300">We're dedicated to inspiring the next generation of STEM students in Howard County through our participation in Competitive Robotics.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-900/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 overflow-hidden backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-yellow-500 to-red-500 p-1">
                  <CardTitle className="text-xl font-semibold text-white bg-gray-900/80 p-4 rounded-t-lg">Our Achievements</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-white font-semibold mb-2">2025-2026 Season (DECODE)</h4>
                      <ul className="list-disc pl-5 text-gray-300 space-y-1">
                        <li>Inspire Award - 3rd Place (Moorefield, WV Qualifier I)</li>
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

        {/* Gallery Section */}
        <section className="py-8 bg-black">
          <Marquee>
            <Image
              src="/images/compressed-untitled4.jpg"
              alt="Team Ingenuity as of 2025"
              width={400}
              height={225}
              className="mx-4 rounded-lg object-cover"
              loading="lazy"
              quality={75}
            />
            <Image
              src="/images/compressed-untitled2.jpg"
              alt="Robot build in progress"
              width={400}
              height={225}
              className="mx-4 rounded-lg object-cover"
              loading="lazy"
              quality={75}
            />
            <Image
              src="/images/compressed-Image_20251004_202757_942.jpg"
              alt="Team Ingenuity fundraising during China Day 2025"
              width={400}
              height={225}
              className="mx-4 rounded-lg object-cover"
              loading="lazy"
              quality={75}
            />
            <Image
              src="/images/image-3.png"
              alt="Team Ingenuity's Meeting with Dr. Peilin Song"
              width={400}
              height={225}
              className="mx-4 rounded-lg object-cover"
              loading="lazy"
              quality={75}
            />

          </Marquee>
          {/* <Gallery 
            images={[
              '/images/compressed-untitled4.jpg',
              '/images/compressed-untitled2.jpg',
              '/images/compressed-Image_20251004_202757_942.jpg',
              '/images/logo.png'
            ]}
            height={300}
            mobileHeight={200}
            speed={10}
          /> */}
        </section>
        
        {/* Featured videos secton */}
        <section className="py-16 bg-black">
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-center text-white">Featured Videos</h2>
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => setCurrentVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Previous video"
              >
                <ChevronRight className="rotate-180 text-white" size={28} />
              </button>
              <div className="relative w-full max-w-[950px] aspect-video flex justify-center items-center">
                <video 
                  className="w-full h-full rounded-lg shadow-lg object-cover logo-gradient"
                  controls
                  key={currentVideoIndex}
                  title={videos[currentVideoIndex].title}
                >
                  <source src={videos[currentVideoIndex].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <button
                onClick={() => setCurrentVideoIndex((prev) => (prev + 1) % videos.length)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Next video"
              >
                <ChevronRight className="text-white" size={28} />
              </button>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {videos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentVideoIndex ? 'bg-orange-500 w-8' : 'bg-orange-900/50 w-2 hover:bg-orange-900'
                  }`}
                  aria-label={`Go to video ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-32 bg-black relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-y-0 right-1/2 w-1/2 bg-gradient-to-l from-transparent to-cyan-900/30 blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-16 text-center text-white">
              Our Projects
            </h2>
            <div className="flex justify-center">
              <div className="grid gap-12 md:grid-cols-2 w-fit">
                {projectData.map((project, index) => (
                <Card key={index} className="bg-gray-900/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 overflow-hidden backdrop-blur-sm">
                  <CardHeader className="bg-gradient-to-r from-yellow-500 to-red-500 p-1">
                    <CardTitle className="text-xl font-semibold text-white bg-gray-900/80 p-4 rounded-t-lg">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <Button 
                      onClick={() => handleProjectClick(project)}
                      className="bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-full px-6 py-2 font-medium button-gradient"
                    >
                      Read More
                      <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 blur-3xl"></div>
          </div>
          <div className="container mx-auto text-center px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400">
              Get in Touch
            </h2>
            <p className="mb-8 text-gray-300 max-w-2xl mx-auto">Interested in learning more or supporting our team? We&apos;d love to hear from you!</p>
            <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-red-500 text-white rounded-full px-8 py-3 font-medium group button-gradient" onClick={() => window.location.href = 'mailto:contact@ingenuity.team'}>
              Contact Us
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900/50 text-gray-400 py-6 border-t border-gray-800 backdrop-blur-md">
          <div className="container mx-auto text-center">
            <p>Made with &lt;3 by Team Ingenuity <br></br> &copy; {new Date().getFullYear()}, all rights reserved</p>
          </div>
        </footer>

        {/* Modal */}
        <Modal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)}
          title={selectedProject?.title || ''}
          content={selectedProject?.content || <></>}
        />
    </div>
    </>
  );
}