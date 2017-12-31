import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";




/*Trending title goes at top of page. Different categories of trending artists. Such as Photography, Filmagraphy, Music, vidoes, etc.
 columns of three or four.
Next 3 step sin up. Sign Up - Customize - Connect. Maybe move the Navbar in landing page or
leave it in the header.  Maybe change the navbar to navigate around the page.*/

class Home extends Component {
  render() {
    return (
      //Insert columns here.
      <div className="App">
        <h1>
          <a
            href=""
            className="typewrite"
            data-period="2000"
            data-type="[ &quot;Hi, Im an Artist.&quot;, &quot;I am Creative.&quot;, &quot;I Love Design.&quot;, &quot;I Love to Develop.&quot;]"
          >
            <span className="wrap" />
          </a>
        </h1>

        <div className="col-xs-2">
        <form className="search">
          <div className="input-group" >
          <label for="ex1"></label>
        <input type="text" className="form-control" placeholder="Search artist name or art"/>
         <div className="input-group-btn">
            <button className="btn btn-default" type="submit">
        <i className="glyphicon glyphicon-search"></i>
          </button>
        </div>
        </div>
</form>
        </div>
        <div>
        
          <Grid><h2 className="text-left">What's New</h2>
            <Row>
              <Col sm={4}>
                {/* <img src="IMG/Music.png" className="img-square" alt="Music" /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
            </Row>
            <h2 className="text-left">Most Popular</h2>
            <Row>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
            </Row>
            <h2 className="text-left">Trending Now</h2>
            <Row>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
            </Row>
            <h2 className="text-left">Most Shared</h2>
            <Row>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Picture</p>
              </Col>
              </Row>
              <h2 className="text-left">Events</h2>
            <Row>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">Downtown Mesa Festival of the Arts</p>
                <p className="text-justify">When: Oct 7 - Apr 21</p>
                <p className="text-justify">Where: Mesa, AZ</p>
                <a href="https://www.visitarizona.com/events/fairs-and-festivals/downtown-mesa-festival-of-the-arts">Details</a>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">2ND Annual Chandler International Film Festival</p>
                <p className="text-justify">When: Jan 12 - Jan 15</p>
                <p className="text-justify">Where: Chandler, AZ</p>
                <a href="https://www.visitarizona.com/events/fairs-and-festivals/2nd-annual-chandler-international-film-festival">Details</a>
                
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">59th Annual Tubac Festival of the Arts</p>
                <p className="text-justify">When: Feb 7 - Feb 11</p>
                <p className="text-justify">Where: Mesa, AZ</p>
                <a href="https://www.visitarizona.com/events/fairs-and-festivals/59th-annual-tubac-festival-of-the-arts">Details</a>
              </Col>
              <Col sm={4}>
                {/* <img /> */}
                <p className="text-justify">ASU Writer's Craft Conference 2018</p>
                <p className="text-justify">When: Jan 27</p>
                <p className="text-justify">Where: Tempe, AZ</p>
                <a href="https://www.eventbrite.com/e/asu-writers-craft-conference-2018-tickets-41156921460">Details</a>
              </Col>
              </Row>
          </Grid>
          
       
        </div>
      </div>
    );
  }
  /*3 step sign up process goes somewhere down here.
      1. Sign Up
      2. Cutomize Profile
      3. Connect
      Two buttons one says Join Now the other says Explore.
      */
}
export default Home;
