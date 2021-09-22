import React from 'react';
import { render, screen, fireEvent,  } from '@testing-library/react';
import App from '../App';
import Login from '../components/Login/Login';
import {MemoryRouter} from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import Game from '../components/Game/Game';


// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/wordcloeud gam/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('full app rendering', () => {
  render(<App />, {wrapper: MemoryRouter})

  // verify page content for expected route
  expect(screen.getByText(/wordcloud game/i)).toBeInTheDocument()
})

test('button has correct text', () => {
  render(<Login />, {wrapper: MemoryRouter})
  const button: HTMLElement = screen.getByRole('button')
  expect(button).toHaveTextContent('game')
})

test('word button turns to yellow if selected', async () => {
  render(<Game />, {wrapper: MemoryRouter})
  const wordButton = screen.getByRole('button')

  await fireEvent.click(wordButton)

  expect(wordButton).toHaveClass('active')
})