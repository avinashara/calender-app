import React, { Component } from "react";
import "./calendarByMonth.css";
import DayContentView from "./dayContentView";
import { connect } from "react-redux";
import {DAYS_NAME} from '../js/constants/constant';
import {createDaysArray} from '../js/calendar/calendarFeature';


class CalendarByMonth extends Component {
  render() {
      let days=createDaysArray(this.props.currDate,this.props.apiData);
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
              apiData:state.apiData
          };
};
export default connect(mapStateToProps, null)(CalendarByMonth);
