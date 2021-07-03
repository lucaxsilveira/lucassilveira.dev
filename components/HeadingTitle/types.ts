type Sizes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'

export interface HeadingProps {
  title: string
  mono?: boolean
  className?: string
  variant?: Sizes
}
