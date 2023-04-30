import { describe, expect, it, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('group', () => {
  render(<Header />)
  it('renders learn testing', () => {
    const linkElement = screen.getByText(/header/i)
    expect(linkElement).toBeDefined()
  })

  it('renders home', () => {
    const linkElement = screen.getByText(/home/i)
    expect(linkElement).toBeDefined()
  })
})
