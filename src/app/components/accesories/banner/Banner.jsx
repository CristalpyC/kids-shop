import "./banner.scss";
import 'animate.css';

export const Banner = () => {
  return (
    <div className="accesoriesbanner__container">
        <div className="accesories__container">
            <img className="animate__animated animate__bounceInUp" src="/kids-boys-and-girls-hd-image.png" alt="" />
            <div className="animate__animated animate__pulse">
                <h1>Elevate</h1>
                <h2>Their style!</h2>
                <p>
                  Explore our accessories collection and discover the perfect 
                  finishing touches to elevate your child's style. From trendy 
                  hats to functional backpacks, our curated selection combines 
                  fashion and functionality.
                </p>
            </div>
            <div className="wave"></div>
        </div>
    </div>
  )
}