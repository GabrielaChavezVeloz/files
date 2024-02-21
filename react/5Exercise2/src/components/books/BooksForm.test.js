import { render, screen, fireEvent } from '@testing-library/react';
import BooksForm from './BooksForm';

test('Validation form when click with name invalid', () => {
    render(<BooksForm />);
    const addButton = screen.getByRole("button", { name: "+ Add" });

    fireEvent.click(addButton);

    const errorNameMessage = screen.getByText('Please enter a valid name!');
    expect(errorNameMessage).toBeInTheDocument();
   
   
});