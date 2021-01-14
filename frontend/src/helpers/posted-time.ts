import { format, formatDistance, formatRelative } from "date-fns";
import ru from "date-fns/locale/ru";

export const postedTime = (date: string, simple?: boolean) => {
    const dateNow = new Date();
    const is3h =
        Math.round((dateNow.getTime() - new Date(date).getTime()) / 1000) > 3600 * 3;
    const is2d = dateNow.getDate() - new Date(date).getDate() >= 2;

    if (!is3h && !simple) {
        return formatDistance(new Date(date), new Date(), {
            locale: ru,
            addSuffix: true,
        });
    }

    if (!is2d && !simple) {
        return formatRelative(new Date(date), new Date(), {
            locale: ru,
        });
    }

    return format(new Date(date), "dd MMMM yyyy г.  H:mm", {
        locale: ru,
    });
};
