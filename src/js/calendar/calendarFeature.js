export function createDaysArray(date) {
    let prev_month_last_day = new Date(
        date.getFullYear(),
        date.getMonth(),
        0).getDate()

    let first_week_day = (new Date(
        date.getFullYear(),
        date.getMonth(),
        2)).getDay();

    if (first_week_day === 0) first_week_day = 7

    let first_array_element = prev_month_last_day - first_week_day + 2

    let current_month_last_day = (new Date(date.getFullYear(), date.getMonth() + 1, 0)).getDate()

    let days_array = new Array(42)
    let i = 0
    for (i = 0; i < first_week_day - 1; ++i) {
        days_array[i] = {
            number: first_array_element + i,
            from: 'prev month',
            events:[],
            title:"NO Dealing"
        }
    }
    for (let k = 1; k <= current_month_last_day; ++k) {
        days_array[i] = {
            number: k,
            from: 'currnet month',
            weekend: i % 7 > 4,
            events:[],
            title:"NO Dealing"
        }
        i++
    }
    for (let k = 0; i < days_array.length; ++k) {
        days_array[i] = {
            number: k + 1,
            from: 'next month',
            events:[],
            title:"NO Dealing"
        }
        i++
    }
    return days_array
}