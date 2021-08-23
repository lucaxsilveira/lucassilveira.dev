// import ScrollReveal from 'scrollreveal'

import { srConfig } from '../configs'

const handleScrollReveal = async (container) => {
  if (typeof window !== 'undefined') {
    const { default: ScrollReveal } = await import('scrollreveal')
    if (ScrollReveal) {
      ScrollReveal().reveal(container.current, srConfig())
    }
  }
}

export default handleScrollReveal
