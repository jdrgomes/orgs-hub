import React from 'react'
import { render, screen } from '@testing-library/react'

import { Heading } from './Heading'

describe('Heading component', () => {
  it('should render the heading', () => {
    render(<Heading title="Organizations" />)

    expect(screen.getByText('Organizations')).toBeInTheDocument()
  })
})
