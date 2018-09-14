import React, {Component} from 'react';
import './dateCarousel.css';
import { connect } from "react-redux";
import {MONTHS_NAME,TODAY, getGetOrdinal} from '../js/constants/constant'
import { setSelectedDate,setCurDate } from "../js/actions/action";

class DateCarousel extends Component{    
    constructor(){
        super();
        this.state={
            disabled:false
        }
    }
    handleJumpToDateClick=()=>{
        let selType=this.props.selType;
        if(selType==='M'){
            this.props.onSetSelDate(`${MONTHS_NAME[TODAY.getMonth()]}, ${TODAY.getFullYear()}`);
        }else{
            this.props.onSetSelDate(`${MONTHS_NAME[TODAY.getMonth()]} ${getGetOrdinal(TODAY.getDate())}, ${TODAY.getFullYear()}`);
        }
    }
    handlePrevious=(prev)=>{
        let currDate=this.props.currDate,
            selType=this.props.selType,
            flag=null;              
        if(selType==='M'){
            flag=(currDate.getMonth() - TODAY.getMonth()
                            + (12 * (currDate.getFullYear() - TODAY.getFullYear())));
            if((prev && flag > -5) ||(!prev &&  flag < 5)){
                let month= prev?(currDate.getMonth() - 1):(currDate.getMonth() + 1),
            newDate = new Date(currDate.getFullYear(),month, 1),
            text=`${MONTHS_NAME[newDate.getMonth()]}, ${newDate.getFullYear()}`;
            this.props.onSetCurrDate({newDate,text}); 
            }               
        }else if(selType==='D'){
            flag=Math.ceil(Math.abs(currDate.getTime() - TODAY.getTime()) / (1000 * 3600 * 24))<=180?false:true;
            if(!flag){
                let date= prev?(currDate.getDate() - 1):(currDate.getDate() + 1),
                newDate= new Date(new Date(currDate).setDate(date)),
                text=`${MONTHS_NAME[newDate.getMonth()]} ${getGetOrdinal(newDate.getDate())}, ${newDate.getFullYear()}`;
                this.props.onSetCurrDate({newDate,text});  
            }                      
        } 
        this.setState({disabled:flag});
    } 
    render =()=>{
        let selectedText=this.props.selectedText,disabled=this.state.disabled;
        return(
            <React.Fragment>
                <section className={this.props.selType==='M'?"calender-selectedText":"calender-selectedText calender-selectedText_dy"}>
                    <span onClick={()=>this.handlePrevious(true)} className="calender-selectedText_pre">&lt;</span>
                    <span className="calender-selectedText_text">{selectedText}</span>
                    <span onClick={()=>this.handlePrevious(false)} className="calender-selectedText_next">&gt;</span>   </section>
                <button onClick={this.handleJumpToDateClick} className="calender-selectedText_jump-today">Jump To Today</button>
                
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = {
    onSetSelDate:setSelectedDate,
    onSetCurrDate:setCurDate
};
const mapStateToProps = state => { 
    return { selType: state.selType,
                selectedText:state.selectedDate,
                currDate:state.currDate
            };
};
export default connect(mapStateToProps, mapDispatchToProps)(DateCarousel);