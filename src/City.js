
export default function City(cName, lat, lng) {
    const cityName = cName;
    // довгота
    const longtitude = lng;
    const latitude = lat;

    this.getCityName = function () {
        return cityName;
    };

    this.getCoordinates = function () {
        return {
            longtitude,
            latitude
        }
    };
}

City.prototype.toString = function() {
    return this.getCityName();
};

function rad(x) {
    return x * Math.PI / 180;
};

// calculate distanse by Haversine formula
City.getDistance = function(c1, c2) {
    const c1Coordinates = c1.getCoordinates(), c2Coordinates = c2.getCoordinates();

    const R = 6378137; // Earth’s mean radius in meters

    const dLat = rad(c2Coordinates.latitude - c1Coordinates.latitude);
    const dLong = rad(c2Coordinates.longtitude - c1Coordinates.longtitude);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(c1Coordinates.latitude)) * Math.cos(rad(c2Coordinates.latitude)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;

    return Math.round(d / 1000); // returns the distance in kilometers
};


