import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('testing header component', () => {
    test('header has github link and title', () => {
        render(<Header />);

        // Github link
        const linkElement = screen.getByText(/github/i);
        expect(linkElement).toBeInTheDocument();

        const titleElement = screen.getByText(/restaurant/i);
        expect(titleElement).toBeInTheDocument();
    })
});