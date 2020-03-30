import React from 'react';
import './footer-adress.scss'


export default function () {

    const adressesData = [
        {
            prefix: 'mail',
            text: 'andkozinsky@gmail.com',
            href: 'mailto:andkozinsky@gmail.com'
        },
        {
            prefix: 'phone',
            text: '8 919 84-25-599',
            href: 'tel:+79198425599'
        },
        {
            prefix: 'skype',
            text: 'andkozinskiy',
            href: 'skype:andkozinskiy?chat'
        },
        {
            prefix: 'telegram',
            text: '@AndrewKozinsky',
            href: 'telegram:AndrewKozinsky'
        },
        {
            prefix: 'hh',
            text: 'hh.ru',
            href: 'https://orenburg.hh.ru/resume/17738216ff063294920039ed1f6852426c6f6a'
        },
        {
            prefix: 'github',
            text: 'github.com',
            href: 'https://github.com'
        },
    ];

    const cellsMarkup = adressesData.map((cellData, i) => {
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