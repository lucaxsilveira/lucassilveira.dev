import { useEffect, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Hero: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 1000)
    return () => clearTimeout(timeout)
  }, [])

  const intro = <p className="mb-0 text-primary mono">Hi, my name is</p>
  const name = <h1 className="dark:text-dark-text">Lucas Silveira</h1>
  const code = <h3 className="subtitle text-gray-400">Front-end developer</h3>

  const items = [intro, name, code]

  return (
    <div className="flex flex-col justify-center h-screen">
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, index) => (
            <CSSTransition key={index} classNames="fade-up" timeout={500}>
              <div style={{ transitionDelay: `${index + 1}00ms` }}>{item}</div>
            </CSSTransition>
          ))}
      </TransitionGroup>
    </div>
  )
}

export default Hero
