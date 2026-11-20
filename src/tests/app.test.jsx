
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../app';

it('renders initial projects', () => {
  render(<App />);
  expect(screen.getByText(/Nova Brand Identity/i)).toBeInTheDocument();
});

it('filters by search', async () => {
  render(<App />);
  await userEvent.type(screen.getByLabelText(/search projects/i), 'Orbit');
  expect(screen.getByText(/Orbit Mobile App/i)).toBeInTheDocument();
  expect(screen.queryByText(/Nova Brand Identity/i)).not.toBeInTheDocument();
});

it('filters projects by category and reports the result count', async () => {
  render(<App />);
  await userEvent.selectOptions(screen.getByLabelText(/category/i), 'Branding');

  expect(screen.getByText(/Nova Brand Identity/i)).toBeInTheDocument();
  expect(screen.queryByText(/Orbit Mobile App/i)).not.toBeInTheDocument();
  expect(screen.getByText('1 project')).toBeInTheDocument();
});

it('adds a project and updates the list and count', async () => {
  render(<App />);
  const user = userEvent.setup();

  await user.click(screen.getByRole('button', { name: /add project/i }));
  await user.type(screen.getByLabelText('Title *'), 'Studio Website');
  await user.type(screen.getByLabelText('Category *'), 'Web');
  await user.type(screen.getByLabelText('Description *'), 'A new studio site.');
  await user.click(screen.getByRole('button', { name: 'Add Project' }));

  expect(screen.getByText('Studio Website')).toBeInTheDocument();
  expect(screen.getByText('5 projects')).toBeInTheDocument();
});