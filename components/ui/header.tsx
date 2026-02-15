'use client'

import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        // { name: 'Projects', href: '/projects' },
        { name: 'Join', href: '/#interested' },
        { name: 'Contact', href: '/#contact' },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('/#')) {
            e.preventDefault();
            const targetId = href.substring(2); // Remove '/#'
            
            if (pathname !== '/') {
                // Navigate to home first, then scroll
                router.push('/');
                setTimeout(() => {
                    scrollToSection(targetId);
                }, 100);
            } else {
                // Already on home page, just scroll
                scrollToSection(targetId);
            }
        }
    };

    return (
    <nav className="p-4 backdrop-blur-md bg-gradient-to-b from-orange-500/40 from-0% via-orange-500/20 via-20% to-black to-100% fixed w-full z-50">
            <div className="container mx-auto flex justify-between items-center">
            <Image 
                src="/images/logo.png" 
                alt="Team Ingenuity Logo"
                width={64}
                height={64}
                className="h-16 w-auto object-contain"
                priority
                style={{ width: 'auto', height: 64 }}
            />
            <div className="flex space-x-2 sm:space-x-4 md:space-x-6">
                {navItems.map((item) => (
                <Link 
                    key={item.name} 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                >
                    <Button variant="ghost" className="text-gray-300 bg-gray-700/20 hover:bg-gray-700/20 hover:text-gray-300 lg:hover:text-white lg:hover:bg-gray-700 text-sm">
                    {item.name}
                    </Button>
                </Link>
                ))}
            </div>
            </div>
        </nav>
    );
}