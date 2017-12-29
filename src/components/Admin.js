// import React, { Component } from "react";
// import "./App.css";
// import "./App"
// import { Grid, Row, Col } from "react-bootstrap";

// const ROOT_URL = "https://rmuse.live/api/1";

// let userProfile = [];
// /*Admin page for admin user. Needs to have ablilty to delete users or content.
// Ability to suspend account if user does not follow terms of website. Admin users should be 
// able to veiw other user profile.*/
// class Admin extends Component {
//     state = {
         
//       };
//     submitForm = e => {
//         e.preventDefault();
//         const user = Object.assign({}, this.state);
//         if (user.password.length <= 0) {
//           delete user.password;
//         }
//         this.props.onSubmitForm(user);
//       };
//     render() {
//     return(
//         <div>
//             <Grid><h2 className="text-left">User Profile</h2>
//             <Row>
//               <Col sm={4}>
//                 {/* <img src="IMG/Music.png" className="img-square" alt="Music" /> */}
//                 <p className="text-justify">Picture</p>
//               </Col>
//               <Col sm={4}>
//                 {/* <img /> */}
//                 <p className="text-justify">Picture</p>
//               </Col>
//               <Col sm={4}>
//                 {/* <img /> */}
//                 <p className="text-justify">Picture</p>
//               </Col>
//             </Row>
//             <button
//             className="btn btn-lg btn-primary pull-xs-right"
//             type="submit"
//             disabled={this.state.inProgress}
//           >
//             Delete User
//           </button>
//             </Grid>
            
//         </div>
//     );
// }
// }