import React, {useState} from 'react';
import Footer from '../Components/Footer';
import '../Styling/contact.css';
import Tesla from '../Components/video/tesla.mp4';
import axios from 'axios'

function Contact() {

    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message:''
    })

    function handleChange(event) {
       const {name, value} = event.target;

       setInput(prevInput => {
           return {
               ...prevInput,
               [name]: value,
           }
       })
    }

    function handleClick(event) {
        
        event.preventDefault();

        const newUser = {
            firstName: input.firstName,
            lastName: input.lastName,
            email: input.email,
            message: input.message,
        }
        
        axios.post('http://localhost:3001/send', newUser)
    }  


    return (
        <>
            <div className="section">
                <div className="video-container">
                    <video className="video" autoPlay loop muted >
                        <source src={Tesla} type="video/mp4" />
                    </video>
                </div>
            <div>
                <form className="form-container">
                    <div className="logo-div">
                        <img className="Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1200px-Tesla_T_symbol.svg.png" alt="logo" />
                    </div>
                    <label className="text">First Name</label>
                    <input type="text" name="firstName" placeholder="Ex:John" onChange={handleChange} value={input.firstName}/>

                    <label className="text">Last Name</label>
                    <input type="text" name="lastName" placeholder="Ex:Doe" onChange={handleChange} value={input.lastName}/>
                    
                    <label className="text">E-Mail</label>
                    <input type="text" name="email" placeholder="Ex:johndoe@email.com" onChange={handleChange} value={input.email}/>

                    <label className="text">Mesage</label>
                    <textarea name="subject" onChange={handleChange} value={input.message}></textarea>

                    <input type="submit" value="Submit" onClick={handleClick}/>
                </form>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;