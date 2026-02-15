/**
 * Bio -- server component (no 'use client' directive).
 * Rendered entirely on the server so the markup is included in the
 * initial HTML response, which benefits SEO and first-paint performance.
 */

import Image from 'next/image'
import { Card } from "@/components/ui/card";
import Link from "next/link";

/**
 * Props for the Bio component:
 * @param img       - Path to the member's headshot image (relative to /public).
 * @param name      - Display name of the team member.
 * @param teamRole  - The member's role on the team (e.g. "Captain", "Programmer").
 * @param text      - A short biography paragraph.
 * @param pronouns  - The member's pronouns (e.g. "he/him").
 * @param href      - External link for "Learn more". Pass "#" to hide the link entirely.
 * @param className - Optional layout classes injected by the parent (e.g. grid sizing).
 */
export default function Bio({ img, name, teamRole, text, pronouns, href, className }: {
    img: string;
    name: string;
    teamRole: string;
    text: string;
    pronouns: string;
    href: string;
    className?: string;
}) {
    return (
        <div className={className}>
            {/* shadcn/ui Card with hover effects: orange border glow,
                subtle shadow lift, and a gradient background shift. */}
            <Card className="h-full w-full max-w-md bg-zinc-900 border-zinc-700 hover:border-orange-500/50 hover:shadow-lg duration-500 overflow-hidden hover:bg-gradient-to-br from-zinc-900 to-zinc-800 transition-all">
                {/* Layout: stacks vertically on mobile (flex-col),
                    switches to horizontal on desktop (md:flex-row). */}
                <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6">
                    {/* Circular headshot -- fixed at 128x128 pixels. */}
                    <Image
                        src={img}
                        alt={`Image of ${name}`}
                        width={128}
                        height={128}
                        className="aspect-square rounded-full object-cover w-32 h-32"
                    />
                    <div className="flex flex-col text-center md:text-left">
                        <h3 className="text-xl font-bold text-white">{name}</h3>
                        <p className="text-zinc-400">{pronouns}</p>
                        <p className="text-orange-400 font-semibold mt-1">{teamRole}</p>
                        <p className="mt-4 text-zinc-300">{text}</p>
                        {/* "Learn more" link -- only rendered when href is not "#".
                            The sr-only span provides screen readers with the member's
                            name so the link text is unambiguous (WCAG 2.4.4). */}
                        {href !== "#" && (
                            <Link href={href} className="text-blue-400 hover:underline mt-2 inline-flex items-center px-1 py-0.5">
                                Learn more<span className="sr-only"> about {name}</span>
                            </Link>
                        )}
                    </div>
                </div>
            </Card>
        </div>
    );
}