import "./banner.scss";

export const Banner = () => {
  return (
    <div className="banner__container">
        <div className="clouds"></div>
        <div className="banner">
            <div className="banner__info">
                <h3>New One</h3>
                <h1>Kids Zone Collection</h1>
                <p>
                    Our high quality and stylish clothing for <br />
                    Boy & Girl collection
                </p>
                <button>Shop now</button>
            </div>
            <img src="/kidsModel.png" alt="" />
        </div>
    </div>
  )
}
