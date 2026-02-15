// 'use client' is required because this component uses useEffect and useState
// to drive a typewriter animation.
'use client'

import { useEffect, useState, useMemo } from "react"

export default function TextRotation() {
  // Identity words that cycle in the hero heading ("We are Ingenuity.", "We are a team.", etc.)
  const words = useMemo(() => ["Ingenuity.", "a team.", "builders.", "innovators.", "leaders.", "coders."], [])

  // phase: controls which part of the animation is active (typing / pausing / deleting)
  // currentIndex: which word in the array is being displayed
  // currentChars: how many characters of the current word are visible
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentChars, setCurrentChars] = useState(0)

  // State machine that runs on every state change:
  useEffect(() => {
    const word = words[currentIndex]
    let timeout: ReturnType<typeof setTimeout>

    // "typing" phase: adds one character at a time with a random delay
    // between 50-250ms to simulate natural typing speed. Once the full
    // word is typed, transitions to the "pausing" phase.
    if (phase === "typing") {
      if (currentChars < word.length) {
        timeout = setTimeout(() => setCurrentChars(currentChars + 1), Math.random() * (200 - 50 +1) + 50) // typing speed
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1500)
      }
    }

    // "pausing" phase: holds the completed word on screen for 1.5 seconds
    // before transitioning to the "deleting" phase.
    if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 1500)
    }

    // "deleting" phase: removes one character at a time. Once the word is
    // fully deleted, advances to the next word in the array (wrapping
    // around) and starts the "typing" phase again.
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

  // aria-label provides the full current word to screen readers even while the
  // text is partially typed, ensuring accessibility (WCAG 1.1.1). The visible
  // text shows only the characters typed so far.
  return <span aria-label={words[currentIndex]}>{words[currentIndex].slice(0, currentChars)}</span>
}
