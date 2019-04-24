import Train from './Train'
import City from './City'

import Route from './Route'

export default function Timetable(citiesArray) {
    // generate All posible
    const routes = [];
    //cities
    citiesArray.forEach((city1, i) => {
        citiesArray.forEach((city2, j) => {
            if (i !== j) {
                const cities = {
                    c1: city1,
                    c2: city2,
                };
                routes.push(new Route(cities));
            }
        })
    });

    this.getAllRoutes = function () {
        return routes;
    }

    this.getFormatedRoutes = function () {
        return routes.map(route => route.getRouteInfo())
    }
}

