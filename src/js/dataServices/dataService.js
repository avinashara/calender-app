import axios from 'axios';
import {createDaysArray} from '../calendar/calendarFeature';
import {setCalendarData} from '../actions/action';

export function getCalenderData() {
    return dispatch=> {
        return axios.get('http://localhost:3000/result').then((result) => {
                let data = result.data,
                    obj = {};
                data.forEach(element => {
                    element.fundHoliday.forEach(rec => {
                        let name = rec.fundHolidayDate;
                        if (obj.hasOwnProperty(name)) {
                            obj[name]=obj[name].concat(element.fundShareclass);
                        } else {
                            obj[name] = element.fundShareclass;
                        }
                    });
                });
                dispatch(setCalendarData(obj));
            }).catch(error => {
                console.log('Service call error');
                return error;
            });
        }
}