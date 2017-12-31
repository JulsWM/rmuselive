import React, { Component } from "react";
import "./App.css";
import "./App"
import Header from "./components/Header";
import Footer from "./components/Footer";
import BigCalendar from 'react-big-calendar';

const ROOT_URL = "http://rmuse.live/api/1";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

//Feed of events maybe easier to do than creating calendar. 
class MyCalendar extends Component {
//    constructor(props) {
//     const MyCalendar = props => (BigCalendar);  
//    }
//    state = {
//        changedView: false
//    };
//    deleteEvent(event) {
//        console.log(event);
//        let email = localStroage.getItem("userEmail");
//        console.log(email);
//        axios
//        .post(`${ROOT_URL}/removeFromCalendar`, { event, email })
//        .then(response => {
//            console.log("Event Removed was successfull");
//            console.log(this.state);
//        })
//        .catch(err => {
//            console.log(err);
//        });
//    }
render(){
    return(
        
        <div>
            {/* <BigCalendar
            {...this.props}
            events={myEventLists}
            startAccessor='startDate'
            endAccessor='endDate' 
            /> */}
            <Grid>
                <Row>
                    <Col>
                    <a href="/calendar">Calendar</a>
                    </Col>
                    </Row>
              </Grid>  
        </div>
    )
}

}

export default MyCalendar;