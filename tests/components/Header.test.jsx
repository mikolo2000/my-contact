import React from 'react'
import { render, screen } from '@testing-library/react'
import { it, expect, describe } from 'vitest'
import Header from '../../src/components/header'
import "@testing-library/jest-dom/vitest";

describe('Header', () => {
  it('should display Header on Loading', () => {
    render (<Header/>);

    expect(screen.getByRole("heading")).toHaveTextContent(/contact/i);

  })
  
})