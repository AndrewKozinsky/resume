import React from 'react';
import LangSwitcher from '../lang-switcher';
import Header from '../header';
import About from '../about';
import FooterAdress from '../footer-adress';

import { Provider } from 'react-redux';
import store from '../../store/store';

import './app.scss'


function App() {
    return (
        <Provider store={store}>
            <div id="page-main-part">
                <LangSwitcher />
                <Header />
                <About />
            </div>
            <footer id="page-bottom-part">
                <FooterAdress />
            </footer>
        </Provider>
    );
}

export default App;