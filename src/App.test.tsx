import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

const fetch = require('./api/fetchUsers')

jest.mock('./api/fetchUsers')

const mockUser: any = {
  results: [
    {
      location: {
        postcode: '111 foo'
      }
    }
  ]
}

test('renders zips from data', async () => {
  fetch.fetchUsers = jest.fn().mockResolvedValue(mockUser);

  render(<App />);
  await waitFor(() => {
    expect(fetch.fetchUsers).toHaveBeenCalledTimes(1)
  })
  
  await waitFor(() => {
    expect(screen.getByText('111 foo')).toBeInTheDocument()
  })
})
