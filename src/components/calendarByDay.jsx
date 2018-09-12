import React ,{Component} from 'react';
import './calendarByDay.css';

class CalendarByDay extends Component{
    constructor(){
        super();
    }
    render=()=>{
        return (
            <section className="calendar-day-event">
            <section className="calendar-day-event_date">
            </section>
            <section className="calendar-day-event_title"></section>
            <section className="calendar-day-event_list">
            </section>
        </section>
        )       
    }
}
export default CalendarByDay;