import React from 'react';
import {useSelector} from "react-redux";
import './tools.scss'
import './another-tools.scss'


import jsSign from "./icons/js.svg";
import reactSign from "./icons/react.svg";
import nodeSign from "./icons/node.svg";


function Tools() {

    const lang = useSelector(state => state.lang);

    const toolsData = getToolsData(lang);

    const experience = (lang === 'ru') ? 'Опыт' : 'Experience';
    const level = (lang === 'ru') ? 'Уровень' : 'Level';

    const toolsMarkup = toolsData.map( (data, i) => Tool(data, i, experience, level));


    return <>
        {toolsMarkup}
        <p className="a-tools-1">
            <span className="a-tools-1__text a-tools-1--terminal">{ (lang === 'ru') ? 'Терминал' : 'Terminal'}</span>
            <span className="a-tools-1__text a-tools-1--git">Git</span>
        </p>

        <p className="a-tools-2">{ (lang === 'ru') ? 'Английский для чтения документации' : 'I am able to read documentation in English'}</p>

        <div className="a-tools-3">
            <p className="a-tools-3__prgm-left">WebStorm</p>
            <p className="a-tools-3__prgm-right">
                <span className="a-tools-3__prgm-right-item">Sketch</span>
                <span className="a-tools-3__prgm-right-item">Figma</span>
                <span className="a-tools-3__prgm-right-item">PS</span>
                <span className="a-tools-3__prgm-right-item">AI</span>
            </p>
        </div>
    </>
}


function Tool(data, i, experience, level) {
    const subtools = data.subTools.map((subToolName, j) => {
        return <span className="tool__subtool" key={j}>{subToolName}</span>
    });

    let sign = null;
    if(data.sign) {
        sign = <img src={data.sign} className="tool__sign" alt={data.name} />;
    }

    return <div className="tool" key={i}>
        <h3 className="tool__name">{data.name}{sign}</h3>
        <div className="tool__subtools">{subtools}</div>
        <p className="tool__details">
            <span className="tool__detail">{experience}: <span className="tool__details-backlight">{data.experience}</span></span>
            <span className="tool__detail">{level}: <span className="tool__details-backlight">{data.level}</span></span>
        </p>
    </div>
}


function getToolsData(lang) {
    return (lang === 'ru') ?
        [
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
        ] :
        [
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



export default Tools;