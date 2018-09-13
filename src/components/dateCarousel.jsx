import React, {Component} from 'react';
import './dateCarousel.css';
import { connect } from "react-redux";
import {MONTHS_NAME,TODAY, getGetOrdinal} from '../js/constants/constant'

class DateCarousel extends Component{
    constructor(){
        super();
        this.state={
            selected:'M'
        }
    }
    handleJumpToDateClick=()=>{

    }
    handlePrevious=(prev)=>{
        
    } 
    render =()=>{
        let selectedText= `${MONTHS_NAME[TODAY.getMonth()]}, ${TODAY.getFullYear()}`;
        if(this.state.selected==='D'){
            selectedText= `${MONTHS_NAME[TODAY.getMonth()]} ${getGetOrdinal(TODAY.getDate())}, ${TODAY.getFullYear()}`
        }
        return(
            <React.Fragment>
                <section className="calender-selectedText">
                    <span onClick={()=>this.handlePrevious(true)} className="calender-selectedText_pre">&lt;</span>
                    <span className="calender-selectedText_text">{selectedText}</span>
                    <span onClick={()=>this.handlePrevious(true)} className="calender-selectedText_next">&gt;</span>
                </section>
                <button onClick={this.handleJumpToDateClick} className="calender-selectedText_jump-today">Jump To Today</button>
            </React.Fragment>
        )
    }
}
export default DateCarousel;