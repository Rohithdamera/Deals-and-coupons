import React from 'react'

import {Elements} from "@stripe/react-stripe-js"
import {loadStripe} from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'
const PUBLIC_KEY = "pk_test_51LsURaSDB8612fI9HpH8TjzEZSqmnYUf6Y66EDdOjqaTNbjWUtZqwdhklzv8iwhLogE8exw2BbXs4Rz5xDmpw0xI00Qm0Xo6V6"
const stripeTestPromise = loadStripe(PUBLIC_KEY)
export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm />
        </Elements>
  )
}
