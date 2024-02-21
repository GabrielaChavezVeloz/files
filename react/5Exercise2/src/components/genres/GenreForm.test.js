import { render, screen, fireEvent } from '@testing-library/react';
import GenreForm from './GenreForm';

test('Validation form when click with name invalid', () => {
    render(<GenreForm />);
    const addButton = screen.getByRole("button", { name: "+ Add" });
    //const nameLabel = screen.getByRole("textbox", { name: "Name" });

    fireEvent.click(addButton);

    //expect(nameLabel).toHaveStyle('background-color: #ffeff1');

    const errorMessage = screen.getByText('Please enter a valid name!');
    expect(errorMessage).toBeInTheDocument();
    
   
});