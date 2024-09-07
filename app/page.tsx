import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TeamWebsite: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className="border-b border-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Team Ingenuity</h1>
          <div className="flex space-x-6">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <Button key={item} variant="ghost" className="text-gray-400 hover:text-white text-sm">
                {item}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center py-32 text-center px-4 bg-gradient-to-b from-black via-gray-900 to-black">
        <h1 className="text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          Welcome to Team Ingenuity
        </h1>
        <p className="text-xl mb-8 leading-relaxed text-gray-400 max-w-2xl">
          Innovating for the Future of Robotics
        </p>
        <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 font-medium">
          Learn More
        </Button>
      </header>

      {/* About Section */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            About Our Team
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <Card className="bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                <CardTitle className="text-xl font-semibold text-white bg-gray-900 p-4 rounded-t-lg">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-300">Team Ingenuity is dedicated to fostering innovation, teamwork, and STEM education through competitive robotics.</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                <CardTitle className="text-xl font-semibold text-white bg-gray-900 p-4 rounded-t-lg">Our Achievements</CardTitle>
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
      <section className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Our Projects
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { title: 'Current Robot', description: "Learn about our latest robot design for this year's challenge." },
              { title: 'Outreach Programs', description: "Discover how we're inspiring the next generation of engineers." },
              { title: 'Research Initiatives', description: "Explore our team's contributions to robotics research." },
            ].map((project, index) => (
              <Card key={index} className="bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-800 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
                  <CardTitle className="text-xl font-semibold text-white bg-gray-900 p-4 rounded-t-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-2 font-medium">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Get in Touch
          </h2>
          <p className="mb-8 text-gray-300 max-w-2xl mx-auto">Interested in learning more or supporting our team? We&apos;d love to hear from you!</p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 font-medium">Contact Us</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Team Ingenuity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TeamWebsite;