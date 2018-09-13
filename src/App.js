import React, { Component } from 'react';
import './App.css';
import CalendarByDay from './components/calendarByDay';
import CalendarByMonth from './components/calendarByMonth';
import DateCarousel from './components/dateCarousel';
import { connect } from "react-redux";
import { setSelType } from "./js/actions/index";
import PropTypes from 'prop-types'

const mapDispatchToProps = dispatch => {
  return {
    setSelType: type => dispatch(setSelType(type))
  };
};
const mapStateToProps = state => {
  debugger;
  return { selType: state.selType };
};

class App extends Component {
  constructor(){
    super();
    this.state={
      selType:'M'
    }
  }
  
  handletoggle=(flag)=>{
    PropTypes.setSelType(flag);
    this.setState({selType:flag});
  }
  render=()=> {
    debugger;
    let content=PropTypes.selType!=='M'?<CalendarByMonth/>:<CalendarByDay/>;
    return (
      <section className="calendar">
        <section className="calendar_day-month-toggle">
            <section onClick={()=>this.handletoggle('M')} className={this.selected!=='M'?"calendar_day-month-toggle_month fill":"calendar_day-month-toggle_month"}><span className="calendar_day-month-toggle_month_text">MONTH</span></section>
            <section onClick={()=>this.handletoggle('D')} className={this.selected==='D'?"calendar_day-month-toggle_month fill":"calendar_day-month-toggle_month"}><span className="calendar_day-month-toggle_month_text">DAY</span></section>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
