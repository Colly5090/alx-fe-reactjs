import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";
import '@testing-library/jest-dom'

test('Test Toggle is completed or not completed', () => { 
    render(<TodoList />)

    const todoItem = screen.getByText('Learn React');
    const toggleButton = screen.getByText('Complete');

    expect(todoItem).not.toHaveStyle('text-decoration: line-through');

    fireEvent.click(toggleButton);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    const undoButton = screen.getByText('Undo Complete');
    fireEvent.click(undoButton);

    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
 })