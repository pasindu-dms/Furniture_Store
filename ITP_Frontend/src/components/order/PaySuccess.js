import React, { Component } from 'react';
//import {Form,Button,Carousel,FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import '../../css/CardPay.css';
import BG from '../../images/1.gif';
import swal from 'sweetalert';

const PaySuccess = () => {

    return (

      <div className="App" >
        <center>
          <img className="bg-img" src={BG} alt='bg img' />
        </center>

        <h1 className="topic" style={{ textAlign: 'center' }}><b>Your Payment is Successfully completed.</b></h1>
        <br />
        <h4 style={{ textAlign: 'center' }}>Thank You for Shopping with Us.</h4>
        <div className="col-10 mt-5 ml-5 mr-10">
          <center>
            <form>
              <h4 style={{ textAlign: 'center' }}>Continue Shopping</h4>
              <br />
              <div className="form-group">
                <Link to={"/home2" } style={{ textAlign: 'center' }} className="btn btn-outline-primary btn-lg" role="button" ><span>Back to Home</span></Link>
              </div><br />



            </form>
          </center>
        </div>


        <br /><br />
        <br /><br /><br />
        <br /><br /><br />
        <br />

      </div>

    );
}
export default PaySuccess;

