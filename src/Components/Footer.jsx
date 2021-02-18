import React from 'react';
import * as AiIcons from 'react-icons/ai';
import '../Styling/footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footerIcons">
                <span>
                    <AiIcons.AiFillTwitterSquare onClick={()=>{window.location="https://twitter.com/Tesla?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"}}/> 
                </span>
                <span>
                    <AiIcons.AiOutlineInstagram onClick={()=>{window.location="https://www.instagram.com/teslamotors/?hl=en"}}/>
                </span>
                <span>
                    <AiIcons.AiFillFacebook onClick={()=>{window.location="https://www.facebook.com/tesla/"}}/>
                </span>
            </div>

            <div className="copyRight">
                <p>RoadtoHire © 2021</p>
            </div>
        </div>
    )
};

export default Footer;