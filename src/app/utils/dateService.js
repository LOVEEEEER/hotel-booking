export function getFormatDate(newDate) {
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
    const date = new Date(parseInt(data));
    const dateNow = new Date();
    const yearDif = dateNow.getFullYear() - date.getFullYear();
    if (yearDif === 0) {
        const dayDif = dateNow.getDate() - date.getDate();
        if (dayDif === 0) {
            const hourDif = dateNow.getHours() - date.getHours();
            if (hourDif === 0) {
                const minutesDif = dateNow.getMinutes() - date.getMinutes();

                if (minutesDif >= 0 && minutesDif < 1) return "Только что";
                if (minutesDif < 5) {
                    return `${minutesDif} минуты назад`;
                }
                return `${minutesDif} минут назад`;
            }
            return `${date.getHours()}:${date.getMinutes()}`;
        }

        return `${date.getDate()} ${date.toLocaleString("default", {
            month: "long"
        })}`;
    }
    return (
        date.getFullYear() + "." + (date.getMonth() + 1) + "_" + date.getDate()
    );
}
