import "./category.scss";

export const Category = () => {
  return (
    <div className="category__container">
        <div className="card card1">
            <div>
                <img src="/shirt-icon.jpg" alt="" />
                <h4>Shirts</h4>
            </div>
        </div>
        <div className="card card2">
            <div>
                <img src="/blouse-icon.png" alt="" />
                <h4>Blouses</h4>
            </div>
        </div>
        <div className="card card3">
            <div>
                <img src="/Jeans-icon.png" alt="" />
                <h4>Jeans</h4>
            </div>
        </div>
        <div className="card card4">
            <div>
                <img src="/dress-icon.png" alt="" />
                <h4>Dresses</h4>
            </div>
        </div>
        <div className="card card5">
            <div>
                <img src="/pijamas-icon.png" alt="" />
                <h4>Pijamas</h4>
            </div>
        </div>
    </div>
  )
}
