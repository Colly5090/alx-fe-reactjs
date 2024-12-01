/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import TodoList from "../components/TodoList";

test('Test to delete item from TodoList', () => { 
    render(<TodoList />)

    const todoItem = screen.getByText('Learn React');
    const deleteButton = screen.getAllByText('Delete');

    expect(todoItem).toBeInTheDocument();

    deleteButton.forEach(button => {
        fireEvent.click(button);
    })

    expect(todoItem).not.toBeInTheDocument();
 })