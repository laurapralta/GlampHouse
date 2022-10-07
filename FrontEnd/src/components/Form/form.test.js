import {render, screen} from '@testing-library/react';
import React from 'react';
import {Form} from './form';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';

const onSubmit = jest.fn();

describe('Form', () => {
    const onSubmit = jest.fn();

    beforeEach(() => {
        onSubmit.mockClear();
        render(<Form/>);
    });
})


it('onSubmit is called when all fields pass validation', async () => {
    user.type(getEmail(), "lawraperalta@gmail.com")
    user.type(getPassword(), "123456")
    clickEntrar()

    await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
    });


        expect(onSubmit).toHaveBeenCalledWith({lazy:true})
    });


function getEmail() {
    return screen.getByRole('textbox');
}

function getPassword() {
    return screen.getByRole('textbox', {name: /contraseña/i});
}

function clickEntrar() {
    user.click(screen.getByRole('button', { name: /Entrar/i }));
}
