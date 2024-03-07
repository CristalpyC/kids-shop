import "./banner.scss";
import 'animate.css';

export const Banner = () => {
  return (
    <div className="boysbanner__container">
        <div className="boys__container">
            <img className="animate__animated animate__bounceInUp" src="https://vlacs.org//wp-content/uploads/2023/04/program-middle-school.png" alt="" />
            <div className="animate__animated animate__pulse">
                <h1>Awesome</h1>
                <h2>Trendy threads</h2>
                <p>
                  Step into a world of charm and comfort with our curated collection 
                  of boys' clothing! From playful tees to stylish jackets, 
                  we've got everything your little man needs to express his 
                  unique style.
                </p>
            </div>
        </div>
    </div>
  )
}
