import Header from "@/components/ui/header";
import Bio from "@/components/ui/bio";

export default function Component() {
  return (
    <>

    <Header/ >
    <div className="flex flex-col min-h-screen bg-black text-white font-sans space-y-8 py-16 pt-32">
        <div className="flex flex-col justify-left items-start space-y-4 px-4">
            <h1 className="text-4xl font-bold">Team Ingenuity aims to inspire the next generation of innovators.</h1>
            <h2 className="text-2xl font-bold">Meet the people who make it all possible:</h2>
        </div>
        <div className="flex flex-col items-center w-full space-y-6 px-4">
            <h2 className="text-3xl font-bold mb-4">Coaches and Mentors</h2>

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
                    teamRole="Head Coach"
                    text="Hello! I’m Haitao Dai, and this is my third year coaching the Ingenuity FTC team. I earned my PhD in Electrical Engineering from Boston University and currently work as a Senior Staff Engineer at Northrop Grumman. I’m passionate about circuit design, control systems, and automation, and I enjoy sharing that enthusiasm with our students. My goal is to guide the team through the entire engineering process—from concept and design to testing and refinement—while ensuring they have the support and resources they need to learn, grow, and succeed."
                    pronouns="he/him"
                    href="#"
                    className="flex justify-center items-center"
                />
                <Bio
                    img="/images/baoshe.jpg"
                    name="Baoshe Zhang"
                    teamRole="Software Mentor"
                    text="Dr. Baoshe Zhang is a software mentor for Team Ingenuity. He holds a Ph.D. in Physics from the Hong Kong University of Science and Technology and is an Associate Professor at the University of Maryland School of Medicine. With a background in software engineering and expertise in programming and automation, he helps guide the team's software development."
                    pronouns="he/him"
                    href="#"
                    className="col-span-full flex justify-center items-center"
                />
            </div>
            {/* <nav className="p-4 backdrop-blur-md bg-black/30 fixed w-full z-50"> */}
        </div>
        <div className="flex flex-col items-center w-full space-y-6 px-4">
            <h2 className="text-3xl font-bold mb-4">Team Leadership</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-6">
                <Bio
                    img="/images/elaine.jpg"
                    name="Elaine"
                    teamRole="Team Captain"
                    text="Elaine is a sophomore and third-year team member with seven years of experience in FIRST. With past experience in hardware, software, and outreach, she is eager to assist her team in any aspect. In her free time, you can find Elaine hiding in a corner or managing her minions."
                    pronouns="she/her"
                    href="#"
                    className="col-span-full flex justify-center items-center"
                />
            </div>
        </div>
        <div className="flex flex-col items-center w-full space-y-6 px-4">
            <h2 className="text-3xl font-bold mb-4">Software Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-6"> 
                <Bio
                    img="/images/constance.jpg"
                    name="Constance"
                    teamRole="Software Lead"
                    text="Constance manages the software side of Team Ingenuity, having worked on the TeleOp and Auto code for the robot, as well as some aspects of the robot's vision system. In her free time, she enjoys hanging out with friends and playing tennis."
                    pronouns="she/her"
                    href="#"
                    className="flex justify-center items-center"
                />
                <Bio
                    img="/images/rainger.webp"
                    name="Rainger"
                    teamRole="Software"
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
                    name="Erik"
                    teamRole="Mechanical Lead"
                    text="Erik is the Hardware Lead of Team Ingenuity, overseeing the mechanical design and construction of the robot. With a keen eye for detail and a passion for engineering, Erik ensures that the robot is built to perform at its best during competitions. Erik is currenlty a sophmore at Gilman and enjoys playing squash in his free time."
                    pronouns="he/him"
                    href="#"
                    className="flex justify-center items-center"
                />
                <Bio
                    img="/images/nathan.jpeg"
                    name="Nathan"
                    teamRole="Electrical Lead"
                    text="Nathan is a 3rd year FTC student on team Ingenuity 24220. He also participated in 4 years of FLL even going to nationals once. He enjoys playing soccer and spending times with his friends and family."
                    pronouns="he/him"
                    href="#"
                    className="flex justify-center items-center"
                />
                <Bio
                    img="/images/sherry1.png"
                    name="Sherry"
                    teamRole="Hardware"
                    text="Sherry works on the hardware and portfolio, where she leads design initiatives, active building, and portfolio development. In her free time, she enjoys reading, fencing, and exploring cool concepts."
                    pronouns="she/her"
                    href="#"
                    className="flex justify-center items-center"
                />
                <Bio
                    img="/images/vincent.jpg"
                    name="Vincent"
                    teamRole="Hardware"
                    text="Vincent is a dedicated member of Team Ingenuity, contributing his skills and passion to our projects. With a keen interest in robotics and engineering, he plays a vital role in our team's success."
                    pronouns="he/him"
                    href="#"
                    className="flex justify-center items-center"
                />
            </div>
            {/* <nav className="p-4 backdrop-blur-md bg-black/30 fixed w-full z-50"> */}
        </div>
        <div className="flex flex-col items-center w-full space-y-6 px-4">
            <h2 className="text-3xl font-bold mb-4">CAD Team</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-6">
                <Bio
                    img="/images/zilong.jpg"
                    name="Zilong"
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
            <h2 className="text-3xl font-bold mb-4">Outreach & Strategy</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mt-6">
                <Bio
                    img="/images/max.jpg"
                    name="Max"
                    teamRole="Outreach"
                    text="Max is a dedicated member of Team Ingenuity, contributing his skills and passion to our projects. With a keen interest in robotics and engineering, he plays a vital role in our team's success."
                    pronouns="he/him"
                    href="#"
                    className="flex justify-center items-center"
                />
                <Bio
                    img="/images/jonathan.jpeg"
                    name="Jonathan"
                    teamRole="Strategy"
                    text="Jonathan, a new addition to Team Ingenuity, focuses on the completion of various tasks necessary for the team, ranging from hardware roles to mission strategy. In his downtime, he enjoys associating with friends and family."
                    pronouns="he/him"
                    href="#"
                    className="flex justify-center items-center"
                />
            </div>
        </div>
        
    </div>
    </>
  );
}