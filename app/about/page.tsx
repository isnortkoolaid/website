"use client";

// import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Header from "@/components/ui/header";
import Bio from "@/components/ui/bio";

export default function Component() {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet" />
      <link rel="preload" href="/images/compressed-untitled4.jpg" as="image"/>
      <link rel="preload" href="/images/compressed-untitled2.jpg" as="image"/>
      <link rel="preload" href="/images/compressed-Image_20251004_202757_942.jpg" as="image"/>
    </Head>
    <Header/ >
    <div className="flex flex-col min-h-screen bg-black text-white font-sans space-y-8 py-16 pt-32">
        <div className="flex flex-col justify-left items-start space-y-4 px-4">
            <h1 className="text-4xl font-bold">Team Ingenuity aims to inspire the next generation of innovators.</h1>
            <h2 className="text-2xl font-bold">Meet the people who make it all possible:</h2>
        </div>
        <div className="flex flex-col items-center w-full space-y-6 px-4">
            <h2 className="text-3xl font-bold mb-4">Coaches and Metors</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-6">
                <Bio
                    img="/images/john.png"
                    name="John Wan"
                    teamRole="Assistant Coach"
                    text="John Wan is a Supervisory Data Scientist at the U.S. FDA and an experienced FIRST mentor. He coaches FTC and FLL teams with a focus on engineering design, autonomous strategy, and data-driven problem solving. John also teaches data science at UMBC and brings real-world analytics and leadership experience to youth STEM education. He holds an MBA from Georgia Tech and a B.S. in Computer Engineering."
                    pronouns="he/him"
                    href="#"
                    className="flex justify-center items-center"
                    // email="max"
                />

                <Bio
                    img="/images/coach.jpg"
                    name="Haitao Dai"
                    teamRole="Coach and Team Lead"
                    text="This year marks Haitao Dai's third year coaching the Ingenuity FTC team. He comes from a background in Electrical Engineering with a passion for control systems and automation. His goal is to guide the team through the full engineering process—from concept to concrete—while ensuring they have the support and resources they need to succeed."
                    pronouns="he/him"
                    href="#"
                    className="flex justify-center items-center"
                />
            </div>
            {/* <nav className="p-4 backdrop-blur-md bg-black/30 fixed w-full z-50"> */}
        </div>
        <div className="flex flex-col items-center w-full space-y-6 px-4">
            <h2 className="text-3xl font-bold mb-4">Software Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-6"> 
                <Bio
                    img="/images/constance.jpg"
                    name="Constance Zhang"
                    teamRole="Software Lead"
                    text="Constance manages the software side of Team Ingenuity, having worked on the TeleOp and Auto code for the robot, as well as some aspects of the robot's vision system. In her free time, she enjoys hanging out with friends and playing tennis."
                    pronouns="she/her"
                    href="#"
                    className="flex justify-center items-center"
                />
                <Bio
                    img="/images/rainger.webp"
                    name="Rainger Yu"
                    teamRole="Software Team"
                    text="Rainger works on the software side of Team Ingenuity, having worked on the robot's vision system along with maintaing and building out the website as it stands today. In his free time, he likes to code projects, mostly in Python or Javascript, and work on running events with Hack Club."
                    pronouns="he/him"
                    href="#"
                    className="flex justify-center items-center"
                />
            </div>
        </div>
        <div className="flex flex-col items-center w-full space-y-6 px-4">
            <h2 className="text-3xl font-bold mb-4">Hardware Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-6">
                    <Bio
                    img="/images/erik.jpg"
                    name="Erik Wong"
                    teamRole="Hardware Lead"
                    text="Erik is the Hardware Lead of Team Ingenuity, overseeing the mechanical design and construction of the robot. With a keen eye for detail and a passion for engineering, Erik ensures that the robot is built to perform at its best during competitions. Erik is currenlty a sophmore at Gilman and enjoys playing squash in his free time."
                    pronouns="he/him"
                    href="#"
                    className="flex justify-center items-center"
                />
                <Bio
                    img="/images/nathan.jpeg"
                    name="Nathan Dai"
                    teamRole="Hardware Team"
                    text="Nathan is a 3rd year FTC student on team Ingenuity 24220. He also participated in 4 years of FLL even going to nationals once. He enjoys playing soccer and spending times with his friends and family."
                    pronouns="he/him"
                    href="#"
                    className="flex justify-center items-center"
                />
                <Bio
                    img="/images/sherry1.png"
                    name="Sherry Wei"
                    teamRole="Hardware Team"
                    text="Sherry works on the hardware and portfolio, where she leads design initiatives, active building, and portfolio development. In her free time, she enjoys reading, fencing, and exploring cool concepts."
                    pronouns="she/her"
                    href="#"
                    className="col-span-full flex justify-center items-center"
                />
            </div>
            {/* <nav className="p-4 backdrop-blur-md bg-black/30 fixed w-full z-50"> */}
        </div>
        <div className="flex flex-col items-center w-full space-y-6 px-4">
            <h2 className="text-3xl font-bold mb-4">CAD Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-6">
                <Bio
                    img="/images/zilong.jpg"
                    name="Zilong Ni"
                    teamRole="CAD Lead"
                    pronouns="he/him"
                    text="Zilong is the CAD Lead of Team Ingenuity, specializing in computer-aided design and 3D modeling, helping out with creating parts which are not available off the shelf. His high level of CAD skill and creative problem-solving skills helps to  bring the robot to life."
                    href="#"
                    className="col-span-full flex justify-center items-center"
                />
            </div>
            {/* <nav className="p-4 backdrop-blur-md bg-black/30 fixed w-full z-50"> */}
        </div>
        <div className="flex flex-col items-center w-full space-y-6 px-4">
            <h2 className="text-3xl font-bold mb-4">General Support Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-6">
                <Bio
                    img="/images/max.jpg"
                    name="Max Fang"
                    teamRole="General Support Co-Lead"
                    text="Max is a dedicated member of Team Ingenuity, contributing his skills and passion to our projects. With a keen interest in robotics and engineering, he plays a vital role in our team's success."
                    pronouns="he/him"
                    href="#"
                    className="flex justify-center items-center"
                />
                <Bio
                    img="/images/jonathan.jpeg"
                    name="Jonathan Wan"
                    teamRole="General Support Co-Lead"
                    text="Jonathan, a new addition to Team Ingenuity, focuses on the completion of various tasks necessary for the team, ranging from hardware roles to mission strategy. In his downtime, he enjoys associating with friends and family."
                    pronouns="he/him"
                    href="#"
                    className="flex justify-center items-center"
                />
                <Bio
                    img="/images/vincent.jpg"
                    name="Vincent Zhang"
                    teamRole="General Support Member"
                    text="Vincent is a dedicated member of Team Ingenuity, contributing his skills and passion to our projects. With a keen interest in robotics and engineering, he plays a vital role in our team's success."
                    pronouns="he/him"
                    href="#"
                    className="col-span-full flex justify-center items-center"
                />
            </div>
        </div>
        
    </div>
    </>
  );
}