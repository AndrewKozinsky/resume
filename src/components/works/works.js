import React from 'react';
import './works.scss'
import {useSelector} from "react-redux";
import Radium from "radium";

// Картинки категорий
import kflex from './images/kflex.jpg';
import kflex_2 from './images/kflex@2x.jpg';
import friko from './images/friko.jpg';
import friko_2 from './images/friko@2x.jpg';
import volcano from './images/volcano.jpg';
import volcano_2 from './images/volcano@2x.jpg';
import teplomash from './images/teplomash.jpg';
import teplomash_2 from './images/teplomash@2x.jpg';

function Works() {

    const lang = useSelector(state => state.lang);

    const worksData = getWorksData(lang);

    return worksData.map((workData, i) => {
        return Work(workData, i)
    });
}

export default Radium(Works);


function Work(data, i) {
    return (
        <a href={data.href} className="work" style={getCardStyle(data.color)} key={i}>
            <img className="work__image" srcSet={`${data.image} 1x, ${data.image2} 2x`} alt={`Сайт ${data.name}`} />
            <h4 className="work__header" style={{color: `rgb(${data.color})`}}>{data.name}</h4>
            <p className="work__text">{data.text}</p>
        </a>
    )
}


function getCardStyle(color) {
    return {
        ':hover': {
            'boxShadow': `0 0 2px rgb(${color}, .15), 0 1px 10px rgb(${color}, .3)`
        }
    }
}


function getWorksData(lang) {
    return (lang === 'ru') ?
        [
            {
                name: 'kflex.ru',
                href: 'https://kflex.ru',
                text: 'Вёрстка страниц каталога теплоизоляционных материалов: страница компонентов, формы, модальные окна, корзина.',
                color: '248, 191, 0',
                image: kflex,
                image2: kflex_2,
            },
            {
                name: 'фрико.рус',
                href: 'http://фрико.рус',
                text: 'Вёрстка страниц каталога климатического оборудования:  формы, модальные окна, калькулятор расчета стоимости.',
                color: '226, 0, 0',
                image: friko,
                image2: friko_2,
            },
            {
                name: 'volcano.ru',
                href: 'http://volcano.ru',
                text: 'Вёрстка страниц сайта с информацией о тепловентиляторах и тепловых завесах Volcano с калькулятором подбора.',
                color: '250, 118, 2',
                image: volcano,
                image2: volcano_2,
            },
            {
                name: 'тепломаш.рф',
                href: 'http://тепломаш.рф',
                text: 'Адаптивная вёрстка страниц каталога оборудования марки «Тепломаш»: формы, фильтры, поиск, калькулятор.',
                color: '25, 91, 170',
                image: teplomash,
                image2: teplomash_2,
            }
        ] :
        [
            {
                name: 'kflex.ru',
                href: 'https://kflex.ru',
                text: 'Thermal insulation meterials catalogue pages markup: page of the components, forms, modals, card.',
                color: '248, 191, 0',
                image: kflex,
                image2: kflex_2,
            },
            {
                name: 'фрико.рус',
                href: 'http://фрико.рус',
                text: 'Climatic equipments catalogue pages markup:  forms, modals, cost calculator.',
                color: '226, 0, 0',
                image: friko,
                image2: friko_2,
            },
            {
                name: 'volcano.ru',
                href: 'http://volcano.ru',
                text: 'Page markup of site about Volcano heat fans and heat curtains with selection calculator.',
                color: '250, 118, 2',
                image: volcano,
                image2: volcano_2,
            },
            {
                name: 'тепломаш.рф',
                href: 'http://тепломаш.рф',
                text: 'Adaptive page markup of the Teplomash equipment catalogue: forms, filters, search, calculator.',
                color: '25, 91, 170',
                image: teplomash,
                image2: teplomash_2,
            }
        ]
}