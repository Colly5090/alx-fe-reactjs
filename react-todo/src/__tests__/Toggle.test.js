/**
 * @jest-environment jsdom
 */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";
import '@testing-library/jest-dom'

test('Test Toggle is completed or not completed', () => { 
    render(<TodoList />)

    const todoItem = screen.getByText('Learn React');
    const toggleButton = screen.getAllByText('Complete');

    expect(todoItem).not.toHaveStyle('text-decoration: line-through');

    toggleButton.forEach(button => {
        fireEvent.click(button);
    })
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    const undoButton = screen.getAllByText('Undo Complete');

    undoButton.forEach(button => {
        fireEvent.click(button);
    })
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
 })