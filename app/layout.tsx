import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

// -- Font declarations --
// Each font is loaded with display: "swap" so text remains visible during
// font loading. The `variable` property injects a CSS custom property that
// Tailwind and global CSS can reference.

// Inter -- used for headings throughout the site
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Plus Jakarta Sans -- used as the primary body/paragraph font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

// Geist Sans -- locally hosted variable font used as a sans-serif fallback
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

// Geist Mono -- locally hosted variable font used for monospace/code text
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

// Default site-wide metadata. Individual pages can override these values
// by exporting their own `metadata` object (e.g. "About -- Ingenuity").
export const metadata: Metadata = {
  title: "Ingenuity",
  description: "The website of the FTC team 24220 Ingenuity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Performance: resolve the DNS for the external media host early */}
        <link rel="dns-prefetch" href="https://files.catbox.moe" />
        {/* Performance: preload the hero image so it is fetched before the
            browser discovers it in CSS/JS, reducing Largest Contentful Paint */}
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=%2Fimages%2Fcompressed-untitled4.jpg&w=1080&q=70"
          type="image/webp"
        />
      </head>
      {/* Inject all four font CSS variables onto <body> so every descendant
          can use them via Tailwind classes or custom CSS. `antialiased`
          enables font smoothing for crisper text rendering. */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${plusJakartaSans.variable} antialiased`}
      >
        {/* Skip link (WCAG 2.2 AA): visually hidden by default, becomes
            visible on keyboard focus so users can jump straight to <main>
            without tabbing through the entire navigation. */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
