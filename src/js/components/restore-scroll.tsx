import { FunctionComponent, useEffect } from 'react'
import { throttle } from 'throttle-debounce'
import { isNotNullish } from '../utils/type-check'

type RestoreScrollProps = {

}
export const RestoreScroll: FunctionComponent<RestoreScrollProps> = () => {
  useEffect(() => {
    const listener = throttle(200, () => {
      history.replaceState({...history.state, scrollY: window.scrollY}, "")
    }, {})
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