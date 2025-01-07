import OceanPage from '@/pages/ocean';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Ocean Page', () => {
  it('rendering 🐳', () => {
    render(<OceanPage />);

    const whale = screen.getByText('🐳');

    expect(whale).toBeInTheDocument();
  });
});
