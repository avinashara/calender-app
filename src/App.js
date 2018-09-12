import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalendarByDay from './components/calendarByDay';
import CalendarByMonth from './components/calendarByMonth';
import DateCarousel from './components/dateCarousel';

class App extends Component {
  constructor(){
    super();
    this.state={
      selected:'M'
    }
  }
  handletoggle=(flag)=>{
    this.setState({selected:flag});
  }
  render=()=> {
    let content=this.state.selected==='M'?<CalendarByMonth/>:<CalendarByDay/>;
    return (
      <section className="calendar">
        <section className="calendar_day-month-toggle">
            <section onClick={()=>this.handletoggle('M')} className={this.selected==='M'?"calendar_day-month-toggle_month fill":"calendar-day-month-toggle_month"}><span className="calendar_day-month-toggle_month_text">MONTH</span></section>
            <section onClick={()=>this.handletoggle('D')} className={this.selected==='D'?"calendar_day-month-toggle_month fill":"calendar-day-month-toggle_month"}>DAY</section>
        </section>
        <section className="calendar_selected-text">
          <DateCarousel />
        </section>
        <section className="calendar_result-region">
          {content}
        </section>

      </section>
    );
  }
}

export default App;
