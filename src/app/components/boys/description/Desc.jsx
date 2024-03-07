"use client"
import "./desc.scss";
import { Slide, Zoom} from "react-awesome-reveal";

export const Desc = () => {
  return (
    <div className="boys__description">
        <Slide className="fade">
          <img src="https://www.farmerteds.com/assets/teds-tots-blob-side-img.png" alt="" />
        </Slide>
        <Zoom>
          <p>
              Our boys' clothing combines style with durability, ensuring your little 
              guy looks great while withstanding all his adventures. From rugged jeans 
              to cozy sweaters, our selection features high-quality materials and 
              construction that can keep up with his active lifestyle.
          </p>
        </Zoom>
    </div>
  )
}
