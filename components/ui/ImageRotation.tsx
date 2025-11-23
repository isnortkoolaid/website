'use client'

import { useEffect, useState } from "react"
import Image from 'next/image'

// function CreateImage(image: string, image_alt: string, is_fade: boolean = false, is_last: boolean = false) : JSX.Element {
//     if (is_fade) {
//         return <img
//         src={image}
//         aria-label={image_alt}
//         className={`rounded-lg animate-fade-in}`}/>
//     }
//     // else if (is_last) {
//     //     return <img
//     //     src={image}
//     //     aria-label={image_alt}
//     //     className={"rounded-lg opacity-0"}/>
//     // }
//     else {
//         return <img
//         src={image}
//         aria-label={image_alt}
//         className="rounded-lg"
//         key={}/>
//     }
// }
export default function TextRotation() {
    const imageList = ["/images/compressed-untitled4.jpg", "/images/compressed-untitled2.jpg", "/images/compressed-Image_20251004_202757_942.jpg"]
    const altList = ["Image of Team Ingenuity as of 2025", "Image of robot build in progress", "Image of Team Ingenuity fundraising by selling food during the 2025 China Day"]
    // const [nextImage, setNextImage] = useState(1)
    const [currentImage, setCurrentImage] = useState(0) //this is the index
    // const [lastImage, setLastImage] = useState(0)
    const [isFadingIn, setFadingIn] = useState(false)
    const [isFadingOut, setFadingOut] = useState(false)
    // const [intializedBefore, setInitialized] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
            setFadingOut(true)
            setTimeout(() => {
                setFadingOut(false)
                setCurrentImage(prev => (prev + 1) % imageList.length)
                setFadingIn(true)
                setTimeout(() => setFadingIn(false), 1000)
            }, 1000)

                // setTimeout(() => {setFadingOut(false); setFadingIn(true)}, 1000)
                // if (!intializedBefore) {
                //     // setCurrentImage(0)
                //     setInitialized(true)
                // }
                // else if (imageList.length === 1) {
                //     setLastImage(0)
                //     setNextImage(0)
                // }
                // if (currentImage >= imageList.length - 1) {
                //     // setLastImage(currentImage)
                //     // setNextImage(1)
                //     setCurrentImage(0)
                // }
                // else {
                //     // setLastImage(currentImage)
                //     // setNextImage(currentImage+2)
                //     setCurrentImage(currentImage+1)
                    
                // }
            }, 6000
        );
        return () => clearInterval(interval);
    }, [currentImage])
    return <>
    <div className="logo-gradient relative w-full max-w-[1000px] min-h-[600px] flex justify-center items-center overflow-hidden">            {/* {CreateImage(imageList[lastImage], altList[lastImage], false, true)} */}
            <Image
                src={imageList[currentImage]}
                alt={altList[currentImage]}
                className={`rounded-lg ${
                    isFadingOut ? "animate-fade-out" :
                    isFadingIn ? "animate-fade-in" :
                    ""
                }`}
                key={currentImage}
                quality={90}
                fill
            />
            {/* {CreateImage(imageList[lastImage], altList[lastImage], isFading, true)} */}
            {/* {CreateImage(imageList[currentImage], altList[currentImage], isFading, false)} */}
            {/* {CreateImage(imageList[nextImage], altList[nextImage], true, false)} */}
        </div>
    </>
}