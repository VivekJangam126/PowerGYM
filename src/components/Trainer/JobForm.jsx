import React, { useState } from 'react';
function JobForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [userDetails, setUserDetails] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        // Here you can handle the form submission, e.g., send data to a server
        const User=[...userDetails];
        User.push({name,email,phone});
        setUserDetails(User);
        console.log(User);
        

        alert('Application Submitted Successfully!');
        alert(`Details:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}`);
        // Reset form fields after submission
        setName('');
        setEmail('');
        setPhone('');
    }
  return (
    <div className="p-8 bg-gray-100 text-white 
    max-w-md mx-auto my-8 rounded-lg shadow-md ">
       <h2 className="text-2xl font-bold text-center mb-12 text-[#222831]">
        Apply for a Trainer Position
      </h2>

      <form onSubmit={(e) => {
        handleSubmit(e);
      }}

       className="space-y-6 text-black ">
        <div>
        
        <label className="block text-sm  mb-1 font-medium text-[#222831]">
        Full Name  
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            placeholder="Enter your full name"
          />
          <label className="block mt-4 mb-1 text-sm font-medium text-[#222831]">
        Email Address 
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            placeholder="Enter your Email Address"
          />
         
          <label className="block mt-4 mb-1 text-sm font-medium text-[#222831]">
        Phone Number  
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
            placeholder="Enter your Phone Number"
          />
          
          <button  type="submit" className="mt-4 w-full bg-[#00ADB5] text-[#222831] 
          font-semibold py-2 rounded hover:opacity-60 transition">
            Apply Now
          </button>
        </div>          
        </form>
    </div>
  );
}

export default JobForm;