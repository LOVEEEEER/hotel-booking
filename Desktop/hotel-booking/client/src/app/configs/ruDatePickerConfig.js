import moment from "moment";

function plural$4(word, num) {
    const forms = word.split("_");
    return num % 10 === 1 && num % 100 !== 11
        ? forms[0]
        : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)
        ? forms[1]
        : forms[2];
}
function relativeTimeWithPlural$3(number, withoutSuffix, key) {
    const format = {
        ss: withoutSuffix ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
        mm: withoutSuffix ? "минута_минуты_минут" : "минуту_минуты_минут",
        hh: "час_часа_часов",
        dd: "день_дня_дней",
        ww: "неделя_недели_недель",
        MM: "месяц_месяца_месяцев",
        yy: "год_года_лет"
    };
    if (key === "m") {
        return withoutSuffix ? "минута" : "минуту";
    } else {
        return number + " " + plural$4(format[key], +number);
    }
}
export const ruLocale = () =>
    moment.updateLocale("ru", {
        months: "Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь".split(
            "_"
        ),
        monthsShort:
            "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split(
                "_"
            ),
        monthsParseExact: true,
        weekdays:
            "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split(
                "_"
            ),
        weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: "H:mm",
            LTS: "H:mm:ss",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., H:mm",
            LLLL: "dddd, D MMMM YYYY г., H:mm"
        },
        calendar: {
            sameDay: "[Сегодня, в] LT",
            nextDay: "[Завтра, в] LT",
            lastDay: "[Вчера, в] LT",
            nextWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd, [в] LT";
                        default:
                            return now;
                    }
                } else {
                    if (this.day() === 2) {
                        return "[Во] dddd, [в] LT";
                    } else {
                        return "[В] dddd, [в] LT";
                    }
                }
            },
            lastWeek: function (now) {
                if (now.week() !== this.week()) {
                    switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd, [в] LT";
                        default:
                            return "";
                    }
                } else {
                    if (this.day() === 2) {
                        return "[Во] dddd, [в] LT";
                    } else {
                        return "[В] dddd, [в] LT";
                    }
                }
            },
            sameElse: "L"
        },
        relativeTime: {
            future: "через %s",
            past: "%s назад",
            s: "несколько секунд",
            ss: relativeTimeWithPlural$3,
            m: relativeTimeWithPlural$3,
            mm: relativeTimeWithPlural$3,
            h: "час",
            hh: relativeTimeWithPlural$3,
            d: "день",
            dd: relativeTimeWithPlural$3,
            w: "неделя",
            ww: relativeTimeWithPlural$3,
            M: "месяц",
            MM: relativeTimeWithPlural$3,
            y: "год",
            yy: relativeTimeWithPlural$3
        },
        meridiemParse: /ночи|утра|дня|вечера/i,
        isPM: function (input) {
            return /^(дня|вечера)$/.test(input);
        },

        meridiem: function (hour, minute, isLower) {
            if (hour < 4) {
                return "ночи";
            } else if (hour < 12) {
                return "утра";
            } else if (hour < 17) {
                return "дня";
            } else {
                return "вечера";
            }
        },
        dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
        ordinal: function (number, period) {
            switch (period) {
                case "M":
                case "d":
                case "DDD":
                    return number + "-й";
                case "D":
                    return number + "-го";
                case "w":
                case "W":
                    return number + "-я";
                default:
                    return number;
            }
        },
        week: {
            dow: 1,
            doy: 4
        }
    });
