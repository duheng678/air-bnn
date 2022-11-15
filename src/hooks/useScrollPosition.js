import { useEffect, useState } from 'react'
import { throttle } from 'underscore'

export const useScrollPosition = () => {
  const [scrollX, setScrollX] = useState()
  const [scrollY, setScrollY] = useState()
  useEffect(() => {
    const searchShowHandle = throttle(function () {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)
    window.addEventListener('scroll', searchShowHandle)
    return () => {
      window.removeEventListener('scroll', searchShowHandle)
    }
  }, [])
  return { scrollX, scrollY }
}
