import React from 'react';
import {Parallax} from 'react-parallax';
import "../../Styling/parallaxScroll.css"


// const inlineStyle = {
    
// }


const ParallaxScroll = () =>{
    return(
        <div>
            {/* Model S and Info */}
            <Parallax bgImage={"../img/sliderImages/MS-Performance.jpg"} strength={500} style={{zIndex:-1}} className="parallaxImage">
                <div className="parallax">
                     <div className="modelTitle">Model S</div>
                </div>
            </Parallax>
            <div className="container">
            <div className="mobileTitle">Model S</div>
                <div className="grid">
                    <div className="image">
                        <img src="../img/sliderImages/MS-Range-Hero-Desktop.jpg" alt="Blue Model S"/>
                    </div>
                    <div className="buy">
                        <p className="description">With the longest range and quickest acceleration of any electric vehicle in production, Model S Plaid is the highest performing sedan ever built. Both Long Range and Plaid powertrains, with updated battery architecture, are capable of back-to-back, consistent 1/4 mile runs.</p>
                        <button className="order-now">Order Now</button>
                    </div>
                <div className="extra">
                    <p className="info">With the lowest drag coefficient on Earth and unmatched efficiency, Model S is built for speed and range. Together with a wider body and chassis, these elements help you go down the straight or around corners quicker than ever.</p>
                </div>
                <div className="image" id="mobile-display">
                <img src="../img/sliderImages/model-s.jpg" alt="Red Model S"/>
                </div>
                </div>
            </div>

            {/* Model 3 and Info */}
            <Parallax bgImage={"../img/sliderImages/m3.jpg"} strength={500} style={{zIndex:-1}} className="parallaxImage">
                <div className="parallax">
                    <div className="modelTitle">Model 3</div>
                </div>
            </Parallax>

            <div className="container">
            <div className="mobileTitle">Model 3</div>
                <div className="grid">
                    <div className="extra">
                        <p className="info">Tesla All-Wheel Drive has two independent motors for improved redundancy, each with only one moving part for minimal maintenance and maximum durability. Unlike traditional all-wheel drive systems, they digitally control torque to the front and rear wheels for far better handling and traction control.</p>
                    </div>
                    <div className="top-image">
                        <img src="../img/sliderImages/model3-blk.jpg.png" alt="Blue Model S"/>
                    </div>
                <div className="image" id="mobile-display">
                    <img src="../img/sliderImages/model-3.jpg" alt="Red Model 3"/>
                </div>
                <div className="bottom-buy">
                        <p className="description">Model 3 comes with the option of dual motor all-wheel drive, 20” Überturbine Wheels and Performance Brakes and lowered suspension for total control, in all weather conditions. And a carbon fiber spoiler improves stability at high speeds, all allowing Model 3 to accelerate from 0-60 mph in as little as 3.1 seconds.</p>
                        <button className="order-now">Order Now</button>
                    </div>
                </div>
            </div>

            {/* Model X and Info */}
            <Parallax bgImage={"../img/sliderImages/MX.jpg"} strength={500} style={{zIndex:-1}} className="parallaxImage">
                <div className="parallax">
                    <div className="modelTitle">Model X</div>
                </div>
            </Parallax>

            <div className="container">
            <div className="mobileTitle">Model X</div>
                <div className="grid">
                    
                    <div className="buy">
                        <p className="description">With the most power and quickest acceleration of any SUV, Model X Plaid is the highest performing SUV ever built. Both Long Range and Plaid powertrains, with updated battery architecture, can deliver instant torque at any speed.</p>
                        <button className="order-now">Order Now</button>
                    </div>
                    <div className="image">
                        <img src="../img/sliderImages/MX-Exterior.jpg" alt="White Model X Front"/>
                    </div>
                    
                    <div className="image">
                        <img src="../img/sliderImages/MX-gray.jpg" alt="Gray Model X"/>
                    </div>
                    <div className="extra">
                        <p className="info">With the lowest drag coefficient of any SUV, Model X is built for speed and range. Refined aerodynamic elements work together with new wheels and tires to help you travel farther, with sharper handling and better ride comfort.</p>
                    </div>
                </div>
            </div>
            

            {/* Model Y and Info */}
            <Parallax bgImage={"../img/sliderImages/model-y.jpg"} strength={500} style={{zIndex:-1}} className="parallaxImage">
                <div className="parallax">
                    <div className="modelTitle">Model Y</div>
                </div>
            </Parallax>

            <div className="container">
            <div className="mobileTitle">Model Y</div>
                <div className="grid">
                    <div className="extra">
                        <p className="info">Model Y provides maximum versatility—able to carry 7 passengers and their cargo. Each second row seat folds flat independently, creating flexible storage for skis, furniture, luggage and more. The liftgate opens to a low trunk floor that makes loading and unloading easy and quick.</p>
                    </div>
                    <div className="top-image">
                        <img src="../img/sliderImages/blue-my.jpg" alt="Blue Model X"/>
                    </div>
                <div className="image">
                    <img src="../img/sliderImages/AWD_hero@2.jpg" alt="Red Model X"/>
                </div>
                <div className="bottom-buy">
                        <p className="description">Model Y is fully electric, so you never need to visit a gas station again. If you charge overnight at home, you can wake up to a full battery every morning. And when you’re on the road, it’s easy to plug in along the way—at any public station or with the Tesla charging network.</p>
                        <button className="order-now">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParallaxScroll;