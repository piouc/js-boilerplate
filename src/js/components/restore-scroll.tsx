import { FunctionComponent, useEffect } from 'react'
import { isNotNullish } from '../utils/type-check'
import throttle from 'throttleit'

type RestoreScrollProps = {

}
export const RestoreScroll: FunctionComponent<RestoreScrollProps> = () => {
  useEffect(() => {
    const listener = throttle(() => {
      history.replaceState({...history.state, scrollY: window.scrollY}, "")
    }, 200)
    window.addEventListener('scroll', listener)
    return () => {
      window.removeEventListener('scroll', listener)
    }
  }, [])
  useEffect(() => {
    const listener = () => {
      const scrollY = history.state?.scrollY
      setTimeout(() => {
        if(isNotNullish(scrollY)){
          window.scrollTo({top: scrollY ?? 0})
        }
      }, 500)
    }
    window.addEventListener('popstate', listener)
    listener()
    return () => {
      window.removeEventListener('popstate', listener)
    }
  }, [])
  return null
}