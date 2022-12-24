export function getAverageRoomRate(rates) {
    let sumOfRates = 0;
    rates.forEach((rate) => {
        sumOfRates += rate;
    });
    return sumOfRates / rates.length;
}
