<template>
    <div id="app">
        <!--<select name="" id="" @input="changeLanguage($event.target.value)">-->
            <!--<option value="1">UA</option>-->
            <!--<option value="2">UK</option>-->
        <!--</select>-->
        <table>
            <thead>
            <th v-for="(elem, index) in tableHeaders" :key="index">{{elem}}</th>
            </thead>
            <tbody>
                <tr v-for="(route, index) in routesArray" :key="index + 'route'">
                    <td>{{route.trainNumber}}</td>
                    <td>{{route.dispathCity}}</td>
                    <td>{{route.arrivalCity}}</td>
                    <td>{{route.weekday}}</td>
                    <td>{{route.dispathTime}}</td>
                    <td>{{route.arrivalTime}}</td>
                    <td>{{route.ticketCost}}</td>
                    <td>{{route.timeLeft}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    import Timetable from './Timetable'

    import City from './City'
    import CityMatrix from './CityMatrix'

    import Logger from './Logger'

    import Localizer from './Localizer'

    export default {
        data() {
            return {
                tableHeaders: [
                    'Номер потягу',
                    'Пункт відправлення',
                    'Пункт прибуття',
                    'День тижня',
                    'Відправлення',
                    'Прибуття',
                    'Вартість',
                    'Часу залишилось'
                ],
                routesArray: null,
            }
        },
        created() {

            const cities = [
                new City('Vinnitsia', 49.253745, 28.489998),
                new City('Odessa', 46.464968, 30.712040),
                new City('Lviv', 49.830718, 24.034987),
                new City('Kharkiv', 49.980068, 36.242161),
                new City('Kyiv', 50.431129, 30.530068)
            ];

            const matrix = new CityMatrix(cities);
            console.log(matrix.getDistanceMatrix());

            const timetable = new Timetable(cities);
            console.dir(timetable.getAllRoutes());
            this.routesArray = timetable.getAllRoutes();

            const logger = new Logger();
            logger.logIntoFile(timetable.getFormatedRoutes());
            logger.logIntoConsole(timetable.getFormatedRoutes());

        },
        methods: {
            changeLanguage(val) {
                Localizer.changeLanguage(Number(val));
            }
        }
    }
</script>

<style>
    th {
        padding-right: 20px;
        padding-top: 5px;
    }
    tr {
        padding-top: 5px;
    }
</style>

