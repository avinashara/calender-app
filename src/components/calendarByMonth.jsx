import React, {Component} from 'react';
import './calendarByMonth.css';
import DayContentView from './dayContentView';

class CalendarByMonth extends Component{
    constructor(){
        super();        
    };

    render(){
        return (
        <section>
            <DayContentView/>
        </section>
        )
       
    };
}
export default CalendarByMonth;