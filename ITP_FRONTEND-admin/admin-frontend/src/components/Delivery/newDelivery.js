import React,{useState} from 'react';
import {useHistory }  from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import axios from "axios";
import Sidebar from '../common/sidebar/sidebar'

export default function NewDelivery(){
    
    let history = useHistory();
    
    const [receiverAddress,setReceiverAddress]= useState("");
    const [receiverContactNumber,setReceiverContactNumber]= useState("");
    const [assignedDriver,setAssignedDriver]= useState("");
    const [deliveryDate,setDeliveryDate]= useState("");
    const [deliveryStatus,setDeliveryStatus]= useState("");
    const [vehicleNo,setVehicleNo]= useState("");

    const [errors, setErrors] = useState({});

    function sendDetails(e){
        e.preventDefault();
       // setErrors(validation(values));


         const  newDelivery = {

            receiverAddress,
            receiverContactNumber,
            assignedDriver,
            deliveryDate,
            deliveryStatus,
            vehicleNo
         }
         
         axios.post("http://localhost:8081/api/delivery/delivery/addnewdelivery",newDelivery).then(()=>{
            swal({

                title: "Success",
    
                text: "Successfully Added New Delivey !",
    
                icon: "success",
    
                button: "OK"
    
              });
  
             history.push("/all-deliveries");

         }).catch((err)=> {

            alert(err)
         })

    }
    
        return (
          <>
           <Sidebar/> 

              <div class="container" style={{ marginTop: '1%' }}>
                <div class="title">Add New Delivery</div>
                <div class="content">
                  <form action="/all-deliveries" onSubmit={sendDetails}>
                    <div class="user-details">

                    <div class="input-box">
                        <span class="details"> Receiver Address </span>
                        <input type="text" className="form-control" id="receiverAddress" onChange={(e)=>{
                          
                          setReceiverAddress(e.target.value); }}
                          placeholder="Enter Address"
                          required
                          />
                      </div>  
                      <div class="input-box">
                        <span class="details">Contact Number</span>
                        <input type="number" className="form-control" maxLength="9" pattern="[1-9]{2}[0-9]{7}" id="receiverContactNumber" onChange={(e)=>{
                          setReceiverContactNumber(e.target.value); }}
                          placeholder="Enter Contact Number"
                          required
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">Driver Name</span>
                        <input type="text" className="form-control" id="assignedDriver"  onChange={(e)=>{ 
                         setAssignedDriver(e.target.value);  }}
                         placeholder="Enter Driver Name"
                         required
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Delivery Date</span>
                        <input type="date" className="form-control" id="deliveryDate" onChange={(e)=>{ 
                        setDeliveryDate(e.target.value); }}
                        placeholder="Enter date"
                        required
                        />
                      </div>

                      <div class="input-box">
                        <span class="details">Delivery Status</span>
                        <input type="text" className="form-control" id="deliveryStatus" onChange={(e)=>{ 
                         setDeliveryStatus(e.target.value);}}
                         placeholder="Delivery Status"
                         required
                         />
                      </div>
                      <div class="input-box">
                         <span class="details">Velicle No</span>
                         <input type="text" className="form-control" id="vehicleNo" onChange={(e)=>{
                          setVehicleNo(e.target.value); }}
                          placeholder="Enter Vehicle No"
                          required
                          />
                       </div>
                     </div>

                     <div class="button">
                      <input type="submit" value="Save Details"/>
                    </div>
                  </form>
                </div>
              </div>
         </>
            
    );

};
