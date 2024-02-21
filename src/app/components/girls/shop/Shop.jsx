import "./shop.scss";

export const Shop = () => {
  return (
    <div className="shop__container">
        <div className="shop__title">
            <button>Shop</button>
            <h2>now</h2>
        </div>
        <div className="select">
            <select>
                <option value="all">All</option>
                <option value="skirt">Skirt</option>
                <option value="dresses">Dresses</option>
                <option value="swimsuit">Swimwear</option>
                <option value="jeans">Jeans</option>
                <option value="blouse">Blouses</option>
                <option value="shirts">T-shirts</option>
                <option value="shirts">Pajamas</option>
            </select>
        </div>
        {/*Espacio para incluir las mercancias */}
        <div className="girls__banner">
            <div>
                 <h1>FREE SHOPPING on orders $59+</h1>
                 <img src="/Comic-WOW-PNG-Clipart.png" alt="" />
            </div>
        </div>
    </div>
  )
}
