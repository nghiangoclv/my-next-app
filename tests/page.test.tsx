import OceanPage from '@/pages/ocean';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Ocean Page', () => {
  it('renders the sky with the sun emoji', () => {
    render(<OceanPage />);

    const sun = screen.getByText('☀️');
    expect(sun).toBeInTheDocument();
  });

  it('renders the sand with the beach emoji', () => {
    render(<OceanPage />);

    const beach = screen.getByText('🏖️');
    expect(beach).toBeInTheDocument();
  });

  it('handles sand click event', () => {
    render(<OceanPage />);

    const sand = screen.getByText('🏖️');
    window.alert = jest.fn(); // Mock the alert function
    fireEvent.click(sand);
    expect(window.alert).toHaveBeenCalledWith('You clicked the sand!');
  });

  it('renders one of the ocean creatures (🐟, 🐠, or 🐳)', () => {
    render(<OceanPage />);

    const possibleCreatures = ['🐟', '🐠', '🐳'];
    const creature = screen.getByText((content, element) =>
      possibleCreatures.includes(content)
    );

    expect(creature).toBeInTheDocument();
  });

  it('renders two wave divs with correct classes and animations', () => {
    render(<OceanPage />);

    const waves = screen.getAllByClassName(/wave-animation/);
    expect(waves).toHaveLength(2);

    expect(waves[0]).toHaveClass('wave-animation');
    expect(waves[1]).toHaveClass('wave-animation-second');
  });

  it('renders the ocean section with the correct background', () => {
    render(<OceanPage />);

    const ocean = screen.getByRole('region', { name: 'Ocean' }); // Add role="region" and aria-label="Ocean" for accessibility in your OceanPage component
    expect(ocean).toHaveStyle('background-color: rgb(59 130 246)'); // Tailwind bg-blue-500
  });
});
