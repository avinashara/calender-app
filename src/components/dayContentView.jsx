import React ,{Component} from 'react';
import './dayContentView.css';
import { connect } from "react-redux";

class DayContentView extends Component{
    constructor(){
        super();
    }
    render =()=>{
        let data=this.props.data,refToday=data.number, today=new Date().getDate();
        return (
            <section className={refToday===today?"day-content border":"day-content"}>
                <section className="day-content_day-text">
                    <span>{refToday}</span>
                </section>
                <section className="day-content_day-title">
                    <span>{data.title}</span>
                </section>
                <section className="day-content_day-events">
                    {data.events.map((event,i)=>{
                        return <li className="">{event.desc}</li>
                    })}
                </section>
                <section className={data.events.length>2?"day-content_day-button":"day-content_hide"}>
                    <button>View All </button>
                </section>
            </section>
        )
    }
}
export default DayContentView;