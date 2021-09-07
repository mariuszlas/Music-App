import App from '../App.js';
import { screen, within } from '@testing-library/react';
    {/* will select eg. <div role="feed"></div> */}


describe('App', () => {

    beforeEach(() => {
        render(<App />)
    })

    test('buttons exist', () => {
        const buttons = screen.getAllByRole('button');
        expect(buttons.length).toBe(3);

    })

})
