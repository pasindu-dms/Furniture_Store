import React, { Fragment, useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import axios from "axios";
import Swal from 'sweetalert';

export default function AddFeedback() {

    const [Username, setUsername] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [date, setDate] = useState("");
    const [feedbackMsg, setFeedbackMsg] = useState("");

    function sendData(e) {
        e.preventDefault();



    const newFeedback = {
        Username,
        Email,
        Phone,
        date,
        feedbackMsg
    }
    axios.post("http://localhost:8081/api/feedback/feedback/addfeedback", newFeedback).then(() => {
        Swal({

            title: "Success",
  
            text: "Successfully Added Feedback!!",
  
            icon: "success",
  
            button: "OK"
  
            });
    }).catch((err) => {
        console.log(err);
        Swal({

            title: "warning",
  
            text: "Please Try Again!!",
  
            icon: "info",
  
            button: "OK"
  
            });
        
       
        
    })

}





    return (

        <Fragment>

            <div className="row">

            <div className="col-12 col-md-2">

               <Sidebar />

            </div>



                <div className="col-12 col-md-10">

                    <div className="row wrapper">

                        <div className="col-10 col-lg-5">

                            <form className="shadow-lg" onSubmit={sendData}>

                                <h1 className="mt-2 mb-5">New Feedback</h1>

 

                                <div className="form-group">

                                    <label htmlFor="name_field">User Name</label>

                                    <input

                                        type="name"

                                        id="name_field"

                                        className="form-control"

                                        name='name'

                                        onChange={(e) => {
                                            setUsername(e.target.value);  }}

                                    />

                                </div>

 

                                <div className="form-group">

                                    <label htmlFor="email_field">Email</label>

                                    <input

                                        type="email"

                                        id="email_field"

                                        className="form-control"

                                        name='email'

                                        onChange={(e) => {
                                            setEmail(e.target.value);  }}

                                    />

                                </div>


                            <div className="form-group">

                            <label htmlFor="phone_field">Phone Number</label>

                            <input

                                 type="number"

                                 id="phone" maxLength="9" pattern="[1-9]{2}[0-9]{7}"

                                className="form-control"

                                 name='phone'

                                 onChange={(e) => {
                                    setPhone(e.target.value);  }}


                             />

                          </div>

                          <div className="form-group">

                            <label htmlFor="date_field">Date</label>

                            <input

                                 type="date"

                                 id="date_field"

                                className="form-control"

                                 name='date'

                                 
                                 onChange={(e) => {
                                    setDate(e.target.value);  }}

                             />

                          </div>

                          <div className="form-group">

                            <label htmlFor="description_field">Description</label>

                            <input

                                 type="text"

                                 id="description_field"

                                className="form-control"

                                 name='description'

                                 onChange={(e) => {
                                    setFeedbackMsg(e.target.value);  }}


                             />

                          </div>
 

                                <button type="submit" className="btn update-btn btn-block mt-4 mb-3" >Add Feedback</button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

 

        </Fragment>

    )

}
