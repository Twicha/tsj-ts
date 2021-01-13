import { formatDistance } from "date-fns";
import ru from "date-fns/locale/ru";

export const postedTime = (date: string) => {
    const dateNow = new Date().getTime();
    const is3h = Math.round((dateNow - new Date(date).getTime()) / 1000) > 3600 * 3;

    if (!is3h) {
        return formatDistance(new Date(date), new Date(), {
            locale: ru,
            addSuffix: true,
        });
    }
    
    return "kek";
};
