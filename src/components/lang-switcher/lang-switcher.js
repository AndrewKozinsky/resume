import React, {useReducer} from 'react';
import './lang-switcher.scss'


function LangSwitcher() {


    return (
        <div className="lang-switcher">
            <button className="lang-switcher-btn" disabled>
                <span>Рус</span>
            </button>
            <button className="lang-switcher-btn">
                <span>Eng</span>
            </button>
        </div>
    );
}

export default LangSwitcher;