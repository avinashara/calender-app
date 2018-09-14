import React, { Component } from "react";
import "./calendarByMonth.css";
import DayContentView from "./dayContentView";
import { connect } from "react-redux";
import {DAYS_NAME} from '../js/constants/constant';


class CalendarByMonth extends Component {
  render() {
      let days= this.props.calendarData;
    return (
      <section className="calendar-by-month">      
        {DAYS_NAME.map((name,i)=>{
          return <li key={i} className="calendar-by-month_week-day">{name}</li>
        })}
        {days.map((day,i)=>{
                return <DayContentView className="calendar-by-month_days" key={i}  data={day}/>
        })}       
      </section>
    );
  }
}
const mapStateToProps = state => { 
  return { 
              currDate:state.currDate,
              calendarData:state.calendarData
          };
};
export default connect(mapStateToProps, null)(CalendarByMonth);
