import React from 'react';
import Footer from '../Components/Footer';
import '../Styling/contact.css';
import Tesla from '../Component/video/tesla.mp4';
const Contact = () => {
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
                    <input type="text" name="firstname" placeholder="Ex:John" />

                    <label className="text">Last Name</label>
                    <input type="text" name="lastname" placeholder="Ex:Doe" />
                    <label className="text">E-Mail</label>
                    <input type="text" name="email" placeholder="Ex:johndoe@email.com" />

                    <label className="text">Feedback</label>
                    <textarea name="subject"></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;