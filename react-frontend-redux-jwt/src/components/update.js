// import {   Link } from "react-router-dom";
// import { React, useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import {useParams}from 'react-router-dom';
// import { render } from "react-dom";
// import { Container } from "reactstrap";
// //import "./Login.css";

// function update1() {
// const [msg,setMsg]=useState();
// const [couponedit ,setCouponedit]=useState(
//   { 
   
//         couponName: "",
//         couponValidity: "",
//         description: "",
//         couponCode: "",
//         couponCategory: "",
//         couponPrice: "",
//         couponQuantity: "",
//         couponBrand: "",
// }
// );
//   const Navigate=useNavigate();
//   const {couponId}=useParams();
// console.log(couponId);

// useEffect(()=>{
//   const editcouId=async()=>{
// const reqdata=await fetch (` /couponAndDeals/update/ ${couponId}`);
// const res=reqdata.json();
// setCouponedit(await res);


//   }
//   editCouponId();
// },[]
// )
// const handleEdit=(e)=>{

// setCouponedit({...couponedit,[e.target.name]:e.target.value});
// }

// const handlecouponupdate= async (e)=>{
//   e.preventDefault();
// const response=await axios.put(` /couponAndDeals/update/ ${couponId}`)
// setMsg(response.data.msg)

// setTimeout(()=>{
//   Navigate.push("/trainlist");

// },2000);




// }
// return(
   
//         <div className="col-md-12">
//                 <div className="card bg-light text-dark">
//                 <nav>
//         <img src="logo.png" class="logo" />
//         <ul>
          
//           <li><a href="admin">Go Back<BiLogOutCircle/></a></li>
          
//         </ul>
//       </nav>
//       </div>
      
//         <div>

//              <br></br>
//              <h2 className="text-center">Coupons List</h2>
//              <br/>
//                     <table className = "table table-striped table-bordered text-center ">

//                         <thead>
//                             <tr>
//                                 <th> Coupon Id </th>
//                                 <th> Coupon Name</th>
//                                 <th> Coupon Validity</th>
//                                 <th> Description</th>
//                                 <th> Coupon Code</th>
//                                 <th> Coupon Category</th>
//                                 <th> Coupon Price</th>
//                                 <th> Coupon Quantity</th>
//                                 <th> Coupon Brand</th>
//                                 <th> Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 this.state.coupons.map(
//                                     coupon => 
//                                     <tr key = {coupon.couponId}>
//                                          <td>{coupon.couponId}</td>
//                                          <td> {coupon.couponName} </td>   
//                                          <td> {coupon.couponValidity}</td>
//                                          <td> {coupon.description}</td>
//                                          <td> {coupon.couponCode}</td>
//                                          <td> {coupon.couponCategory}</td>
//                                          <td> {coupon.couponPrice}</td>
//                                          <td> {coupon.couponQuantity}</td>
//                                          <td> {coupon.couponBrand}</td>
//                                          <  td>
//                                              {/* <button style={{marginLeft: "9px"}} onClick={ () => this.deleteCoupon(coupon.couponId)} className="btn btn-danger">Delete </button> */}
//                                              <Link className="btn btn-primary mx-2" to={"/updateproduct"}> update </Link>

//                                          </td>
//                                     </tr>
                                    
//                                 )
//                             }
//                         </tbody>
//                     </table>

//              </div>
//              </div>            
      
//     )
  
    



//  }
// export default update1;