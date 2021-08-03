import isSameDay from 'date-fns/isSameDay';
import isSameMonth from 'date-fns/isSameMonth';
import isSameWeek from 'date-fns/isSameWeek';
import isBefore from 'date-fns/isBefore';
import addDays from 'date-fns/addDays';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import startOfMonth from 'date-fns/startOfMonth';
import endOfMonth from 'date-fns/endOfMonth';

export const weekConfig = { weekStartsOn: 1 };

export const getDatePeriod = (start, end) => {
    let currentDay = start;
    const result = [];

    do {
        result.push(currentDay);
        currentDay = addDays(currentDay, 1);
    } while (isSameDay(currentDay, end) || isBefore(currentDay, end));
    
    return result;
}

export const getWeekDays = (day) => getDatePeriod(startOfWeek(day, weekConfig), endOfWeek(day, weekConfig));

export const getMonthDaysWithAdditionalDays = (day) => getDatePeriod(
    startOfWeek(startOfMonth(day), weekConfig),
    endOfWeek(endOfMonth(day), weekConfig),
);

export const monthAliases = ['Январь', 'Февряль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
export const getMonthAlias = monthId => monthAliases[monthId];

export const weekDayAliases = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
export const getWeekDayAlias = dayId => weekDayAliases[dayId];

export const formatDate = date => `${getWeekDayAlias(date.getDay())}, ${getMonthAlias(date.getMonth())} ${date.getDate()}`;
