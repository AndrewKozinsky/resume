import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { switchLang } from '../../store/actions'
import './lang-switcher.scss'


function LangSwitcher() {

    const dispatch = useDispatch();
    const lang = useSelector(state => state.lang);

    // Текст на кнопке
    const btnText = (lang === 'ru') ? 'Eng' : 'Рус';

    // Обработчик щелчка по кнопке переключения языка
    const onClickHandler = useCallback( () => dispatch(switchLang()), [dispatch] );

    return (
        <div className="lang-switcher">
            <button className="lang-switcher-btn" onClick={onClickHandler}>
                <span>{btnText}</span>
            </button>
        </div>
    );
}


export default LangSwitcher