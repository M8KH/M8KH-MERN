import Check from "../assets/check.png"
const Paymentcomplete = () => {
  return (
    
    <section className="max_padd_container flexCenter flex-col pt-32">
      <div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
        <h3 className="h3 pl-10">Purchase Successful!</h3>
        <div className="flex flex-col gap-4 mt-7">
            <img src={Check} alt="Check" />
        </div>
      </div>
     </section>
  )
}

export default Paymentcomplete
