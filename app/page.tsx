"use client";


import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from 'lucide-react';

export default function Component() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
  
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
  
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
  
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  
    const drawHexagon = (x: number, y: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const hx = x + size * Math.cos(angle);
        const hy = y + size * Math.sin(angle);
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
      }
      ctx.closePath();
    };
  
    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    
      const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient1.addColorStop(0, 'rgba(255, 0, 128, 0.7)');
      gradient1.addColorStop(0.25, 'rgba(255, 191, 0, 0.7)');
      gradient1.addColorStop(0.5, 'rgba(0, 255, 255, 0.7)');
      gradient1.addColorStop(0.75, 'rgba(128, 0, 255, 0.7)');
      gradient1.addColorStop(1, 'rgba(255, 0, 128, 0.7)');
    
      ctx.fillStyle = gradient1;
      ctx.fillRect(-10 + Math.sin(time / 3000) * 20, -10 + Math.cos(time / 3000) * 20, canvas.width + 20, canvas.height + 20);
    
      const gradient2 = ctx.createLinearGradient(canvas.width, canvas.height, 0, 0);
      gradient2.addColorStop(0, 'rgba(255, 128, 0, 0.5)');
      gradient2.addColorStop(0.25, 'rgba(0, 128, 255, 0.5)');
      gradient2.addColorStop(0.5, 'rgba(0, 255, 128, 0.5)');
      gradient2.addColorStop(0.75, 'rgba(128, 255, 0, 0.5)');
      gradient2.addColorStop(1, 'rgba(255, 128, 0, 0.5)');
    
      ctx.fillStyle = gradient2;
      ctx.fillRect(-10 + Math.cos(time / 5000) * 40, -10 + Math.sin(time / 5000) * 40, canvas.width + 20, canvas.height + 20);
    
      const hexSize = 25;
      const hexHeight = hexSize * Math.sqrt(3);
      const hexWidth = hexSize * 2;
      const columns = Math.ceil(canvas.width / (hexWidth * 0.75)) + 1;
      const rows = Math.ceil(canvas.height / hexHeight) + 1;
    
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * hexWidth * 0.75;
          const y = j * hexHeight + (i % 2 === 0 ? 0 : hexHeight / 2);
          
          // Smaller amplitude but higher frequency for more pronounced waves without separation
          const waveX = Math.sin(time / 1000 + i * 0.5 + j * 0.5) * 8; // Smaller amplitude
          const waveY = Math.cos(time / 1000 + i * 0.5 + j * 0.5) * 8; // Smaller amplitude
    
          drawHexagon(x + waveX, y + waveY, hexSize);
    
          ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
          ctx.fill();
    
          ctx.strokeStyle = 'rgba(0, 0, 0, 1)'; // Fully opaque black for borders
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    
      requestAnimationFrame(animate);
    };
    
    
    
  
    animate(0);
  
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  

  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="p-4 backdrop-blur-md bg-black/30 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-400">Team Ingenuity</h1>
          <div className="flex space-x-6">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <Button key={item} variant="ghost" className="text-gray-300 hover:bg-gray-700 hover:text-white text-sm">
                {item}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      <header className="relative flex flex-col items-center justify-center py-32 text-center px-4 min-h-screen overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10">
        <h1 className="text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-yellow-400 to-cyan-400">
          Welcome to Team Ingenuity
        </h1>
        <p className="text-xl mb-8 leading-relaxed text-gray-300 max-w-2xl mx-auto">
          Innovating for the Future of Robotics
        </p>
        <Button size="lg" className="bg-gradient-to-r from-pink-500 to-cyan-500 text-white hover:from-pink-600 hover:to-cyan-600 rounded-full px-8 py-3 font-medium group">
          Learn More
          <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
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
          <p>&copy; {new Date().getFullYear()} Team Ingenuity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}