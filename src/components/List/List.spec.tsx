import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

import { mockProps } from './mock-props'
import { List } from './List'

describe('List/>', () => {
  it('should render list 2 orgs', () => {
    render(
      <BrowserRouter>
        <List orgs={mockProps} />
      </BrowserRouter>
    )

    expect(mockProps.length).toBe(2)
  })
})
