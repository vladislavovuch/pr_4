// export default function () {
const ua = {
    WEEK_DAYS: ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    TABBLE_HEADERS: [
        'Номер потягу',
        'Пункт відправлення',
        'Пункт прибуття',
        'День тижня',
        'Відправлення',
        'Прибуття',
        'Вартість',
        'Часу залишилось'
    ],
    CITY_NAMES: [
        'Вінниця',
        'Київ',
        'Львів',
        'Одеса',
        'Харків',
    ],
    TODAY: 'Сьогодні',
    TOMORROW: 'Завтра',
};

const uk = {
    WEEK_DAYS: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    TABBLE_HEADERS: [
        'Train number',
        'Dispatch city',
        'Destination city',
        'Week day',
        'Dispatch',
        'Arrival',
        'Cost',
        'Time left'
    ],
    CITY_NAMES: [
        'Vinnitsia',
        'Kyiv',
        'Lviv',
        'Odessa',
        'Kharkiv',
    ],
    TODAY: 'today',
    TOMORROW: 'tomorrow',
};

// this.currentLanguage = ua;
//
// this.changeLanguage = function (value) {
//     this.currentLanguage = value === 1 ? ua : uk;
// };
// // }

export default {
    currentLanguage: ua,
    changeLanguage(value) {
        console.log(value);
        this.currentLanguage = value === 1 ? ua : uk;
    }
}
