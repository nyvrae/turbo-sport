import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';
import { Component } from 'react';

describe('Page', () => {
  it('renders all sections correctly', () => {
    render(<Page />);

    // Проверяем, что все дочерние компоненты рендерятся
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('banner')).toBeInTheDocument();
    expect(screen.getByTestId('participants')).toBeInTheDocument();
    // expect(screen.getByTestId('activities')).toBeInTheDocument();
    // expect(screen.getByTestId('schedule')).toBeInTheDocument();
    // expect(screen.getByTestId('tickets')).toBeInTheDocument();
    // expect(screen.getByTestId('location')).toBeInTheDocument();
    // expect(screen.getByTestId('sponsorship')).toBeInTheDocument();
  });
});

