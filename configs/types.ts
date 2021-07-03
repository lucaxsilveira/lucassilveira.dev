export interface ScrollProps {
  origin: string
  distance: string
  duration: number
  delay: number
  rotate: { x: number; y: number; z: number }
  opacity: number
  scale: number
  easing: string
  mobile: boolean
  reset: boolean
  useDelay: string
  viewFactor: number
  viewOffset: { top: number; right: number; bottom: number; left: number }
}
