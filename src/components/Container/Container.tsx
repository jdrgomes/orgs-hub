import React, { ReactNode } from 'react'

import { ContainerWrapper } from './style'

type ContainerProps = {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return <ContainerWrapper data-testid="Container">{children}</ContainerWrapper>
}
