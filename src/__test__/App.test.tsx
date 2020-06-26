import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, RenderResult } from '@testing-library/react';
import 'jest-canvas-mock';
import App from '../App';

const setup = (): RenderResult =>
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

describe('App', () => {
  it('should have a theme button', () => {
    setup();

    const themeButton = screen.getByRole('button', { name: /current: \?/i });
    expect(themeButton).toBeInTheDocument();
  });

  it('should have a sidebar toggle button', () => {
    setup();

    const toggleButton = screen.getByRole('button', { name: /toggle/i });
    expect(toggleButton).toBeInTheDocument();
  });
});
