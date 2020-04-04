import React from 'react';
import './dev-info-grid.scss'
import {useSelector} from "react-redux";
import Tools from '../tools'

import jsSign from '../tools/icons/js.svg';
import reactSign from '../tools/icons/react.svg';
import nodeSign from '../tools/icons/node.svg';

function DevInfoGrid() {

    const lang = useSelector(state => state.lang);

    const toolsData = getToolsData(lang);



    return (
        <div className="dev-info-grid">
            <section className="dev-info-grid__tools">
                <h2 className="header__2">{ lang === 'ru' ? 'Инструменты' : 'Tools' }</h2>
                <Tools toolsData={toolsData} />
            </section>
            <section className="dev-info-grid__works">
                {/*<h2 className="header__2">{ lang === 'ru' ? 'Работы' : 'Portfolio' }</h2>*/}
            </section>
            <section className="dev-info-grid__github">
                {/*<h2 className="header__2">{ lang === 'ru' ? 'Код на GitHub' : 'Sources on GitHub' }</h2>*/}
            </section>
        </div>
    )
}


function getToolsData(lang) {
    if(lang === 'ru') {
        return [
            {
                name: 'HTML и CSS',
                sign: null,
                subTools: ['БЭМ', 'Верстка под мобильные устройства', 'SCSS', 'Адаптивная и отзывчивая вёрстка', 'Семантическая вёрстка', 'Flex', 'Grid', 'Bootstrap', 'Ретина'],
                experience: '8 лет',
                level: 'средний',
            },
            {
                name: 'JavaScript',
                sign: jsSign,
                subTools: ['ES5, 6 и выше', 'Fetch', 'Async/await', 'Обещания', 'Service workers', 'PWA', 'Модули', 'Двумерный контекст холста', 'NPM', 'Cтрелочные функции', 'Отладчик Хрома'],
                experience: '5 лет',
                level: 'средний'
            },
            {
                name: 'React',
                sign: reactSign,
                subTools: ['Redux', 'React Router', 'Хуки', 'Работа с сервером', 'Webpack', 'Babel', 'Контекст'],
                experience: '8 месяцев',
                level: 'средний'
            },
            {
                name: 'Node.js',
                sign: nodeSign,
                subTools: ['RESTful', 'MVC', 'Postman', 'Авторизация и аутентификация через JWT', 'MongoDB', 'Mongoose', 'Compass', 'MySQL', 'API'],
                experience: 'нет',
                level: 'начальный'
            }
        ]
    }

    return [
        {
            name: 'HTML and CSS',
            sign: null,
            subTools: ['BEM', 'Markup for smartphones', 'SCSS', 'Adaptive and responsive design', 'Semantic markup', 'Flex', 'Grid', 'Bootstrap', 'Retina'],
            experience: '8 years',
            level: 'middle',
        },
        {
            name: 'JavaScript',
            sign: jsSign,
            subTools: ['ES5, 6 and above', 'Fetch', 'Async/await', 'Promices', 'Service workers', 'PWA', 'Modules', '2D canvas context', 'NPM', 'Arrow functions', 'Chrome Debugger'],
            experience: '5 years',
            level: 'middle'
        },
        {
            name: 'React',
            sign: reactSign,
            subTools: ['Redux', 'React Router', 'Hooks', 'Works with server', 'Webpack', 'Babel', 'Context'],
            experience: '8 months',
            level: 'middle'
        },
        {
            name: 'Node.js',
            sign: nodeSign,
            subTools: ['RESTful', 'MVC', 'Postman', 'Authentication and authorization through JWT', 'MongoDB', 'Mongoose', 'Compass', 'MySQL', 'API'],
            experience: 'no',
            level: 'beginner'
        }
    ]
}

export default DevInfoGrid;