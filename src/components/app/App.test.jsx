import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Color Select Lab', () => {
    it('Tests the app',  () => {
        render(<App />);

        const selector = screen.getByLabelText('color-picker')
        const redo = screen.getByLabelText('redo-button')
        const undo = screen.getByLabelText('undo-button')
        const div = screen.getByLabelText('display')

        fireEvent.change(selector, { target: { value: 'FF0000' } });
        expect(div).toHaveStyle({ background: 'FF0000' });
        fireEvent.change(selector, { target: { value: '0000FF' } });
        expect(div).toHaveStyle({ background: '0000FF' });
        fireEvent.change(selector, { target: { value: '00FF00' } });
        expect(div).toHaveStyle({ background: '00FF00' });
    
        fireEvent.click(undo);
        expect(div).toHaveStyle({ background: '0000FF' });
        fireEvent.click(undo);
        expect(div).toHaveStyle({ background: 'FF0000' });
        fireEvent.click(redo);
        expect(div).toHaveStyle({ background: '0000FF' });
    
        fireEvent.change(selector, { target: { value: 'FFFF00' } });
        expect(div).toHaveStyle({ background: 'FFFF00' });
    
        
        fireEvent.click(undo);
        expect(div).toHaveStyle({ background: '0000FF' });
        fireEvent.click(undo);
        expect(div).toHaveStyle({ background: 'FF0000' });
    
        fireEvent.click(redo);
        expect(div).toHaveStyle({ background: '0000FF' });
        fireEvent.click(redo);
        expect(div).toHaveStyle({ background: 'FFFF00'});
        fireEvent.click(redo);
        expect(div).toHaveStyle({ background: '00FF00' });

    })
})