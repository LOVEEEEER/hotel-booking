export function getFormatDate(data) {
    const newDate = new Date(data);
    const date =
        newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
    const month =
        newDate.getMonth() + 1 < 10
            ? `0${newDate.getMonth() + 1}`
            : newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    return `${date}.${month}.${year}`;
}

export function displayDate(data) {
    const date = new Date(data);
    console.log(date.get);
    const dateNow = new Date();
    const yearDif = dateNow.getFullYear() - date.getFullYear();
    if (yearDif === 0) {
        const dayDif = dateNow.getDate() - date.getDate();
        if (dayDif === 0) {
            const hourDif = dateNow.getHours() - date.getHours();
            if (hourDif === 0) {
                const minutesDif = dateNow.getMinutes() - date.getMinutes();
                const lastOne =
                    minutesDif.toString()[minutesDif.toString().length - 1];

                if (minutesDif >= 0 && minutesDif < 1) return "Только что";
                if (
                    [2, 3, 4].includes(Number(lastOne)) &&
                    (minutesDif < 5 || minutesDif > 21)
                ) {
                    return `${minutesDif} минуты назад`;
                }
                if (minutesDif === 1) return `${minutesDif} минуту назад`;
                return `${minutesDif} минут назад`;
            }
            return `${date.getHours()}:${date.getMinutes()}`;
        }
    }

    return `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}.${
        date.getMonth() + 1 < 10
            ? "0" + date.getMonth() + 1
            : date.getMonth() + 1
    }.${date.getFullYear()}`;
}

export const getPresenceBookingDate = (days) => {
    const newDate = new Date();
    return new Date(
        newDate.getFullYear(),
        newDate.getMonth(),
        newDate.getDate() + days
    );
};

export const getDaysCountFromTimeStamp = (timestamp) => {
    return timestamp / 1000 / 60 / 60 / 24;
};

export function getFullYearByTimeStamp(timestamp) {
    return Math.floor(timestamp / 1000 / 60 / 60 / 24 / 365);
}
