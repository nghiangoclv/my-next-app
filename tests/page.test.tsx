import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import OceanPage from '@/pages/ocean';

describe('Ocean Page', () => {
  it('renders the sky with the sun emoji', () => {
    render(<OceanPage />);

    const sun = screen.getByText('☀️');
    expect(sun).toBeInTheDocument();
  });
  
  it('renders the correct ocean creatures', () => {
    render(<OceanPage />);

    const creatures = screen.getAllByText(/🐟|🐠|🐳/);
    expect(creatures).toHaveLength(3);
  });

  it('renders the sand with the beach emoji', () => {
    render(<OceanPage />);

    const sand = screen.getByText('🏖️');
    expect(sand).toBeInTheDocument();
  });

  it('checks if clicking sand triggers the correct alert', () => {
    render(<OceanPage />);

    const sand = screen.getByText('🏖️');
    window.alert = jest.fn(); // Mock the alert function
    sand.click();
    expect(window.alert).toHaveBeenCalledWith('You clicked the sand!');
  });
});
