import { render, screen, fireEvent } from '@testing-library/react';
import AuthorForm from './AuthorForm';

test('Validation form when click with name and nacionality invalid', () => {
    render(<AuthorForm />);
    const addButton = screen.getByRole("button", { name: "+ Add" });

    fireEvent.click(addButton);

    const errorNameMessage = screen.getByText('Please enter a valid name!');
    const errorNacionalityMessage = screen.getByText('Please enter a valid nacionality!');
    expect(errorNameMessage).toBeInTheDocument();
    expect(errorNacionalityMessage).toBeInTheDocument();
   
   
});