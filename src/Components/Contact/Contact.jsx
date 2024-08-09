import React from 'react'
import './Contact.css'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "7ad61c99-4959-4d80-98a1-48189521ee1f");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div className='contact'>

        <div className='contact-col'>
            <h3>Send us the message</h3>
            <br></br>
            <p>Feel free to reach out from out contact form or contact us below , your feedback matters to us and i will help us to improve the user queries we we stripe to provide exceptional services to our community</p>
            <ul>
                <li><b>Email</b> : tayyabhussain6709@gmail.com</li>
                <li><b>Phone</b> : 03157976128</li>
                <li><b>Address</b>: random ctreet, city, state, asia</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='Name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type='tel' name='Phone' placeholder='Enter your phone number' required/>
                <label>write your message here</label>
                <textarea name='message'  rows='6' placeholder='enter yout message here' required></textarea>
                <button type='submit' className='btn dark-btn'>submit now</button>
            </form>
            <span>{result}</span>
        </div>

      
    </div>
  )
}

export default Contact
