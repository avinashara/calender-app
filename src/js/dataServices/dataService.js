import axios from 'axios';
import {createDaysArray} from '../calendar/calendarFeature';

export function getCalenderData() {
    return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/result').then((result) => {
            let data = result.data,
                obj = {};
            data.forEach(element => {
                element.fundHoliday.forEach(rec => {
                    let name = rec.fundHolidayDate;
                    if (obj.hasOwnProperty(name)) {
                        obj[name].push(element.fundShareclass);
                    } else {
                        obj[name] = element.fundShareclass;
                    }
                });
            });
            resolve(createDaysArray(new Date(), obj));
        });
    });
}