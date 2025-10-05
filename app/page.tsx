"use client";

import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';
// import { SpeedInsights } from "@vercel/speed-insights/next";
import TextRotation from '../components/ui/textroate';
import ImageRotation from '../components/ui/ImageRotation'

export default function Component() {

  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
    </Head>
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="p-4 backdrop-blur-md bg-black/30 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-yellow-400">
            Team Ingenuity
            </h1>
          <div className="flex space-x-6">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <Button key={item} variant="ghost" className="text-gray-300 hover:bg-gray-700 hover:text-white text-sm">
                {item}
              </Button>
            ))}
          </div>
        </div>
      </nav>

    <header className="relative justify-between flex items-center py-32 text-left px-4 min-h-screen overflow-hidden pl-16 pr-16">
      <div className="flex-1 relative z-10">
        <h1 className="will-change-contents text-6xl font-bold mb-6 leading-tight bg-clip-text align-text-bottom">
          We are <TextRotation /><span className="will-change-opacity blinking-cursor text-center select-none pointer-events-none" aria-hidden>|</span>
        </h1>
        <p className="text-xl mb-8 leading-relaxed text-gray-300 max-w-2xl">
          Building the Future of Robotics
        </p>
        <Button size="lg" className="bg-gradient-to-r from-red-500 to-yellow-500 text-white hover:from-pink-600 hover:to-cyan-600 rounded-full px-8 py-3 font-medium group">
          Learn More
          <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
      <div className="flex-1 items-center ">
        <ImageRotation />
      </div>
    </header>


      {/* About Section */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-1/2 w-1/2 bg-gradient-to-r from-transparent to-purple-900/30 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400">
            About Our Team
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <Card className="bg-gray-900/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 overflow-hidden backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-pink-500 to-cyan-500 p-1">
                <CardTitle className="text-xl font-semibold text-white bg-gray-900/80 p-4 rounded-t-lg">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-300">Team Ingenuity is dedicated to fostering innovation, teamwork, and STEM education through competitive robotics.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 overflow-hidden backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-yellow-500 to-purple-500 p-1">
                <CardTitle className="text-xl font-semibold text-white bg-gray-900/80 p-4 rounded-t-lg">Our Achievements</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="list-disc pl-5 text-gray-300">
                  <li>First Place in Regional Competition 2023</li>
                  <li>Innovation Award at State Championships 2022</li>
                  <li>Community Outreach Recognition 2021</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-32 bg-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 right-1/2 w-1/2 bg-gradient-to-l from-transparent to-cyan-900/30 blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400">
            Our Projects
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { title: 'Current Robot', description: "Learn about our latest robot design for this year's challenge." },
              { title: 'Outreach Programs', description: "Discover how we're inspiring the next generation of engineers." },
              { title: 'Research Initiatives', description: "Explore our team's contributions to robotics research." },
            ].map((project, index) => (
              <Card key={index} className="bg-gray-900/50 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 overflow-hidden backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-pink-500 via-yellow-500 to-cyan-500 p-1">
                  <CardTitle className="text-xl font-semibold text-white bg-gray-900/80 p-4 rounded-t-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <Button className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white hover:from-pink-600 hover:to-cyan-600 rounded-full px-6 py-2 font-medium group">
                    Read More
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-yellow-500/20 to-cyan-500/20 blur-3xl"></div>
        </div>
        <div className="container mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400">
            Get in Touch
          </h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto">Interested in learning more or supporting our team? We&apos;d love to hear from you!</p>
          <Button size="lg" className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white hover:from-pink-600 hover:to-cyan-600 rounded-full px-8 py-3 font-medium group">
            Contact Us
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 text-gray-400 py-6 border-t border-gray-800 backdrop-blur-md">
        <div className="container mx-auto text-center">
          <p>Made with &lt;3 by Team Ingenuity <br></br> &copy; {new Date().getFullYear()}, All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
}