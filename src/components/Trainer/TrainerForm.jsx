import { useState } from "react";
function Form({ trainer, onBack }) {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [preferredTime, setPreferredTime] = useState("");

    const [userDetails, setUserDetails] = useState([]);
    const show = () => {
        console.log("Booking Details:");
        const User=[...userDetails];
        User.push({name,phone,preferredTime});
        setUserDetails(User);
        console.log(User);
      alert("Booking Confirmed");
    };
  return (
    <div>


      <button
        onClick={onBack}
        className="mb-4 text-blue-500 underline"
      >
        ← Back to profile
      </button>

      

      <h1 className="text-xl font-bold mb-4">
        Book the Trainer, {trainer.fullName}
      </h1>

      <form onSubmit={(e) => e.preventDefault()} className="border border-black rounded-3xl flex flex-col items-center p-4">
        <input className="border p-2 m-2 w-64"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Your Name"/>

        <input className="border p-2 m-2 w-64"
         value={phone}
         onChange={(e) => {
           setPhone(e.target.value);
         }}
        placeholder="Phone"/>

        <input className="border p-2 m-2 w-64" 
        value={preferredTime}
        onChange={(e) => {
          setPreferredTime(e.target.value);
        }}
        placeholder="Preferred Time"/>
        <button onClick={()=>
            {
                show();
            }
        } className="bg-blue-500 text-white px-6 py-2 mt-3 rounded">
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
export default Form;