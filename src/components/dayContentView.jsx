import React ,{Component} from 'react';
import './dayContentView.css';

class DayContentView extends Component{
    constructor(){
        super();
    }
    render =()=>{
        return (
            <section className={this.state.day== this.today?"day-content border":"day-content"}>
                <section className="day-content_day-text">

                </section>
                <section className="day-content_day-title">
                
                </section>
                <section className="day-content_day-events">
                
                </section>
                <section className={this.state.events.length>2?"day-content_day-button":"day-content_hide"}>
                
                </section>
            </section>
        )
    }
}
export default DayContentView;