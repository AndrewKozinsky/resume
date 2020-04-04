import {createStore} from 'redux'

const INICIAL_STATE = {
    lang: 'ru',
    adresses: [
        {
            prefix: 'mail',
            text: 'andkozinsky@gmail.com',
            href: 'mailto:andkozinsky@gmail.com'
        },
        {
            prefix: 'phone',
            text: '8 919 84-23-599',
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
        }
    ]
};

function reducer(state = INICIAL_STATE, action) {

    switch (action.type) {
        case 'SWITCH_LANG':
            return switchLang(state);
        default:
            return state
    }
}

const store = createStore(reducer);
export default store;



// Переключение языка интерфейса
function switchLang(state) {
    const stateCopy = {...state};
    stateCopy.lang = (state.lang === 'ru') ? 'eng' : 'ru';

    return stateCopy;
}