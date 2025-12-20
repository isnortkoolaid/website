'use client'

import { useEffect, useState, useMemo } from "react"
import Image from 'next/image'

const placeholderBlur = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 225'%3E%3Crect fill='%23222' width='400' height='225'/%3E%3C/svg%3E"

export default function TextRotation() {
    const imageList = useMemo(() => [
        "/images/compressed-untitled4.jpg", 
        "/images/compressed-untitled2.jpg", 
        "/images/compressed-Image_20251004_202757_942.jpg"
    ], [])
    
    const altList = useMemo(() => [
        "Image of Team Ingenuity as of 2025", 
        "Image of robot build in progress", 
        "Image of Team Ingenuity fundraising by selling food during the 2025 China Day"
    ], [])
    
    const [currentImage, setCurrentImage] = useState(0)
    const [isFadingIn, setFadingIn] = useState(false)
    const [isFadingOut, setFadingOut] = useState(false)
    
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
        <div className="logo-gradient relative w-full max-w-[950px] aspect-video flex justify-center items-center overflow-hidden bg-gray-900">
            <Image
                src={imageList[currentImage]}
                alt={altList[currentImage]}
                className={`rounded-lg object-cover w-full h-full ${
                    isFadingOut ? "animate-fade-out" :
                    isFadingIn ? "animate-fade-in" :
                    ""
                }`}
                key={currentImage}
                quality={75}
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