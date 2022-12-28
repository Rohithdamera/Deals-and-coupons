import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import couponService from "../services/couponService";
import { connect } from "react-redux";
import { BiLogOutCircle } from "react-icons/bi";


class getallusers extends Component {

    constructor(props) {
        super(props);



        this.state = {
            coupons:[]
        }
        // this.deleteCoupon = this.deleteCoupon.bind(this);


    }

    // deleteCoupon(couponId){
    //     couponService.deleteCoupon(couponId).then( res => {
    //         console.log("couponId");
    //         this.setState({coupons: this.state.coupons.filter(coupons => coupons.couponId !== couponId)});
    //         alert("Deleted successfully");
    //     });
    // }


    componentDidMount(){
        couponService.getAllUsers().then((res)=>{
            this.setState({coupons:res.data});
        })
    }

    render() {
        return (

            <div className="col-md-12">
                    <div className="card bg-light text-dark">
                    <nav>
            <img src="logo.png" class="logo" />
            <ul>
              
              <li><a href="admin">Go Back<BiLogOutCircle/></a></li>
              
            </ul>
          </nav>
          </div>
          
            <div>

                 <br></br>
                 <h2 className="text-center">Users List</h2>
                 <br/>
                        <table className = "table table-striped table-bordered text-center ">

                            <thead>
                                <tr>
                                    <th> profileId </th>
                                    <th> firstName</th>
                                    <th> lastName</th>
                                    <th> email</th>
                                    <th> address </th>
                                    <th> contactNumber </th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.coupons.map(
                                        coupon => 
                                        <tr key = {coupon.profileId}>
                                             <td>{coupon.firstName}</td>
                                             <td> {coupon.lastName} </td>   
                                             <td> {coupon.email}</td>
                                             <td> {coupon.address}</td>
                                             <td> {coupon.contactNumber}</td>
                                            
                                             {/* <td>
                                                 <button style={{marginLeft: "9px"}} onClick={ () => this.deleteCoupon(coupon.couponId)} className="btn btn-danger">Delete </button>
                                                

                                             </td> */}
                                        </tr>
                                        
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                 </div>            
          
        )
    }
}

function mapStateToProps(state) {
    const { message } = state.message;
    return {
        message,
    };
}
export default connect(mapStateToProps)(getallusers);