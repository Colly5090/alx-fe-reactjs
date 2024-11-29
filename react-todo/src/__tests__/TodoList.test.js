import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
    test('renders and display initial todos in TodoList', () => { 
        // Render the TodoList component
        render(<TodoList />);

        // Check if the TodoList heading is in the document
        const headingElement = screen.getByText(/Add New Todo/i);
        expect(headingElement).toBeInTheDocument();

        // Check if the demo todos are rendered
        const todoItems = screen.getAllByRole('listitem');
        expect(todoItems.length).toBe(3);

        // Check the text of the first todo item
        expect(screen.getByText(/Learn React/i)).toBeInTheDocument()
        expect(screen.getByText(/Build a Todo List/i)).toBeInTheDocument()
        expect(screen.getByText(/Master JavaScript/i)).toBeInTheDocument()
     })
})