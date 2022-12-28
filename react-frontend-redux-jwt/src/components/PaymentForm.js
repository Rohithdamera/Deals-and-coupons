import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'

import {Link} from 'react-router-dom'





const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    const [isLoading,setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            setIsLoading(true)
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:4001/payment", {
                amount: 20000,
                id:""
            })
            
            
            if(response.data.success) {
                console.log("Successful payment")
                setIsLoading(false)
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}
    if(isLoading){
        return (
            <div className="container"><div className="loader-container">
                
            <div className="spinner"></div>
            </div></div>
            
            
          )  
    }
    return (
        <div className="container m-150 text-center">
            
        {!success ? 
        <form onSubmit={handleSubmit}>
            <h1 className="text-center">Enter Your Card Details</h1>
            
            <fieldset className="">
                <div className="card-body">
                    <input type="text" placeholder="Name on Card" className="card-header card" style={{width:"100%" 
                }}></input>
                    <CardElement className="card-header" />
                </div>
            </fieldset>
            {/* <button className=" text-center btn btn-success" style={{width:"50%" }} >Pay {localStorage.getItem("1")}</button> */}
            <li><a href="buying.html">PAY</a></li>
            
            
        </form>
        :
       <div>
           <img className="img" 
           src="https://img.freepik.com/free-vector/delivery-staff-ride-motorcycles-shopping-concept_1150-34879.jpg?w=2000" 
           style={{width:"500px", margin:"3rem"}}
           alt="" />
           <h1>Hello,<br/>
                    User this is to inform you that Your order had been Accepted by our mangement, Enjoy your Shopping and  Your order is on the way</h1>
           
           <Link to="/rdashboard" className="btn btn-dark"> Back to Browse</Link>
       </div> 
        }
            
        </div>
    )
}