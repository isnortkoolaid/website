// 'use client' is required because this component uses useEffect and useState
// to auto-cycle through images on a timer.
'use client'

import { useEffect, useState, useMemo } from "react"
import Image from 'next/image'

// Inline SVG data URI used as a blur placeholder while the real image loads.
// Prevents layout shift by reserving the correct aspect ratio (400x225) with
// a dark gray rectangle.
const placeholderBlur = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect fill='%23222' width='400' height='225'/%3E%3C/svg%3E"

// NOTE: The component is named TextRotation for legacy reasons, but it actually
// rotates through a set of images (not text).
export default function TextRotation() {
    // Memoized array of image paths that cycle in the hero section.
    const imageList = useMemo(() => [
        "/images/compressed-untitled4.jpg", 
        "/images/compressed-untitled2.jpg", 
        "/images/compressed-Image_20251004_202757_942.jpg"
    ], [])
    
    // Memoized alt text descriptions corresponding to each image above.
    const altList = useMemo(() => [
        "Image of Team Ingenuity as of 2025", 
        "Image of robot build in progress", 
        "Image of Team Ingenuity fundraising by selling food during the 2025 China Day"
    ], [])
    
    // currentImage: index into imageList/altList for the currently displayed image
    const [currentImage, setCurrentImage] = useState(0)
    // isFadingIn / isFadingOut: drive CSS fade animation classes on the Image
    const [isFadingIn, setFadingIn] = useState(false)
    const [isFadingOut, setFadingOut] = useState(false)
    
    // Every 6 seconds, trigger the transition sequence:
    //   1. Start fade-out animation (1 second)
    //   2. Once faded out, swap to the next image and start fade-in (1 second)
    // Cleanup clears the interval when the component unmounts.
    useEffect(() => {
        const interval = setInterval(() => {
            setFadingOut(true)
            setTimeout(() => {
                setFadingOut(false)
                setCurrentImage(prev => (prev + 1) % imageList.length)
                setFadingIn(true)
                setTimeout(() => setFadingIn(false), 1000)
            }, 1000)
        }, 6000);
        
        return () => clearInterval(interval);
    }, [imageList.length])
    
    return <>
        {/* Container uses aspect-video ratio with overflow hidden.
            The "logo-gradient" class (defined in globals.css) adds a
            hover glow effect on desktop. */}
        <div className="logo-gradient relative w-full max-w-[950px] aspect-video flex justify-center items-center overflow-hidden bg-gray-900">
            {/* Image uses fill mode with responsive sizes for different breakpoints.
                priority + fetchPriority="high" marks this as an LCP candidate.
                The blur placeholder is shown while the image loads. */}
            <Image
                src={imageList[currentImage]}
                alt={altList[currentImage]}
                className={`rounded-lg object-cover w-full h-full ${
                    isFadingOut ? "animate-fade-out" :
                    isFadingIn ? "animate-fade-in" :
                    ""
                }`}
                key={currentImage}
                quality={70}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 950px"
                priority
                fetchPriority="high"
                placeholder="blur"
                blurDataURL={placeholderBlur}
                loading="eager"
            />
        </div>
    </>
}