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

export function getDateByTimestamp(timestamp) {
    return new Date(timestamp).toString();
}
