import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App'

describe('<App />', () => {
  afterEach(cleanup)

  it('renders without crashing', async () => {
    const { findByTestId } = render(<App />)
    const app = await findByTestId('app')

    expect(app).toBeInTheDocument()
  })
})
