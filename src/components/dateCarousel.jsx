import React, {Component} from 'react';
import './dateCarousel.css';

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
    getGetOrdinal(n) {
        var s=["th","st","nd","rd"],
        v=n%100;
        return n+(s[(v-20)%10]||s[v]||s[0]);
     } 
    render =()=>{
        const monthNames = ["January", "February", "March", "April", "May", "June",
                                "July", "August", "September", "October", "November", "December"],
            today= new Date();
        let selectedText= `${monthNames[today.getMonth()-1]}, ${today.getFullYear()}`;
        if(this.state.selected==='D'){
            selectedText= `${monthNames[today.getMonth()]} ${this.getGetOrdinal(today.getDate())}, ${today.getFullYear()}`
        }
        return(
            <React.Fragment>
                <section className="calender-selectedText">
                    <span onClick={()=>this.handlePrevious(true)} className="calender-selectedText_pre"></span>
                    <span className="calender-selectedText_text">{selectedText}</span>
                    <span onClick={()=>this.handlePrevious(true)} className="calender-selectedText_next"></span>
                </section>
                <button onClick={this.handleJumpToDateClick}></button>
            </React.Fragment>
        )
    }
}
export default DateCarousel;