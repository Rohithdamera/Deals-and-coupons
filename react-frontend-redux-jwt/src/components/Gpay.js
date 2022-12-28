import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import couponService from "../services/couponService";
import { connect } from "react-redux";
import { BiLogOutCircle } from "react-icons/bi";
import GooglePlayButton from '@google-pay/button-react'


class Gpay extends Component {
    render(){
        return(
        <div class="ac-center box">
        <div class="ac">
          <div class="img-cover">
            <img src="gpay.png" alt="" />
          </div>
         <h4> <span><li><a href="buying.html">Continue</a></li></span></h4>
         
         {/* {/* <li><a href="buying.html">PAY</a></li>
          
          <div class="price">INR 200</div> */}
           <li><a href="Coupons">Go Back<BiLogOutCircle/></a></li> 
        </div>
        </div>
        )
    }
}

export default Gpay