import React from 'react';
import './about.scss'

import myPhotoJpeg from './images/my-photo.jpg';
import myPhoto2Jpeg from './images/my-photo@2x.jpg';


function About() {

    return (
        <article className="about">
            <div className="about__photo-w">
                <img className="about__photo" srcSet={`${myPhotoJpeg} 1x, ${myPhoto2Jpeg} 2x`} />

            </div>

            <header className="about__intro-w">
                <p className="about__intro-text">Я&nbsp;верстальщик сайтов и&nbsp;пользовательских интерфейсов.</p>
                <p className="about__intro-text">Мой подход&nbsp;&mdash; разобраться в&nbsp;задаче, заранее увидеть подводные камни и&nbsp;сделать всё в&nbsp;срок без напоминаний.</p>
                <p className="about__intro-text">Буду рад стать частью команды создающей технологичные веб-системы.</p>
            </header>

            <section className="about__text-w">
                <div>
                    <p className="about__text">Я стремлюсь не только перевести макет в код, но, что важнее, продумать как это должно работать;</p>
                    <p className="about__text">Я&nbsp;рассматриваю интерфейс как систему взаимосвязанных компонентов;</p>
                    <p className="about__text">Для меня само собой разумеющееся, что верстальщик должен принимать дизайнерские решения если в&nbsp;этом есть необходимость, а&nbsp;не&nbsp;закрывать глаза на&nbsp;то, что некоторые элементы ненарисованы или нелогичны;</p>
                    <p className="about__text">Интерфейс должен хорошо выглядеть и&nbsp;на&nbsp;телефоне и&nbsp;на&nbsp;27-и дюймовом экране.</p>
                </div>
                <div>
                    <p className="about__text">Последние 5&nbsp;лет занимался фрилансом. В&nbsp;основном это оформление и&nbsp;вёрстка каталогов, магазинов написание компонентов. Но&nbsp;такая занятость надоела потому что приходится заниматься множеством непрофильных вещей. И&nbsp;дома скучно.</p>
                    <p className="about__text">Хочу перейти на&nbsp;работу в&nbsp;офисе чтобы помочь вам в&nbsp;вёрстке сайтов и&nbsp;интерфейсов с&nbsp;уклоном в&nbsp;JavaScript, React и&nbsp;сопутствующие современные технологии.</p>
                    <p className="about__text">React изучил в&nbsp;прошлом году и&nbsp;в&nbsp;свободное время пишу на&nbsp;нём свой проект.</p>
                    <p className="about__text">31&nbsp;год. Живу в&nbsp;Москве. Холост. Детей нет.</p>
                </div>
            </section>
        </article>
    )
}

export default About;



// import myPhotoWebp from './images/my-photo.webp';
// import myPhoto2Webp from './images/my-photo@2x.webp';
/*<picture>
    <source srcSet={`${myPhotoWebp} 1x, ${myPhoto2Webp} 2x`} />
    <source srcSet={`${myPhotoJpeg} 1x, ${myPhoto2Jpeg} 2x`} />
    <img className="about__photo" />
</picture>*/