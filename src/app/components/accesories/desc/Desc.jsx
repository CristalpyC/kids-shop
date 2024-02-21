import "./desc.scss";

export const Desc = () => {
  return (
    <div className="desc__container">
        <div>
            <h1>Our feature<br /><span>COLLECTION</span></h1>
        </div>
        <div className="cards">
            <div className="card c1">
                <img src="/hat.webp" alt="" />
                <h4>Versatility and Functionality</h4>
                <p>
                    Our accessories not only enhance style but also offer 
                    practicality and versatility. Whether it's a sleek watch to 
                    keep track of time or a durable backpack to carry essentials.
                </p>
            </div>
            <div className="card c2">
                <img src="/blue-shoe-baby-accessory-free-png.webp" alt="" />
                <h4>Complete the Look</h4>
                <p>
                    Elevate any outfit with our wide range of accessories 
                    designed to add flair and personality. From stylish hats and 
                    belts to cool sunglasses and ties.
                </p>
            </div>
            <div className="card c3">
                <img src="/baby-accessory-watercolor-free-png.webp" alt="" />
                <h4>Express Individuality</h4>
                <p>Accessories are a fun and easy way for children to express 
                    their unique personalities. Let your little one showcase their 
                    interests and passions with our selection of themed accessories. 
                </p>
            </div>
        </div>
    </div>
  )
}
