import walletIcon from "../assets/svg/reasons/wallet.svg";
import lockIcon from "../assets/svg/reasons/lock.svg";
import onlineIcon from "../assets/svg/reasons/online.svg";

const reasons = [
    {
        name: "Доступные цены",
        _id: 1,
        image: walletIcon,
        description: "Отель имеет цены по соотношению цена/качество"
    },
    {
        name: "Безопасность",
        _id: 2,
        image: lockIcon,
        description: "Служба охраны всегда следит за вашей безопасностью"
    },
    {
        name: "Онлайн",
        _id: 3,
        image: onlineIcon,
        description:
            "Управлять бронированием отеля вы можете прямо на нашем сайте!"
    }
];

export default reasons;
