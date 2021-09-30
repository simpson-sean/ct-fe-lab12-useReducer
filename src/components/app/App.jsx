import React, { useReducer } from 'react';
import colorReducer, { initialValue } from '../../hooks/useColorChanger';



export default function App() {
  const [ state, dispatch ] = useReducer(colorReducer, initialValue);

  return (
    <>
      <button aria-label="undo-button" onClick={ () => dispatch({type: 'undo'})}>undo</button>
      <button aria-label="redo-button" onClick={ () => dispatch( {type: 'redo'} )}>redo</button>
      <input aria-label="color-picker" type="color" value={state.current} onChange={({ target }) => dispatch( {type: 'selector', payload: target.value} )} />
      <div aria-label="display" style={{ backgroundColor: state.current, width: '10rem', height: '10rem' }}></div>
    </>
  )
}


