import React,{useState} from 'react';
import {useHistory }  from "react-router-dom";
import swal from 'sweetalert';
import '../../css/Forms.css';
import axios from "axios";
import Sidebar from '../common/sidebar/sidebar'

export default function CreateDriver(){
    
    let history = useHistory();
    
    const [empID,setEmpId]= useState("");
    const [empFirstName,setFirstName]= useState("");
    const [empLastName,setLastName]= useState("");
    const [empEmail,setEmail]= useState("");
    const [contactNumber,setContactNumber]= useState("");
    const [licenceType,setLicenceType]= useState("");


    const [errors, setErrors] = useState({});

    function sendDetails(e){
        e.preventDefault();
       // setErrors(validation(values));


         const  newDriver = {

            empID,
            empFirstName,
            empLastName,
            empEmail,
            contactNumber,
            licenceType
         }
         
         axios.post("http://localhost:8081/api/delivery/drivers/addnewdriver",newDriver).then(()=>{
            swal({

                title: "Success",
    
                text: "Successfully Added New Driver !",
    
                icon: "success",
    
                button: "OK"
    
              });
  
             history.push("/driver-list");

         }).catch((err)=> {

            alert(err)
         })

    }
    
        return (
          <>
           <Sidebar/> 

              <div class="container" style={{ marginTop: '6%' }}>
                <div class="title">Add New Driver</div>
                <div class="content">
                  <form action="/driver-list" onSubmit={sendDetails}>
                    <div class="user-details">

                    <div class="input-box">
                        <span class="details">Employee ID </span>
                        <input type="text" className="form-control" id="fname" onChange={(e)=>{
                          
                          setEmpId(e.target.value); }}
                          placeholder="Enter Employee Id"
                          required
                          />
                      </div>  
                      <div class="input-box">
                        <span class="details">First Name</span>
                        <input type="text" className="form-control" id="fname" onChange={(e)=>{
                          
                          setFirstName(e.target.value); }}
                          placeholder="Enter First Name"
                          required
                          />
                      </div>      
                      <div class="input-box">
                        <span class="details">Last Name</span>
                        <input type="text" className="form-control" id="lname"  onChange={(e)=>{
                         
                         setLastName(e.target.value);  }}
                         placeholder="Enter Last Name"
                         required
                        />
                      </div>
                      <div class="input-box">
                        <span class="details">Email</span>
                        <input type="email" className="form-control" id="email" onChange={(e)=>{
                          
                        setEmail(e.target.value); }}
                        placeholder="Enter Email"
                        required
                        />

                      </div>
                      <div class="input-box">
                        <span class="details">Contact Number</span>
                        <input type="tel" className="form-control" id="contactNumber" maxLength="9" pattern="[1-9]{2}[0-9]{7}" onChange={(e)=>{
                          
                         setContactNumber(e.target.value);}}
                         placeholder="Enter Contact Number"
                         required
                         />
                      </div>
                      <div class="input-box">
                         <span class="details">Licence Type</span>
                         <input type="text" className="form-control" id="licenceType" onChange={(e)=>{
                          
                          setLicenceType(e.target.value);
                          }}
                          placeholder="Enter Licence Type"
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

