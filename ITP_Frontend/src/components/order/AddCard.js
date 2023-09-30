import React, { Fragment, useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import axios from "axios";
import Swal from 'sweetalert';

export default function AddCard() {

    const [cardnumber, setCardNumber] = useState("");
    const [customerName, setCustomerName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCVC] = useState("");

    function sendData(e) {
        e.preventDefault();



    const newCard = {
        cardnumber,
        customerName,
        expiry,
        cvc
    
    }
    axios.post("http://localhost:8081/api/payment/cardpay/addnewcard", newCard).then(() => {
        Swal({

            title: "Success",
  
            text: "Successfully Added Card!!",
  
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

                                <h1 className="mt-2 mb-5">New Card</h1>

 

                                <div className="form-group">

                                    <label htmlFor="name_field">Card Number</label>

                                    <input

                                        type="text"

                                        id="cardnumber-field"

                                        className="form-control"

                                        name='cardnumber'

                                        onChange={(e) => {
                                            setCardNumber(e.target.value);  }}

                                    />

                                </div>

 

                                <div className="form-group">

                                    <label htmlFor="email_field">Name</label>

                                    <input

                                        type="text"

                                        id="customerName-field"

                                        className="form-control"

                                        name='customerName'

                                        onChange={(e) => {
                                            setCustomerName(e.target.value);  }}

                                    />

                                </div>

                          <div className="form-group">

                            <label htmlFor="date_field">Expire Date</label>

                            <input

                                 type="date"

                                 id="expiry_field"

                                className="form-control"

                                 name='expiry'

                                 
                                 onChange={(e) => {
                                    setExpiry(e.target.value);  }}

                             />

                          </div>

                          <div className="form-group">

                            <label htmlFor="description_field">cvc</label>

                            <input

                                 type="number"

                                 id="cvc_field"

                                className="form-control"

                                 name='cvc'

                                 onChange={(e) => {
                                    setCVC(e.target.value);  }}


                             />

                          </div>
 

                                <button type="submit" className="btn update-btn btn-block mt-4 mb-3" >Add Card</button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

 

        </Fragment>

    )

}
