import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'

test('renders MERN Client heading', () => {
  render(<App />)
  const headingElement = screen.getByText(/MERN Client/i)
  expect(headingElement).toBeDefined()
})
