import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import TodoList from "../components/TodoList";

test('Test to delete item from TodoList', () => { 
    render(<TodoList />)

    const todoItem = screen.getByText('Learn React');
    const deleteButton = screen.getByText('Delete');

    expect(todoItem).toBeInTheDocument();

    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
 })