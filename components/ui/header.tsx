'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
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
        if (href === '/') {
            e.preventDefault();
            if (pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                router.push('/');
                setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
            }
        } else if (href.startsWith('/#')) {
            e.preventDefault();
            const targetId = href.substring(2);
            
            if (pathname !== '/') {
                router.push('/');
                setTimeout(() => {
                    scrollToSection(targetId);
                }, 100);
            } else {
                scrollToSection(targetId);
            }
        }
        setMobileMenuOpen(false);
    };

    const overlayClass = `fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`;

    const innerClass = `flex flex-col items-center space-y-8 transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`;

    return (
    <>
    <nav className={`p-4 backdrop-blur-md bg-gradient-to-b from-orange-500/40 from-0% via-orange-500/20 via-20% to-black to-100% fixed w-full ${mobileMenuOpen ? 'z-[60]' : 'z-50'}`}>
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
            {/* Hamburger button */}
            <button
                className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none relative z-10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out will-change-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out will-change-transform ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out will-change-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
            </div>
        </nav>

    {/* Fullscreen overlay menu */}
    <div className={overlayClass}>
        <div className={innerClass}>
            {navItems.map((item, index) => (
                <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="transition-all duration-300 ease-in-out"
                    style={{ transitionDelay: mobileMenuOpen ? `${index * 75}ms` : '0ms' }}
                >
                    <span className="text-3xl font-bold text-white hover:text-orange-400 transition-colors duration-200">
                        {item.name}
                    </span>
                </Link>
            ))}
        </div>
    </div>
    </>
    );
}