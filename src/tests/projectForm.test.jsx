import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectForm from '../components/projectForm';

it('blocks empty submit', async () => {
  const onAdd = vi.fn();
  render(<ProjectForm onAdd={onAdd} />);
  await userEvent.click(screen.getByRole('button', { name: /add project/i }));
  expect(screen.getByText(/title is required/i)).toBeInTheDocument();
  expect(onAdd).not.toHaveBeenCalled();
});