import "./shop.scss";

export const BoysShop = () => {
  return (
    <div className="shop__container">
        <div className="shop__title">
            <button>Shop</button>
            <h2>now</h2>
        </div>
        <div className="select">
            <select>
                <option value="all">All</option>
                <option value="shirts">Suits</option>
                <option value="swimsuit">Swimwear</option>
                <option value="jeans">Jeans</option>
                <option value="shirts">T-shirts</option>
                <option value="shirts">Pajamas</option>
            </select>
        </div>
        {/*Espacio para incluir las mercancias */}
        ropa en venta
    </div>
  )
}
