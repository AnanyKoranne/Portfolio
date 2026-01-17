'use client'

import { SpiralAnimation } from "@/components/ui/spiral-animation"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const SpiralSplash = () => {
  const router = useRouter()
  const [animationComplete, setAnimationComplete] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    // Check if we've already shown the splash
    const hasSeenSplash = typeof window !== 'undefined' && sessionStorage.getItem('hasSeenSplash')

    if (hasSeenSplash) {
      router.replace('/dashboard')
    } else {
      setShouldRender(true)
    }
  }, [router])

  // Auto-navigate to dashboard after animation completes
  useEffect(() => {
    if (animationComplete) {
      // Mark as seen
      sessionStorage.setItem('hasSeenSplash', 'true')

      // Wait 100ms, then navigate
      const navigationTimer = setTimeout(() => {
        router.push('/dashboard')
      }, 100)

      return () => clearTimeout(navigationTimer)
    }
  }, [animationComplete, router])

  // Animation completes at 15 seconds (the GSAP timeline duration)
  useEffect(() => {
    if (!shouldRender) return

    const animationTimer = setTimeout(() => {
      setAnimationComplete(true)
    }, 15000)

    return () => clearTimeout(animationTimer)
  }, [shouldRender])

  if (!shouldRender) return <div className="fixed inset-0 w-full h-full bg-black" />

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-black">
      {/* Spiral Animation Background */}
      <div className="absolute inset-0">
        <SpiralAnimation />
      </div>

      {/* Skip Button - appears after animation starts */}
      <div
        className={`
          absolute top-8 right-8 z-20
          transition-all duration-500 ease-out
          ${!animationComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        <button
          onClick={() => {
            setAnimationComplete(true)
          }}
          className="
            text-white text-sm tracking-widest uppercase font-light
            border border-white px-4 py-2
            transition-all duration-300
            hover:bg-white hover:text-black
          "
        >
          Skip
        </button>
      </div>

      {/* Loading text indicator */}
      <div
        className={`
          absolute bottom-8 left-1/2 -translate-x-1/2 z-10
          transition-all duration-500 ease-out
          ${!animationComplete ? 'opacity-50' : 'opacity-0'}
        `}
      >
        <p className="text-white text-xs tracking-[0.2em] uppercase">
          Loading Portfolio...
        </p>
      </div>
    </div>
  )
}

export { SpiralSplash }
