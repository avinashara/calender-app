export function createDaysArray(date, data) {
    let prev_month_last_day = new Date(
        date.getFullYear(),
        date.getMonth(),
        0).getDate();

    let first_week_day = (new Date(
        date.getFullYear(),
        date.getMonth(),
        2)).getDay();

    if (first_week_day === 0) first_week_day = 7;

    let first_array_element = prev_month_last_day - first_week_day + 2;

    let current_month_last_day = (new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDate();

    let days_array = new Array(42);
    let i = 0,
        text = null;
    for (i = 0; i < first_week_day - 1; ++i) {
        text = getDateString(date, first_array_element + i, 'pm');
        days_array[i] = {
            number: first_array_element + i,
            from: 'pm',
            events: data[text] ? data[text] : [],
            title: "No Dealing"
        }
    }
    for (let k = 1; k <= current_month_last_day; ++k) {       
        text = getDateString(date, k, 'cm');
        days_array[i] = {
            number: k,
            from: 'cm',
            weekend: i % 7 > 4,
            events: data[text] ? data[text] : [],
            title: "No Dealing"
        }
        i++;
    }
    for (let k = 0; i < days_array.length; ++k) {
        text = getDateString(date,  k + 1, 'nm');
        days_array[i] = {
            number: k + 1,
            from: 'nm',
            events: data[text] ? data[text] : [],
            title: "No Dealing"
        }
        i++;
    }
    return days_array;
}

function getDateString(date, day, flag) {
    let originalMonth = date.getMonth()+1;
    if (flag === 'pm') {
        originalMonth--;
    } else if (flag === 'nm') {
        originalMonth++;
    }
    originalMonth = originalMonth < 10 ? `0${originalMonth}` : originalMonth;
    day = day < 10 ? `0${day}` : day;
    return `${date.getFullYear()}-${originalMonth}-${day}`;
}
this.getDateString = getDateString.bind(this);

export function getDayEvents(date,data){
    let day=getDateString(date,date.getDate(),'cm');
    return data[day]?data[day]:[];
}