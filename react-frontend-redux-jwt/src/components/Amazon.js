import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import couponService from "../services/couponService";
import { connect } from "react-redux";
import { BiLogOutCircle } from "react-icons/bi";
import GooglePlayButton from '@google-pay/button-react'


class Amazon extends Component {
    render(){
        return(
        <div class="ac-center box">
        <div class="ac">
          <div class="img-cover">
            <img src="Amazonlog.png" alt="" />
          </div>
         <h4> <span><li><a href="Coupons">Coupons</a></li></span></h4>
         
          <p>are available upto 50% off on Amazon</p>
          
          
          <div class="price">INR Starting from 200</div>
          <li><a href="home">Go Back<BiLogOutCircle/></a></li>
        </div>
        </div>
        )
    }
}

export default Amazon