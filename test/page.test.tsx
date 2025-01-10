import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Home from '@/pages';
import BeachPage from '@/pages/beach';
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
});


// describe('BeachPage', () => {
//   it('renders the header with correct text', () => {
//       render(<BeachPage />);
//       const header = screen.getByRole('heading', { name: /welcome to the beach!/i });
//       expect(header).toBeInTheDocument();
//   });

//   it('renders the main content text', () => {
//       render(<BeachPage />);
//       const mainText = screen.getByText(/feel the warmth of the sun and the gentle breeze of the ocean/i);
//       expect(mainText).toBeInTheDocument();
//   });

//   it('renders the "Explore" and "Relax" buttons', () => {
//       render(<BeachPage />);
//       const exploreButton = screen.getByRole('button', { name: /explore/i });
//       const relaxButton = screen.getByRole('button', { name: /relax/i });

//       expect(exploreButton).toBeInTheDocument();
//       expect(relaxButton).toBeInTheDocument();
//   });

//   it('renders the footer with correct text', () => {
//       render(<BeachPage />);
//       const footer = screen.getByText(/© 2025 beach lovers. all rights reserved./i);
//       expect(footer).toBeInTheDocument();
//   });
// });