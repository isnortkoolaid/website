'use client'

import { useEffect, useState } from "react"

function CreateImage(image: string, image_alt: string, is_next: boolean = false, is_last: boolean = false) : JSX.Element {
    if (is_next) {
        return <img
        src={image}
        aria-label={image_alt}
        className="rounded-lg right-image-mask"/>
    }
    else if (is_last) {
        return <img
        src={image}
        aria-label={image_alt}
        className="rounded-lg left-image-mask"/>
    }
    else {
        return <img
        src={image}
        aria-label={image_alt}
        className="rounded-lg"/>
    }
}
export default function TextRotation() {
    const imageList = ["https://s6.imgcdn.dev/YkoqRy.jpg", "https://s6.imgcdn.dev/YkoXn2.jpg"]
    const altList = ["Image of Team Ingenuity as of 2025", "Image of robot build in progress"]
    // const [lastImage, setLastImage] = useState(imageList.length-1)
    // const [nextImage, setNextImage] = useState(1)
    const [currentImage, setCurrentImage] = useState(0) //this is the index
    // const [intializedBefore, setInitialized] = useState(false)
    useEffect(() => {
        const interval = setInterval(() => {
                // if (!intializedBefore) {
                //     // setCurrentImage(0)
                //     setInitialized(true)
                // }
                // else if (imageList.length === 1) {
                //     setLastImage(0)
                //     setNextImage(0)
                // }
                if (currentImage >= imageList.length - 1) {
                    // setLastImage(currentImage)
                    // setNextImage(1)
                    setCurrentImage(0)
                }
                else {
                    // setLastImage(currentImage)
                    // setNextImage(currentImage+2)
                    setCurrentImage(currentImage+1)
                    
                }
            }, 4000
        );
        return () => clearInterval(interval);
    })
    return <>
        <div className="relative flex justify-center items-center overflow-hidden w-full h-full">            
            {/* {CreateImage(imageList[lastImage], altList[lastImage], false, true)} */}
            {CreateImage(imageList[currentImage], altList[currentImage])}
            {/* {CreateImage(imageList[nextImage], altList[nextImage], true, false)} */}
        </div>
    </>
}