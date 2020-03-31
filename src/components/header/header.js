import React, {useReducer} from 'react';
import reducer from "../../store/reducer";
import inicialState from '../../store/inicial-state';

import './header.scss'
import './contacts-btn.scss'

function Header() {



    return (
        <header className="header">
            <div className="header__part-1">
                <h1 className="main-header">Андрей Козинский</h1>
            </div>
            <div className="header__part-2">
                <nav className="main-nav">
                    <a href="https://google.com">Верстальщик</a>
                    <a href="https://google.com">Оформитель</a>
                </nav>
            </div>
            <div className="header__part-3">
                <ContactsBtn />
            </div>
        </header>
    )
}


function ContactsBtn() {
    const [state] = useReducer(reducer, inicialState);

    const linksMarkup = state.adresses.map((cellData, i) => {
        return (
            <a
                href={cellData.href}
                className="contacts-btn__link simplified-link"
                key={i}
            >
                <span className={"contacts-btn__text contacts-btn__text__" + cellData.prefix}>
                    {cellData.text}
                </span>
            </a>
        )
    });

    return (
        <div className="contacts-btn">
            <button className="contacts-btn__btn">Контакты</button>
            <aside className="contacts-btn__list">
                {linksMarkup}
            </aside>
        </div>
    )
}

export default Header;