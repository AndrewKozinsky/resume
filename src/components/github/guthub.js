import React from 'react';
import './guthub.scss'
import {useSelector} from "react-redux";


function Guthub() {

    const lang = useSelector(state => state.lang);

    const githubData = getGithubData(lang);

    const linksMarkup = githubData.map((data, i) => {
        return GithubLink(data, i)
    });


    return (
        <>
            <div className="gh-links">
                {linksMarkup}
            </div>
            <p className="test-task-text">Готов выполнить тестовое задание.</p>
            {/*<p className="salary-text__text">Рассчитываю на оклад</p>*/}
            {/*<p className="salary-text__big-text"><span className="salary-text__big-text--selected">&gt; 1</span> руб./месяц</p>*/}
        </>
    )
}


function GithubLink(data, i) {

    const stickers = data.stickers.map((text, j) => {
        return <span className="gh-link__sticker" key={j}>{text}</span>
    });

    return (
        <p className="gh-link__wrapper" key={i}>
            <a href={data.href} className="gh-link__link">{data.name}</a>
            {stickers}
        </p>
    )
}


function getGithubData(lang) {
    return (lang === 'ru') ?
        [
            {
                name: 'Список дел',
                href: 'https://github.com/AndrewKozinsky/',
                stickers: ['React']
            },
            {
                name: 'Код этого сайта',
                href: 'https://github.com/AndrewKozinsky/',
                stickers: ['React']
            },
            {
                name: 'Сборка Вебпака для разработки и публикации',
                href: 'https://github.com/AndrewKozinsky/',
                stickers: ['Babel', 'Webpack',]
            },
            {
                name: 'Серверный API для работы с турами',
                href: 'https://github.com/AndrewKozinsky/',
                stickers: ['Node.js']
            },
            {
                name: 'Функция создающая неизменяемую копию объекта или массива для Реакта',
                href: 'https://github.com/AndrewKozinsky/',
                stickers: ['JavaScript']
            },

        ] :
        [
            {
                name: 'To do list',
                href: 'https://github.com/AndrewKozinsky/',
                stickers: ['React']
            },
            {
                name: 'The code of that site',
                href: 'https://github.com/AndrewKozinsky/',
                stickers: ['React']
            },
            {
                name: 'Webpack build for development and production',
                href: 'https://github.com/AndrewKozinsky/',
                stickers: ['Babel', 'Webpack',]
            },
            {
                name: 'Server API for working with tours',
                href: 'https://github.com/AndrewKozinsky/',
                stickers: ['Node.js']
            },
            {
                name: 'Function creates immutable copy of any object',
                href: 'https://github.com/AndrewKozinsky/',
                stickers: ['JavaScript']
            },
        ]
}


export default Guthub;