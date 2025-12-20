'use client'

import { useEffect, useState, useMemo } from "react"
import Image from 'next/image'

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
        <div className="logo-gradient relative w-full max-w-[950px] aspect-video flex justify-center items-center overflow-hidden">
            <Image
                src={imageList[currentImage]}
                alt={altList[currentImage]}
                className={`rounded-lg object-cover ${
                    isFadingOut ? "animate-fade-out" :
                    isFadingIn ? "animate-fade-in" :
                    ""
                }`}
                key={currentImage}
                quality={85}
                fill
                sizes="(max-width: 950px) 100vw, 950px"
                priority
            />
        </div>
    </>
}