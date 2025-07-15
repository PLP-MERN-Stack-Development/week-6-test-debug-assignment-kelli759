import { render, screen, waitFor } from '@testing-library/react';
import PostList from '../../components/PostList';

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve([{ id: 1, title: 'Hello Test' }]),
    })
  );
});

test('loads and displays posts', async () => {
  render(<PostList />);
  await waitFor(() => screen.getByText(/hello test/i));
  expect(screen.getByText(/hello test/i)).toBeInTheDocument();
});
