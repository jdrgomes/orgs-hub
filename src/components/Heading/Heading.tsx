import React from 'react'
import { Title, Description } from './style'

type HeadingProps = {
  title: string
  description?: string
}

export function Heading({ title, description }: HeadingProps) {
  return (
    <div data-testid="Heading">
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </div>
  )
}
