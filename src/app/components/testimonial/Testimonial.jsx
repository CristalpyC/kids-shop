"use client"
import "./testimonial.scss";
import { JackInTheBox, Zoom } from "react-awesome-reveal";

export const Testimonial = () => {
  return (
    <>
    <Zoom><h1 className="testimonial__title">Client say</h1></Zoom>
    <div className="testimonial__container">
        <JackInTheBox>
        <div className="card">
            <img src="https://bajanews.mx/uploads/images/posts/46241801264121fcf6e37e.jpeg" alt="" />
            <div>
                <h3>Joselo Boti</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Ipsa nostrum labore dolor facilis, nesciunt facere!
                </p>
            </div>
        </div>
        </JackInTheBox>
        <JackInTheBox>
        <div className="card c2">
            <img src="https://bajanews.mx/uploads/images/posts/46241801264121fcf6e37e.jpeg" alt="" />
            <div>
                <h3>Flor Novas</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Ipsa nostrum labore dolor facilis, nesciunt facere!
                </p>
            </div>
        </div>
        </JackInTheBox>
        <JackInTheBox>
        <div className="card c3">
            <img src="https://bajanews.mx/uploads/images/posts/46241801264121fcf6e37e.jpeg" alt="" />
            <div>
                <h3>Papolo plan</h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Ipsa nostrum labore dolor facilis, nesciunt facere!
                </p>
            </div>
        </div>
        </JackInTheBox>
    </div>
    </>
  )
}
