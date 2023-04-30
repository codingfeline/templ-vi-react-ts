import { describe, expect, it, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Compo from './Compo'

describe('group', () => {
  test('renders learn testing', () => {
    render(<Compo />)
    const linkElement = screen.getByText(/learn testing/i)
    expect(linkElement).toBeDefined()
  })
})
