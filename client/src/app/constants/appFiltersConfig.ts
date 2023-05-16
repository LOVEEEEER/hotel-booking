type FilterType = {
    label: string;
    value: string;
};

export const comfortList: FilterType[] = [
    {
        label: "Места для курения",
        value: "hasSmokeZone"
    },
    {
        label: "Бассейн",
        value: "hasSwimmingPool"
    },
    {
        label: "Банк",
        value: "hasBank"
    },
    {
        label: "Wi-Fi",
        value: "hasWifi"
    },
    {
        label: "Зал",
        value: "hasGym"
    },
    {
        label: "Парковка",
        value: "hasParking"
    },
    {
        label: "Кондинционер",
        value: "hasConditioner"
    }
];

export const breakfastList: FilterType[] = [
    {
        label: "Итальянский стол",
        value: "italian"
    },
    {
        label: "Шведский стол",
        value: "sweden"
    },
    {
        label: "Вегетерианский стол",
        value: "vegeterian"
    }
];

export const pageSizesList: FilterType[] = [
    { value: "6", label: "6" },
    { value: "12", label: "12" },
    { value: "18", label: "18" }
];

export const sortByList: FilterType[] = [
    {
        value: "asc",
        label: "Сначала дешевле"
    },
    { value: "desc", label: "Сначала дороже" }
];

export const categoriesList: FilterType[] = [
    {
        value: "president",
        label: "Президентский"
    },
    {
        value: "balcony",
        label: "С балконом"
    },
    {
        value: "studio",
        label: "Студия"
    },
    {
        value: "lovers",
        label: "Для пар"
    },
    {
        value: "business",
        label: "Бизнес"
    },
    {
        value: "luxury",
        label: "Люкс"
    }
];

export default {
    comfortList,
    breakfastList,
    pageSizesList,
    sortByList,
    categoriesList
};
