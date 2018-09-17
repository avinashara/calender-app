import React ,{Component} from 'react';
import './dayContentView.css';
import { connect } from "react-redux";
import { setForceUpdateSelType } from "../js/actions/action";

class DayContentView extends Component{
    handleViewAll=(data)=>{           
        let currDate=this.props.currDate,
            crrMonth= new Date(currDate).getMonth(),
            newDate=null;
        switch(data.from){
            case 'nm':
                    newDate=new Date(new Date(currDate).setDate(data.number)).setMonth(crrMonth+1);
                    break;
            case 'pm':
                    newDate=new Date(new Date(currDate).setDate(data.number)).setMonth(crrMonth-1);
                    break;
            default:
                    newDate=new Date(currDate).setDate(data.number);
        }    
        let obj={
            currDate: new Date(newDate)
        }
        this.props.onSetForceUpdateSelType(obj);
    }
    render =()=>{
        let data=this.props.record,today=new Date(),
        events=data.events.slice(0,2);
        let currDate= this.props.currDate,
        border=(today.getDate()===data.number && currDate.getMonth()=== today.getMonth() && currDate.getFullYear()=== today.getFullYear())?true:false;        
        return (
            <section className={border?"day-content border":"day-content"}>
                <section className="day-content_day-text">
                    <span>{data.number}</span>
                </section>
                <section className="day-content_day-title">
                    <span>{data.title}</span>
                </section>
                <section className="day-content_day-events">
                    {events.map((event,i)=>{
                        return <li className="day-content_day-events_list" key={i}>{event.name}</li>
                    })}
                </section>
                <button onClick={()=>this.handleViewAll(data)} className={data.events.length>2?"day-content_day-button_text":" day-content_day-button_text day-content_hide"}>View All({data.events.length})&ensp;&gt;&ensp;</button>
            </section>
        )
    }
}
const mapDispatchToProps = {
    onSetForceUpdateSelType:setForceUpdateSelType
};
const mapStateToProps = (state, props) => { 
    return { 
        record:props.data,
        currDate:state.currDate
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DayContentView);