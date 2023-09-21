import { useEffect, useState } from 'react'

export const useBreakpoint = (breakpoint: string) => {
  const [match, setMatch] = useState(false)
  useEffect(() => {
    const matchMedia = window.matchMedia(`(max-width: ${breakpoint})`)
    const listener = () => {
      setMatch(matchMedia.matches)
    }
    if(matchMedia.addEventListener){
      matchMedia.addEventListener('change', listener)
    } else {
      matchMedia.addListener(listener)
    }
    listener()
    return () => {
      if(matchMedia.removeEventListener){
        matchMedia.removeEventListener('change', listener)
      } else {
        matchMedia.removeListener(listener)
      }
    }
  }, [])

  return match
}