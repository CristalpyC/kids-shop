import "./shopStyle.scss";

export const ShopItems = () => {
  return (
    <div className="shopitems__container">
        <div className="infos">
            <div className="img__info">
                    <img src="https://www.ruffntumblekids.com/cdn/shop/files/74_5fd8b382-08e7-40af-b583-b2a80df223c2.jpg?v=1698673042" alt="" />
                    <div className="d">
                        <img src="https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/454485/sub/goods_454485_sub14.jpg?width=494" alt="" />
                        <img src="https://assets.burberry.com/is/image/Burberryltd/F1B9775E-C5BE-4BF0-BF7A-B91A7A90F0E4?$BBY_V3_SL_1$&wid=1501&hei=1500" alt="" />
                    </div>
            </div>  
            <div className="info__container">
                <h2>Plaid Flannel Shirt</h2>
                <h3>$25.99</h3>
                <p>Product Type: Dress</p>
                <p><span>Size</span></p>
                <div className="size__container">
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                </div>
                <p><span>Quantity</span></p>
                <div className="quantity__container">
                    <button>+</button>
                    <button className="middle__btn">1</button>
                    <button>-</button>
                </div>
                <div className="buy__buttons">
                    <button className="cart__btn">ADD TO CART</button>
                    <button className="buy__btn">BUY IT NOW</button>
                </div>
            </div>
        </div>
    </div>
  )
}
