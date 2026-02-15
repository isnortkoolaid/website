import Image from 'next/image'
import { Card } from "@/components/ui/card";
import Link from "next/link";

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
            <Card className="h-full w-full max-w-md bg-zinc-900 border-zinc-700 hover:border-orange-500/50 hover:shadow-lg duration-500 overflow-hidden hover:bg-gradient-to-br from-zinc-900 to-zinc-800 transition-all">
                <div className="flex flex-col md:flex-row items-center md:items-start p-6 gap-6">
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