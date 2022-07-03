import { PayPalButtons } from "@paypal/react-paypal-js";
import React, { useState } from "react";
import PremiumCard from "../SerPremium/CardPremium";

export default function Paypal1() {


  return (
    <div>
      <PremiumCard />
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: 10.00,
                },
              },
            ],
            application_context: {
              return_url: "localhost:3000/home",
              cancel_url: "localhost:3000/home"
            }
          });
        }}
        onApprove={ async (data, actions) => {
          console.log("esto es data de onApprove -> ", data)
          return actions.order.capture().then((details) => {
            console.log("esto es details de onApprove -> ", details)
            const name = details.payer.name.given_name;
          alert(`Transaction completed by ${name}`);
          });
        }}
        onCancel={(data) => {
          console.log("esto es data de onCancel", data) 
          
        }}
        onError={(error) => {
          alert(error)
        }}
      />
  </div>
  );
}
