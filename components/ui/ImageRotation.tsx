'use client'

import next from "next"
import { useEffect, useState } from "react"

function CreateImage(image: string, image_alt: string) : JSX.Element {
    return <img
    src={image}
    aria-label={image_alt}
    className="rounded-lg"/>
}
export default function TextRotation() {
    const imageList = ["https://s6.imgcdn.dev/YkoqRy.jpg"]
    const altList = ["Image of Team Ingenuity as of 2025"]
    const [lastImage, setLastImage] = useState(imageList.length-1)
    const [nextImage, setNextImage] = useState(1)
    const [currentImage, setCurrentImage] = useState(0) //this is the index
    const [intializedBefore, setInitialized] = useState(false)
    useEffect(() => {
        setInterval(() => {
                if (!intializedBefore) {
                    // setCurrentImage(0)
                    setInitialized(true)
                }
                else if (currentImage >= imageList.length - 1) {
                    setCurrentImage(0)
                }
                else {
                    setCurrentImage(currentImage+1)
                }
            }, 3000
        )
    }, [])
    return <>
        <div className="overflow-hidden">
            {CreateImage(imageList[lastImage], altList[lastImage])}
            {CreateImage(imageList[currentImage], altList[currentImage])}
            {CreateImage(imageList[nextImage], altList[nextImage])}

        </div>
    </>
}