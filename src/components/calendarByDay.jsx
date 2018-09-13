import React ,{Component} from 'react';
import './calendarByDay.css';
import { connect } from "react-redux";

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
                <section className="calendar-day-event_list_events"></section>
                </section>
            </section>
        )       
    }
}
export default CalendarByDay;