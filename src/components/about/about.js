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
            'Мой подход — разобраться в задаче, заранее увидеть подводные камни и сделать всё в срок без напоминаний.',
            'Буду рад стать частью команды создающей технологичные веб-системы.'
        ] :
        [
            'I am a front-end developer.',
            'My approach is to understand the problem, see the pitfalls in advance and to do everything on time without reminders.',
            'I will be glad to be a part of a team building web-based technology systems.'
        ]
}

function getFirstText(lang) {
    return (lang === 'ru') ?
        [
            'Я стремлюсь не только перевести макет в код, но, что важнее, продумать как это должно работать;',
            'Я рассматриваю интерфейс как систему взаимосвязанных компонентов;',
            'Для меня само собой разумеющееся, что верстальщик должен принимать дизайнерские решения если в этом есть необходимость, а не закрывать глаза на то, что некоторые элементы ненарисованы или нелогичны;',
            'Интерфейс должен хорошо выглядеть и на телефоне и на 27-и дюймовом экране.'
        ] :
        [
            'I strive not only to translate the layout into code, but also to think about how it should work;',
            'I see the interface as a system of interrelated components;',
            'It goes without saying to me that a front-end developer should make design decisions if necessary, rather than turning a blind eye to the fact that some elements are unpainted or illogical;',
            'The interface should look good on both the phone and the 27-inch screen.'
        ]
}

function getSecondText(lang) {
    return (lang === 'ru') ?
        [
            'Последние 5 лет занимался фрилансом. В основном это оформление и вёрстка каталогов, магазинов, написание компонентов. Но такая занятость надоела потому что приходится заниматься множеством непрофильных вещей. И дома скучно.',
            'Хочу перейти на работу в офисе чтобы помочь вам в вёрстке сайтов и интерфейсов с уклоном в JavaScript, React и сопутствующие современные технологии.',
            'React изучил в прошлом году и в свободное время пишу на нём свой проект.',
            '31 год. Живу в Москве. Холост. Детей нет.'
        ] :
        [
            `I have been a freelancer for the last 5 years. Basically it was design and layout of catalogues, shops, writing components. I don't like such employment because I have to do a lot of non-core things.`,
            'I have a wish to work at office to help you with the markup of web-sites and interfaces with a bias in JavaScript, React and other related modern technologies.',
            'I learned React last year and I write personal project on my free time.',
            'I am 31 years old. I like in Moscow. I am single. I have no children.'
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