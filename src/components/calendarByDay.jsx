import React ,{Component} from 'react';
import './calendarByDay.css';
import { connect } from "react-redux";
import {DAYS_NAME, MONTHS_NAME,getGetOrdinal} from '../js/constants/constant';

class CalendarByDay extends Component{
    render=()=>{
        let date=this.props.currDate;
        let text= `${DAYS_NAME[date.getDay()]}, ${MONTHS_NAME[date.getMonth()]} ${getGetOrdinal(date.getDate())}`,
        title='title'
        return (
            <section className="calendar-day-event">
                <section className="calendar-day-event_date">
                    <span>{text}</span>
                </section>
                <section className="calendar-day-event_title">
                    <span>{title}</span>
                </section>
                <section className="calendar-day-event_list">
                <section className="calendar-day-event_list_events">
                
                </section>
                </section>
            </section>
        )       
    }
}
const mapStateToProps = state => { 
    return { 
            currDate:state.currDate
        };
};
export default connect(mapStateToProps, null)(CalendarByDay);