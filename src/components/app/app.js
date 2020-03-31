import React, {useReducer} from 'react';
import Context from '../../store/context'
import reducer from '../../store/reducer'
import inicialState from '../../store/inicial-state'
import LangSwitcher from '../lang-switcher';
import Header from '../header';
import FooterAdress from '../footer-adress';

import './app.scss'

function App() {

    const [state, dispatch] = useReducer(reducer, inicialState);

    return (
        <Context.Provider value={state}>
            <div id="page-main-part">
                <LangSwitcher />
                <Header />
            </div>
            <footer id="page-bottom-part">
                <FooterAdress />
            </footer>
        </Context.Provider>
    );
}

export default App;