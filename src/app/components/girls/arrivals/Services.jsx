"use client"
import "./services.scss";
import { Fade, Zoom } from "react-awesome-reveal";
export const Services = () => {
  return (
    <div className="services__container">
        <Fade>
            <h1>Discover the Difference</h1>
        </Fade>
        <Zoom>
        <div className="cards">
            <div className="card c1">
                <img src="/flower.png" alt="" />
                <h4>Sizes for Every Stage</h4>
                <p>
                    We understand that children grow quickly, which is why 
                    we offer a range of sizes to accommodate every stage of childhood.
                </p>
            </div>
            <div className="card c2">
                <img src="/baby-clothes-watercolor-hand-paint-png.png" alt="" />
                <h4>Diverse Styles</h4>
                <p>
                    We offer a wide range of charming styles to suit every personality 
                    and occasion, ensuring you find the perfect outfit for any event 
                    or preference.
                </p>
            </div>
            <div className="card c3">
                <img src="/yellow-smiley-face.png" alt="" />
                <h4>Quality and Comfort</h4>
                <p>We pride ourselves on selecting high-quality, comfortable materials
                     for our garments, ensuring durability and freedom of movement 
                     while looking and feeling fantastic.</p>
            </div>
        </div>
        </Zoom>
    </div>
  )
}
