import React, {useReducer} from 'react';
import reducer from "../../store/reducer";
import inicialState from '../../store/inicial-state';
import './footer-adress.scss'

function FooterAdress () {

    const [state] = useReducer(reducer, inicialState);

    const cellsMarkup = state.adresses.map((cellData, i) => {
        return (
            <div className="footer-address__cell" key={i}>
                <a
                    href={cellData.href}
                    className={"footer-address-link black-link footer-address-link__" + cellData.prefix}
                >
                    {cellData.text}
                </a>
            </div>
        )
    });

    return (
        <address className="footer-address">
            {cellsMarkup}
        </address>
    )
}

export default FooterAdress;