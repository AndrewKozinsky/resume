import React, {useReducer} from 'react';
import Context from '../../store/context'
import reducer from '../../store/reducer'
import inicialState from '../../store/inicial-state'
import './app.scss'

function App() {

    const [state, dispatch] = useReducer(reducer, inicialState);

    return (
        <Context.Provider value={state}>
            <>
                <div id="page-main-part">
                    <a href="https://google.com">Hello, world!</a>
                </div>
                <div id="page-bottom-part">
                    Hello, world!
                </div>
            </>
        </Context.Provider>
    );
}

export default App;