"use client"
import "./banner.scss";
import "animate.css";

export const Banner = () => {
  return (
    <div className="banner__container">
        <div className="clouds"></div>
        <div className="banner">
            <div className="banner__info animate__animated animate__bounceInLeft">
                <h3>New One</h3>
                <h1>Kids Zone Collection</h1>
                <p>
                    Our high quality and stylish clothing for <br />
                    Boy & Girl collection
                </p>
                <button className="animate__animated animate__heartBeat animate__repeat-2">Shop now</button>
            </div>
            <img className="animate__animated animate__fadeInUpBig" src="/kidsModel.png" alt="" />
        </div>
    </div>
  )
}
