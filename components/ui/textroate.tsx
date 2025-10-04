'use client'

import { useEffect, useState } from "react"

export default function TextRotation() {
  const words = ["Ingenuity.", "a team.", "builders.", "innovators.", "leaders.", "coders."]

  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentChars, setCurrentChars] = useState(0)

  useEffect(() => {
    const word = words[currentIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (phase === "typing") {
      if (currentChars < word.length) {
        timeout = setTimeout(() => setCurrentChars(currentChars + 1), Math.random() * (200 - 50 +1) + 50) // typing speed
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1500)
      }
    }

    if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 1500)
    }

    if (phase === "deleting") {
      if (currentChars > 0) {
        timeout = setTimeout(() => setCurrentChars(currentChars - 1), Math.random() * (200 - 50 +1) + 50)
      } else {
        timeout = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % words.length)
          setPhase("typing")
        }, 300)
      }
    }

    return () => clearTimeout(timeout)
  }, [phase, currentChars, currentIndex, words])

  return <span aria-label={words[currentIndex]}>{words[currentIndex].slice(0, currentChars)}</span>
}
