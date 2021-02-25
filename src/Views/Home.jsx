import React from 'react';
import Footer from "../Components/Footer";
import ImageSlider from "../Components/Slider/Slider";
import "../Styling/home.css"
import { NavLink}  from 'react-router-dom'

const Home = () => {
    return(
        <div>
            <ImageSlider></ImageSlider>
            <section className="cards">
                <div className="wrapper">
                    <div className="box">
                        <h2>Vehicles</h2>
                        <p>High performance, luxury vehicles with high tech interiors. Travel farther on a single charge than any other electric vehicle and keep going with access to 20,000+ Superchargers globally.</p>
                        <NavLink exact={true} to='/models'>See Our Cars</NavLink>
                    </div>
                    <div className="box">
                        <h2>Solar</h2>
                        <p>Use solar energy to power your home and reduce your dependence on the grid. Purchase solar at the lowest price of any national provider with Tesla's price match guarantee and take control of your monthly electricity bill.</p>
                        <NavLink exact={true} to='/solar'>Go to Solar</NavLink>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    )
}

export default Home;