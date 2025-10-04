'use client'

import { useEffect, useState } from "react"

export default function TextRotation() {
    const imageList = ["https://s6.imgcdn.dev/YkoqRy.jpg"]
    const altList = ["Image of Team Ingenuity as of 2025"]
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
        <div>
            <img
            src={currentImage === 0 ? imageList[imageList.length-1] : imageList[currentImage]}>
            </img>
            <img 
            src={imageList[currentImage]} 
            aria-label={altList[currentImage]}
            className="rounded-lg"
            ></img>
        </div>
    </>
}