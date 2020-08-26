import React from 'react';
import './about.scss'
import {useSelector} from "react-redux";

import myPhotoJpeg from './images/my-photo.jpg';
import myPhoto2Jpeg from './images/my-photo@2x.jpg';


function About() {

    const lang = useSelector(state => state.lang);

    return (
        <article className="about">
            <div className="about__photo-w">
                <img className="about__photo" srcSet={`${myPhotoJpeg} 1x, ${myPhoto2Jpeg} 2x`} alt="Фотография Андрея Козинского" />
            </div>

            <header className="about__intro-w">
                { getIntroText(lang).map((paragraph, i) => <p className="about__intro-text" key={i}>{paragraph}</p>) }
            </header>

            <section className="about__text-w">
                <div>
                    { getFirstText(lang).map((paragraph, i) => <p className="about__text" key={i}>{paragraph}</p>) }
                </div>
                <div>
                    { getSecondText(lang).map((paragraph, i) => <p className="about__text" key={i}>{paragraph}</p>) }
                </div>
            </section>
        </article>
    )
}

function getIntroText(lang) {
    return (lang === 'ru') ?
        [
            `Я верстальщик сайтов и пользовательских интерфейсов.`,
            'Буду рад стать частью команды создающей технологичные веб-системы.'
        ] :
        [
            'I am a front-end developer.',
            'I will be glad to be a part of a team building web-based technology systems.'
        ]
}

function getFirstText(lang) {
    return (lang === 'ru') ?
        [
            'В последнее время занимался оформлением и вёрстка каталогов, магазинов, написание компонентов.',
            'Хочу перейти на работу в офисе чтобы заниматься вёрсткой сайтов и интерфейсов с уклоном в JavaScript, React и сопутствующие современные технологии.',
            '32 года. Живу в Оренбурге.'
        ] :
        [
            `Recently I have been involved in the design and layout of catalogs, stores, writing components.`,
            'I have a wish to work at office to help you with the markup of web-sites and interfaces with a bias in JavaScript, React and other related modern technologies.',
            'I am 33 years old. I like in Orenburg.'
        ]
}

function getSecondText(lang) {
    return (lang === 'ru') ?
        [
        ] :
        [
        ]
}

export default About;



// import myPhotoWebp from './images/my-photo.webp';
// import myPhoto2Webp from './images/my-photo@2x.webp';
/*<picture>
    <source srcSet={`${myPhotoWebp} 1x, ${myPhoto2Webp} 2x`} />
    <source srcSet={`${myPhotoJpeg} 1x, ${myPhoto2Jpeg} 2x`} />
    <img className="about__photo" />
</picture>*/