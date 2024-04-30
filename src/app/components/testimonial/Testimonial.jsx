"use client"
import "./testimonial.scss";
import { JackInTheBox, Zoom } from "react-awesome-reveal";

export const Testimonial = () => {
  return (
    <>
    {/*Implementar map*/}
    <Zoom><h1 className="testimonial__title">Client say</h1></Zoom>
    <div className="testimonial__container">
        <JackInTheBox>
        <div className="card">
            <img src="/father-testimonial.avif" alt="" />
            <div>
                <h3>Alexander Patel</h3>
                <p>
                    This kids store is fantastic! They offer stylish clothes, 
                    top-notch service, and unbeatable prices. 
                    The best!!
                </p>
            </div>
        </div>
        </JackInTheBox>
        <JackInTheBox>
        <div className="card c2">
            <img src="/mother-testimonial.jpg" alt="" />
            <div>
                <h3>Ava Brown</h3>
                <p>
                    Best kids shop ever! Adorable clothes, great quality, and 
                    amazing customer service. 
                    Highly recommend it!
                </p>
            </div>
        </div>
        </JackInTheBox>
        <JackInTheBox>
        <div className="card c3">
            <img src="/woman-testimonial.png" alt="" />
            <div>
                <h3>Emily Smith</h3>
                <p>
                    Love shopping here! They have the cutest outfits, the staff is 
                    friendly, and the prices are great. Shopping back!
                </p>
            </div>
        </div>
        </JackInTheBox>
    </div>
    </>
  )
}
