function Train(_speed) {
    let speed = _speed || Math.round(Math.random() * 40 + 80);

    // create letters array
    const charactersArr = (function () {
        const tmp = new Array();
        // russian
        for (let i = 'А'.charCodeAt(0); i <= 'Я'.charCodeAt(0); ++i) {
            tmp.push(String.fromCharCode(i));
        }
        return tmp;
    })();

    function getRandomCharacter() {
        return charactersArr[Math.floor(Math.random() * charactersArr.length)];
    };

    const trainNumber = (function () {
        let numStr = '00' + Math.floor(Math.random() * 999 + 1);
        numStr = numStr.slice(-3);
        return numStr + getRandomCharacter();

    })();

    this.getSpeed = function () {
        return speed;
    };

    this.getTrainNumber = function () {
        return trainNumber;
    };

}

export default Train;



