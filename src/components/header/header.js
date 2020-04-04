import React from 'react';
import {useSelector, shallowEqual} from "react-redux";
import './header.scss'
import './contacts-btn.scss'


function Header() {
    const lang = useSelector(state => state.lang);

    const name = (lang === 'ru') ? 'Андрей Козинский' : 'Andrew Kozinsky';
    const vocation1 = (lang === 'ru') ? 'Верстальщик' : 'Frontend Developer';
    const vocation2 = (lang === 'ru') ? 'Оформитель' : 'Designer';

    return (
        <header className="header">
            <div className="header__part-1">
                <h1 className="main-header">{name}</h1>
            </div>
            <div className="header__part-2">
                <nav className="main-nav">
                    <a href="https://google.com">{vocation1}</a>
                    <a href="https://google.com">{vocation2}</a>
                </nav>
            </div>
            <div className="header__part-3">
                <ContactsBtn />
            </div>
        </header>
    )
}


function ContactsBtn() {
    const adresses = useSelector(store => store.adresses, shallowEqual);
    const lang = useSelector(store => store.lang, shallowEqual);

    const bthText = (lang === 'ru') ? 'Контакты' : 'Contacts';

    const linksMarkup = adresses.map((cellData, i) => {
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
            <button className="contacts-btn__btn">{bthText}</button>
            <aside className="contacts-btn__list">
                {linksMarkup}
            </aside>
        </div>
    )
}

export default Header;