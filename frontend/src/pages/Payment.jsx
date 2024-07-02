import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react"

function Payment() {
    const [state] = useState("Login");
  const [formData ] = useState({
    username:"",
    password:"",
    email:""
  })
  return (
    <section className="max_padd_container flexCenter flex-col pt-32">
    <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
    <h3 className="h3">Billing Info</h3>
    <div className="flex flex-col gap-4 mt-7">
    <input name="address" value={formData.address} type="text" placeholder="Address" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl" />
    <input name="phone" value={formData.phone} type="text" placeholder="phone" className="h-14 w-full pl-5 bg-slate-900/5 outline-none rounded-xl" />
    <button onClick={()=>{state==="Login"?login():signup()}} className="btn_dark_rounded my-5 w-full !rounded-md">Save and Proceed to Payment</button>
    <PayPalScriptProvider options={{ clientId: "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
    </div>
    </div>
  </section>
  )
}

export default Payment
