'use client'

import { useEffect, useState } from "react"

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
    const imageList = ["https://s6.imgcdn.dev/YkoqRy.jpg", "https://s6.imgcdn.dev/YkoXn2.jpg"]
    const altList = ["Image of Team Ingenuity as of 2025", "Image of robot build in progress"]
    // const [nextImage, setNextImage] = useState(1)
    const [currentImage, setCurrentImage] = useState(0) //this is the index
    const [lastImage, setLastImage] = useState(0)
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
            }, 4000
        );
        return () => clearInterval(interval);
    }, [currentImage])
    return <>
        <div className="relative flex justify-center items-center overflow-hidden w-full h-full">            
            {/* {CreateImage(imageList[lastImage], altList[lastImage], false, true)} */}
            <img
                src={imageList[currentImage]}
                aria-label={altList[currentImage]}
                className={`rounded-lg ${
                    isFadingOut ? "animate-fade-out" :
                    isFadingIn ? "animate-fade-in" :
                    ""
                }`}

                key={currentImage}
            />
            {/* {CreateImage(imageList[lastImage], altList[lastImage], isFading, true)} */}
            {/* {CreateImage(imageList[currentImage], altList[currentImage], isFading, false)} */}
            {/* {CreateImage(imageList[nextImage], altList[nextImage], true, false)} */}
        </div>
    </>
}