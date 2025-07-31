import App from './App';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

test('renders App component', () => {
    render(<App />);
    const header = screen.getByText('My Todolist');
    expect(header).toBeInTheDocument();
});