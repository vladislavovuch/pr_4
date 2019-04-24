import City from "./City";

export default function CityMatrix(citiesArray = []) {
    const distanceMatrix = [];

    for (let i = 0; i < citiesArray.length; i++) {
        const curCity = citiesArray[i];
        distanceMatrix[i] = [];
        citiesArray.forEach(city => {
            distanceMatrix[i].push(City.getDistance(curCity, city));
        })
    }

    this.getDistanceMatrix = function () {
        return distanceMatrix;
    }
}
