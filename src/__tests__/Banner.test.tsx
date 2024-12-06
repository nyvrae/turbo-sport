import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Banner from '@/components/banner/Banner';

test('button changes color on hover', () => {
    render(<Banner />);

    const button = screen.getByRole('button', { name: /Купить билет/i });

    expect(button).toHaveClass('text-white');

    fireEvent.mouseEnter(button);

    expect(button).toHaveClass('hover:text-black');

    expect(button).toHaveClass('hover:bg-green');
});
