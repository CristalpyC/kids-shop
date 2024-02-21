import "./bannerofert.scss";

export const BannerOfert = () => {
  return (
    <div className="bannerOfert__container">
        <div className="publicity1">
            <h3>Modern</h3>
            <h4>Collection</h4>
            <img src="/kids-fashion.png" alt="" />
        </div>
        <div className="publicity2">
            <div className="banner1">
              <img src="/kids-model-publicity2.webp" alt="" />
            </div>
            <div className="banner2">
              <img src="/kids-model-publicity.jpg" alt="" />
            </div>
        </div>
        <div className="publicity3">
            <h3>Summer</h3>
            <h4>Special</h4>
            <img src="/kids-fashion-banner2.png" alt="" />
        </div>
    </div>
  )
}
