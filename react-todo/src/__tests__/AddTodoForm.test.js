import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import TodoList from '../components/TodoList';

test('Adding new Todo', () => { 
    render(<TodoList />);

    const input = screen.getByPlaceholderText('Add a new task');
    const button = screen.getByText('Add Todo');

    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(button);

    const newTodo = screen.getByText('New Todo');
    expect(newTodo).toBeInTheDocument();

    expect(input.value).toBe('')

 })