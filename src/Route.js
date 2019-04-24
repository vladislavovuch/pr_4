import Train from "./Train";
import City from './City'

const WEEK_DAYS = ['Нд', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const TICKET_COST = 40.251;
const MS_IN_HOUR = 3600 * 1000;

export default function Route(cities) {
    const train = new Train();

    const arrivalCity = cities.c1;
    const dispathCity = cities.c2;

    const cityDistance = City.getDistance(cities.c1, cities.c2);

    const dispathTime = new Date(+new Date() + Math.round(Math.random() * 7 * 24 * MS_IN_HOUR));

    this.timeLeft = 0;

    this.timeLeft = formatDate(Math.ceil((dispathTime - new Date()) / 1000));

    const weekday = WEEK_DAYS[dispathTime.getDay()];

    // time a train move in hours
    const moveTime = (cityDistance / Number(train.getSpeed())).toFixed(2);
    // debugger;
    const arrivalTime = new Date(+dispathTime + moveTime * MS_IN_HOUR);

    const ticketCost = (TICKET_COST * moveTime).toFixed(2);

    this.getPublicString = function () {
        // for console
        return `Name: ${train.getTrainNumber()} Dispatch city "${dispathCity.getCityName()}" Arrive city "${arrivalCity.getCityName()}" ` +
            `Dispatch time: ${getAppropriateDate(dispathTime)}  Arrival Time ${getAppropriateDate(arrivalTime)} `
            + `Ticket costs ${ticketCost}   Move time ${moveTime}`;

    };

    this.trainNumber = train.getTrainNumber();
    this.dispathCity = dispathCity.getCityName();
    this.arrivalCity = arrivalCity.getCityName();
    this.weekday = weekday;
    this.dispathTime = getAppropriateDate(dispathTime);
    this.arrivalTime = getAppropriateDate(arrivalTime);
    this.ticketCost = ticketCost;

    this.getRouteInfo = function () {
        const routeInfo = {
            trainNumber: train.getTrainNumber(),
            dispathCity: dispathCity.getCityName(),
            arrivalCity: arrivalCity.getCityName(),
            weekday,
            dispathTime: getAppropriateDate(dispathTime),
            arrivalTime: getAppropriateDate(arrivalTime),
            ticketCost,
        };
        return routeInfo;
    };

    function getAppropriateDate(date) {
        let curDate = new Date();
        // for correct handling the same weekday on the next week
        const tomorrowDate = new Date().setDate(new Date().getDate() + 1);
        let weekDay;
        if (curDate.getDate() === date.getDate()) {
            weekDay = 'Сьогодні';
        } else if (tomorrowDate === date.getDay()) {
            weekDay = 'Завтра';
        } else {
            weekDay = WEEK_DAYS[date.getDay()];
        }

        return `${weekDay}-${formatTime(date.getHours())}:${formatTime(date.getMinutes())}`;
    }

    function formatTime(time) {
        if (Number(time) > 99) return time;
        return ('0' + time).slice(-2);
    }

    setInterval(() => {
        this.timeLeft = formatDate(Math.ceil((dispathTime - new Date()) / 1000));
    }, 1000);

    function formatDate(sec) {
        const hours = Math.floor(sec / 3600);
        sec -= (hours * 3600);
        const minutes = Math.floor(sec / 60);
        sec -= (minutes * 60);
        return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(sec)}`
    }
}


