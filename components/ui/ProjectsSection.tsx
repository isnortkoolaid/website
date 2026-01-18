'use client'

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

const Modal = dynamic(() => import("@/components/ui/modal"), { ssr: false });

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
          <li>Connecting with robotics experts from Fartland and Northrop Gruman</li>
          <li>Presenting at Howard County SEEDS to promote inclusive FTC participation for neurodivergent students and increase the reach of FIRST.</li>
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
      </>
    )
  },
];

export default function ProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<{title: string, content: React.ReactNode} | null>(null);

  const handleProjectClick = (project: typeof projectData[0]) => {
    setSelectedProject({ title: project.title, content: project.content });
    setModalOpen(true);
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 right-1/2 w-1/2"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          Our Projects
        </h2>
        <div className="flex justify-center">
          <div className="grid gap-12 md:grid-cols-2 w-fit">
            {projectData.map((project, index) => (
            <Card key={index} className="bg-gray-900/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 overflow-hidden backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-red-600 p-1">
                <CardTitle className="text-xl font-semibold text-white bg-gray-900/80 p-4 rounded-t-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <Button 
                  onClick={() => handleProjectClick(project)}
                  className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full px-6 py-2 font-medium button-gradient"
                >
                  Read More<span className="sr-only"> about {project.title}</span>
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
          </div>
        </div>
      </div>
      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title={selectedProject?.title || ''}
        content={selectedProject?.content || <></>}
      />
    </section>
  );
}
