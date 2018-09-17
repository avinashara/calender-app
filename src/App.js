import React, { Component } from 'react';
import './App.css';
import CalendarByDay from './components/calendarByDay';
import CalendarByMonth from './components/calendarByMonth';
import DateCarousel from './components/dateCarousel';
import { connect } from "react-redux";
import { setSelType,setCalendarData } from "./js/actions/action";
//import {getCalenderData} from './js/dataServices/dataService';

class App extends Component { 
  // componentDidMount(){
  //   getCalenderData().then((res)=>{
  //     this.props.onSetCalendarData(res);
  //   });    
  // }
  
  handletoggle=(flag)=>{
    this.props.onSetType(flag);
  }
  render=()=> {
    let selType=this.props.selType,
     content=selType ==='M'?<CalendarByMonth/>:<CalendarByDay/>;
    return (
      <section className="calendar">
        <section className="calendar_day-month-toggle">
            <section onClick={()=>this.handletoggle('M')} className={selType==='M'?"calendar_day-month-toggle_month fill":"calendar_day-month-toggle_month"}><span className="calendar_day-month-toggle_month_text">MONTH</span></section>
            <section onClick={()=>this.handletoggle('D')} className={selType==='D'?"calendar_day-month-toggle_month fill":"calendar_day-month-toggle_month"}><span className="calendar_day-month-toggle_month_text">DAY</span></section>
            <section className="calendar_selected-text">
              <DateCarousel />
            </section>
        </section>        
        <section className="calendar_result-region">
          {content}
        </section>
      </section>
    );
  }
}
const mapDispatchToProps = {
  onSetType:setSelType,
  onSetCalendarData:setCalendarData
};
const mapStateToProps = state => { 
  return { selType: state.selType };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
