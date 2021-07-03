import React from 'react'

import { HeadingProps } from './types'

const HeadingTitle = ({
  variant = 'span',
  title,
  mono = false,
  className,
}: HeadingProps): JSX.Element => {
  const Tag = `${variant}` as keyof JSX.IntrinsicElements

  return (
    <Tag className={`${mono ? 'mono' : ''} ${className} dark:text-white`}>
      {title}
      <span className="text-primary text-xl">.</span>
    </Tag>
  )
}

export default HeadingTitle
