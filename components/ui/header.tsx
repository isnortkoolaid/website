// 'use client' is required because this component uses useState, useEffect,
// useRef, and event handlers -- all of which need a browser environment.
'use client'

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { usePathname, useRouter } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const router = useRouter();

    // Whether the mobile fullscreen nav overlay is visible.
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Ref to the hamburger button so we can restore focus to it when the
    // menu closes (required for keyboard / screen-reader users).
    const hamburgerRef = useRef<HTMLButtonElement>(null);

    // Ref to the first link inside the overlay so we can move focus there
    // when the menu opens, giving keyboard users an immediate target.
    const firstLinkRef = useRef<HTMLAnchorElement>(null);

    // Tracks whether the menu has been opened at least once. This prevents
    // the focus-visible ring from appearing on the hamburger button on
    // initial page load (before the user has ever interacted with the menu).
    const hasOpenedRef = useRef(false);

    // ---------- Focus management (WCAG 2.4.3) ----------
    // When the menu opens: mark it as "has been opened" and, after a short
    // delay (to let the slide-up animation start), move focus to the first
    // navigation link.
    // When the menu closes (and has been opened before): restore focus back
    // to the hamburger button so the user doesn't lose their place.
    useEffect(() => {
        if (mobileMenuOpen) {
            hasOpenedRef.current = true;
            setTimeout(() => firstLinkRef.current?.focus(), 100);
        } else if (hasOpenedRef.current) {
            hamburgerRef.current?.focus();
        }
    }, [mobileMenuOpen]);
    
    // Site navigation links. Items with hash hrefs (e.g. "/#interested")
    // scroll to sections on the home page; plain paths navigate normally.
    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        // { name: 'Projects', href: '/projects' },
        { name: 'Join', href: '/#interested' },
        { name: 'Contact', href: '/#contact' },
    ];

    // Smooth-scroll the viewport to the element with the given DOM id.
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    // Handles click on any nav link. Three cases:
    //  1. Home link ("/") while already on "/" -- smooth-scroll to top.
    //  2. Home link ("/") from another page -- navigate to "/" then scroll
    //     to top after a short delay so the page has time to mount.
    //  3. Hash link ("/#section") -- if already on "/" scroll directly to
    //     the target section; otherwise navigate to "/" first, then scroll
    //     after a delay.
    // In all cases the mobile menu is closed after the action.
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

    // Fullscreen overlay classes. Fades in/out via opacity transition.
    // pointer-events-none when closed so the invisible overlay doesn't
    // block clicks on page content underneath.
    const overlayClass = `fixed inset-0 z-40 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`;

    // Inner container for nav links. Slides up into view (translate-y-0)
    // when the menu opens; slides down and fades out when it closes.
    const innerClass = `flex flex-col items-center space-y-8 transition-all duration-500 ease-in-out ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`;

    return (
    <>
    {/*
      Navigation bar -- fixed to the top of the viewport with a gradient
      background that fades from orange to black. When the menu is open
      the z-index is raised to z-[60] so the bar sits above the overlay
      (z-40), keeping the hamburger button accessible.
    */}
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
            {/*
              Hamburger button -- three <span> bars that animate into an X
              when the menu is open (rotate + translate transforms).
              - aria-expanded tells screen readers the current open/closed state.
              - aria-controls links to the "nav-menu" overlay element.
              - focus-visible:ring provides a visible focus indicator for
                keyboard users (WCAG 2.4.7).
            */}
            <button
                ref={hamburgerRef}
                className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded relative z-10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="nav-menu"
            >
                {/* Top bar -- rotates 45deg and translates down to form the X */}
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out will-change-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                {/* Middle bar -- fades out when menu is open */}
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out will-change-transform ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                {/* Bottom bar -- rotates -45deg and translates up to form the X */}
                <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out will-change-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
            </div>
        </nav>

    {/*
      Fullscreen overlay menu.
      - role="dialog" gives screen readers proper semantics for a modal-like
        overlay.
      - aria-hidden hides the overlay from the accessibility tree when closed.
      - Each link's tabIndex is set to -1 when the menu is closed so they are
        removed from the tab order entirely, preventing keyboard users from
        tabbing into invisible links (WCAG 1.3.2 -- meaningful sequence).
      - transitionDelay on each link is staggered by index * 75ms to create
        a cascading fade-in animation effect when the menu opens.
    */}
    <div
        id="nav-menu"
        role="dialog"
        aria-label="Navigation menu"
        aria-hidden={!mobileMenuOpen}
        className={overlayClass}
    >
        <div className={innerClass}>
            {navItems.map((item, index) => (
                <Link
                    key={item.name}
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="transition-all duration-300 ease-in-out focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:rounded"
                    style={{ transitionDelay: mobileMenuOpen ? `${index * 75}ms` : '0ms' }}
                    tabIndex={mobileMenuOpen ? 0 : -1}
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