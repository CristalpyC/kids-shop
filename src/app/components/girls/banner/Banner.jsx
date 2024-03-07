import "./banner.scss";
import 'animate.css';

export const Banner = () => {
  return (
    <div className="girlsbanner__container">
        <div className="girls__container">
            <img className="animate__animated animate__bounceInUp" src="/fashion-girl.png" alt="" />
            <div className="animate__animated animate__pulse">
                <h1>Cute</h1>
                <h2>Fashion girlies</h2>
                <p>
                    where every outfit tells a unique story. From adorable dresses 
                    to playful accessories, discover the perfect ensemble to 
                    ignite her imagination and showcase her individuality. 
                </p>
            </div>
        </div>
        <div className="wave"></div>
    </div>
  )
}
