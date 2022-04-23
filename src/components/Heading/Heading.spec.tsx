import { render } from '@testing-library/react'

import { Heading } from './Heading'

describe('Heading component', () => {
  it('Should be render the component', () => {
    const { getByTestId } = render(<Heading title="Organizations" />)

    expect(getByTestId('Heading')).toBeTruthy()
  })
})
