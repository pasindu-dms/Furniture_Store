import React, { useState, useEffect , Fragment} from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory, useParams } from 'react-router-dom';
import swal from 'sweetalert';
import Sidebar from './Sidebar'

function Updatefeedback() {


  let history = useHistory();
  const { id } = useParams();
  const [feedbackDateValue, setFeedbackDateValue] = useState("");
  const [val, setVal] = useState({
    Username: "",
    Phone: "",
    Email: "",
    date: "",
    feedbackMsg:""
  });

  const { Username, Phone, Email, date, feedbackMsg } = val;
  const onInputChange = e => {
    setVal({ ...val, [e.target.name]: e.target.value });
  };


  useEffect(() => {
    loadVal();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();

    await axios.put(`http://localhost:8081/api/feedback/feedback/update/${id}`, val)
    swal({

      title: "Success",

      text: "Feedback Updated Successfully!",

      icon: "success",

      button: "OK"

    });
    window.location.assign("/Myfeedback")
    //history.push('/Myfeedback');

  };

  const loadVal = async () => {

    const result = await axios.get(`http://localhost:8081/api/feedback/feedback/getfeedbackbyid/${id}`);
    setVal(result.data);
    setFeedbackDateValue(formatDate(result.data.date));
  };

      // Function to format date to yyyy-MM-dd
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

  return (

    // <div className="container">
    //   <div className="raw">
    //     <div class="card10" >
    //       <div className="card-body">
    //         <div className="image">
    //           <img src={`../prodImage/` + val.image} width="300px" height="300px" />
    //         </div>
    //       </div>
    //     </div>

    //     <div class="card2" >
    //       <div className="card-body">
    //         <div className="add_itm">
    //           <div className="col-lg-6 text-light">
    //             <div className="col" style={{ fontSize: '20px' }}>
    //               <form onSubmit={e => onSubmit(e)}>
    //                 <div className="form-group">
    //                   <input type="text" name="itemName" value={itemName} id="itemName" className="form-control0" onChange={(e) => onInputChange(e)} readOnly required />
    //                 </div>

    //                 <div className="form-group">
    //                   <input type="text" name="price" id="price" value={price} className="form-control0" onChange={(e) => onInputChange(e)} readOnly required />
    //                 </div>

    //                 <div className="form-group">
    //                   <input type="text" name="itemDescription" id="itemDescription" value={itemDescription} className="form-control0" style={{ fontSize: "16px", width: "400px" }} onChange={(e) => onInputChange(e)} readOnly required />
    //                 </div>

    //                 <div className="form-group">
    //                   <input type="text" name="quantity" id="quantity" className="form-control0" value={quantity} onChange={(e) => onInputChange(e)} required />
    //                 </div>
    //                 <button type="submit" className="btn btn-warning bt">Update Cart</button>
    //               </form>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <Fragment>

    <div className="row">

    <div className="col-12 col-md-2">

       <Sidebar />

    </div>



        <div className="col-12 col-md-10">

            <div className="row wrapper">

                <div className="col-10 col-lg-5">

                    <form className="shadow-lg" onSubmit={e => onSubmit(e)}>

                        <h1 className="mt-2 mb-5">Update Feedback</h1>



                        <div className="form-group">

                            <label htmlFor="name_field">User Name</label>

                            <input

                                type="name"

                                id="Username"

                                className="form-control"

                                name='Username'

                                value={Username}

                                onChange={(e) => onInputChange(e)} readOnly required

                            />

                        </div>



                        <div className="form-group">

                            <label htmlFor="email_field">Email</label>

                            <input

                                type="email"

                                id="Email"

                                className="form-control"

                                name='Email'

                                value={Email}

                                onChange={(e) => onInputChange(e)} required
                            />

                        </div>


                    <div className="form-group">

                    <label htmlFor="phone_field">Phone Number</label>

                    <input

                         type="number"

                         id="Phone" maxLength="9" pattern="[1-9]{2}[0-9]{7}"

                        className="form-control"

                         name='Phone'
                         value={Phone}

                         onChange={(e) => onInputChange(e)} required


                     />

                  </div>

                  <div className="form-group">

                    <label htmlFor="date_field">Date</label>

                    <input

                         type="date"

                         id="date"

                        className="form-control"

                         name='date'

                         
                         value={feedbackDateValue}

                         onChange={(e) => onInputChange(e)} required


                     />

                  </div>

                  <div className="form-group">

                    <label htmlFor="description_field">Feedback</label>

                    <input

                         type="text"

                         id="feedbackMsg"

                        className="form-control"

                         name='feedbackMsg'

                         value={feedbackMsg}

                         onChange={(e) => onInputChange(e)} required


                     />

                  </div>


                        <button type="submit" className="btn update-btn btn-block mt-4 mb-3" >Update Feedback</button>

                    </form>

                </div>

            </div>

        </div>

    </div>



</Fragment>


  );

}

export default Updatefeedback;