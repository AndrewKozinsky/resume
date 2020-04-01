import React from 'react';
import {useSelector, shallowEqual} from "react-redux";
import './footer-adress.scss'

function FooterAdress () {

    const adresses = useSelector(state => state.adresses, shallowEqual);

    const cellsMarkup = adresses.map((cellData, i) => {
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