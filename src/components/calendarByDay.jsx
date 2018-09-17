import React ,{Component} from 'react';
import './calendarByDay.css';
import { connect } from "react-redux";
import {DAYS_NAME, MONTHS_NAME,getGetOrdinal} from '../js/constants/constant';
import {getDayEvents} from '../js/calendar/calendarFeature';

class CalendarByDay extends Component{
    render=()=>{
        let date=this.props.currDate,
        text= `${DAYS_NAME[date.getDay()]}, ${MONTHS_NAME[date.getMonth()]} ${getGetOrdinal(date.getDate())}`,
        title="No Dealing",
        events=getDayEvents(date,this.props.apiData);
        return (
            <section className="calendar-day-event">
                <section className="calendar-day-event_date">
                    <span>{text}</span>
                </section>
                <section className="calendar-day-event_title">
                    <span>{title}</span>
                </section>
                <section className="calendar-day-event_list">                
                {events.map((data,i)=>{
                    return <li className="calendar-day-event_list_events" key={i}>{data.name}</li>
                })}
                </section>
            </section>
        )       
    }
}
const mapStateToProps = state => { 
    return { 
            currDate:state.currDate,
            apiData:state.apiData
        };
};
export default connect(mapStateToProps, null)(CalendarByDay);