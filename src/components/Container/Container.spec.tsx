import React from 'react'
import { render } from '@testing-library/react'

import { Container } from './Container'

describe('Container', () => {
  it('Should be render Container component correctly', () => {
    const { getByTestId } = render(
      <Container>
        <h1>container content</h1>
      </Container>
    )

    expect(getByTestId('Container')).toBeTruthy()
  })

  it('Should be render content correctly', () => {
    const { getByTestId } = render(
      <Container>
        <h1>children element</h1>
      </Container>
    )

    expect(getByTestId('Container').textContent).toEqual('children element')
  })
})
