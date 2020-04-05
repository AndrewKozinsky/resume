import React from 'react';
import './dev-info-grid.scss'
import {useSelector} from "react-redux";
import Tools from '../tools'
import Works from '../works'


function DevInfoGrid() {

    const lang = useSelector(state => state.lang);


    return (
        <div className="dev-info-grid">
            <section className="dev-info-grid__tools">
                <h2 className="header__2">{ lang === 'ru' ? 'Инструменты' : 'Tools' }</h2>
                <Tools />
            </section>
            <section className="dev-info-grid__works">
                <h2 className="header__2">{ lang === 'ru' ? 'Работы' : 'Portfolio' }</h2>
                <Works />
            </section>
            <section className="dev-info-grid__github">
                <h2 className="header__2">{ lang === 'ru' ? 'Код на GitHub' : 'Sources on GitHub' }</h2>
            </section>
        </div>
    )
}







export default DevInfoGrid;