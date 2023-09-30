import React, { Fragment, useState, useEffect } from 'react'
import { useHistory, useParams, useLocation, Link } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert';


const Checkout = () => {

    let history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialtotalCost = searchParams.get('totalCost') || 0;


    const [customerName, setCustomerName] = useState("");
    const [address, setAddress] = useState("");
    const [Phone, setPhone] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [totalCost, setTotalCost] = useState(initialtotalCost);
    

    function sendData(e) {
        e.preventDefault();



    const newOrder = {
        customerName,
        address,
        Phone,
        orderDate,
        totalCost,

    }
    axios.post("http://localhost:8081/api/order/order/createorder", newOrder).then(() => {
        Swal({

            title: "Success",
  
            text: "Successfully Placed the Order!!",
  
            icon: "success",
  
            button: "OK" 
  
            });
            history.push('/payMethod');
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

           
                <div className="col-12 col-md-10">

                    <div className="row wrapper">

                        <div className="col-10 col-lg-5">

                            <form className="shadow-lg" onSubmit={sendData}>

                                <h1 className="mt-2 mb-5">Checkout</h1>
                              
                    

                                <div className="form-group">

                                    <label htmlFor="name_field">Full Name</label>

                                    <input

                                        type="name"

                                        id="name_field"

                                        className="form-control"

                                        name='customerName'

                                        onChange={(e) => {
                                            setCustomerName(e.target.value);  }}

                                    />

                                </div>
                                

                                <div className="form-group">

                                    <label htmlFor="email_field">Address</label>

                                    <input

                                        type="text"

                                        id="address_field"

                                        className="form-control"

                                        name='address'

                                        onChange={(e) => {
                                            setAddress(e.target.value);  }}

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

                                 name='orderDate'

                                 
                                 onChange={(e) => {
                                    setOrderDate(e.target.value);  }}

                             />

                          </div>

                          <div className="form-group">

                            <label htmlFor="description_field">Total Cost</label>
                            {/* <p className="form-control-plaintext">Rs.{totalCost}.00</p> */}
                             <input

                                 type="number"

                                 id="totalCost_field"

                                className="form-control"

                                 name='totalCost'

                                 value={totalCost}

                                onChange={(e) => {
                                 setTotalCost(e.target.value);  }}
                                readOnly
                             />  

                             </div>
                             {/* <div className="form-group">
                                <label htmlFor="payment_field">Payment Method</label>
                                <select
                                    id="payment_field"
                                    className="form-control"
                                    name="paymentMethod"
                                    onChange={(e) => {
                                    setPaymentMethod(e.target.value);
                                    }}
                                >
                                    <option value="select">Select</option>
                                    <option value="COD">Cash on Delivery</option>
                                </select>
                                </div> */}

            {/* <Link to="/payMethod">  */}
               <button type="submit" className="btn update-btn btn-block mt-4 mb-3" >Place Order</button>
               {/* </Link> */}

                            </form>

                        </div>

                    </div>

                </div>

           

 

        </Fragment>

    )

}
export default Checkout;
