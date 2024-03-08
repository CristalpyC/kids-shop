"use client"
import "./shopStyle.scss";
import "animate.css";
import { Zoom, Fade, JackInTheBox } from "react-awesome-reveal";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SavingsIcon from '@mui/icons-material/Savings';
import PeopleIcon from '@mui/icons-material/People';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { useState } from "react";

export const ShopItems = () => {
    const [sum, setSum] = useState(1);

    const handleSum = () => {
        setSum(sum + 1);
    }

    const handleRest = () => {
        setSum(sum - 1);

        if (sum <= 1){
            setSum(1);
        }
    }

  return (
    <div className="shopitems__container" >
        <div className="infos">
            <div className="img__info">
                    <img className="animate__animated animate__zoomIn" src="https://i5.walmartimages.com/asr/4b4879c4-1667-492d-8297-20689080719f.37d60bf8c09d07e9a2a875251e9f2024.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF" alt="" />
            </div>  
            <div className="info__container">
                <div className="information">
                <div>
                    <h2>Plaid Flannel Shirt</h2>
                    <h3 className="animate__animated animate__fadeIn">$25.99</h3>
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
                        <button onClick={handleSum}>+</button>
                        <button className="middle__btn">{sum}</button>
                        <button onClick={handleRest}>-</button>
                    </div>
                </div>
                    <div className="img">
                        <img src="https://m.media-amazon.com/images/I/6183zC+RrUL._AC_UY350_.jpg" alt="" />
                    </div>
                </div>
                <div className="buy__buttons">
                    <button className="cart__btn">ADD TO CART</button>
                    <button className="buy__btn">BUY IT NOW</button>
                </div>
                <div className="shipping__container">
                        <div className="a">
                            <div>
                                <LocalShippingIcon className="icon"/>
                                <h4>Free Delivery</h4>
                            </div>
                            <div>
                                <SavingsIcon className="icon"/>
                                <h4>Big Savings</h4>
                            </div>
                        </div>
                        <div className="b">
                            <div>
                                <CardGiftcardIcon className="icon"/>
                                <h4>Gift Vouchers</h4>
                            </div>
                            <div>
                                <PeopleIcon className="icon"/>
                                <h4>Customer Support</h4>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        <Zoom>
        <div className="desc__container">
                <div>
                    <img className="img1" src="https://i5.walmartimages.com/asr/4b4879c4-1667-492d-8297-20689080719f.37d60bf8c09d07e9a2a875251e9f2024.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF" alt="" />
                    <img className="img2" src="https://i5.walmartimages.com/asr/685fc9bf-91ff-4606-94c4-9cac5b891554.1e072f7775ac5b739e1bfb5dab8dc02e.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF" alt="" />
                </div>
                <p>
                    A beautiful floral print dress perfect for any occasion. 
                    Made with soft and comfortable fabric, this dress features a 
                    flared skirt and a cute bow detail at the waist.
                </p> 
        </div>
        </Zoom>
        <Fade>
            <h1>You may <span className="p1">also</span> <span className="p2">like</span></h1> 
        </Fade>
        <div className="itemsimages__container">
                <div className="card">
                <JackInTheBox>
                        <img src="https://i5.walmartimages.com/seo/Toddler-Boys-Girls-Tops-Flannel-Jacket-Plaid-Long-Sleeve-Lapel-Button-Down-Shacket-Baby-Pockets-Coat-Outwear-Kids-Clothes-Size-5-6T_d66e333d-3907-43ba-8be3-791822222d6a.76bcf5f29d0301a337ac7ca620d09b48.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF" />
                        <div className="info">
                            <h3>$25.58</h3>
                            <h4>ok</h4>
                        </div>
                </JackInTheBox>
                </div>
                <div className="card">
                <JackInTheBox>
                        <img src="https://i5.walmartimages.com/seo/Toddler-Boys-Girls-Tops-Flannel-Jacket-Plaid-Long-Sleeve-Lapel-Button-Down-Shacket-Baby-Pockets-Coat-Outwear-Kids-Clothes-Size-5-6T_d66e333d-3907-43ba-8be3-791822222d6a.76bcf5f29d0301a337ac7ca620d09b48.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF" />
                        <div className="info">
                            <h3>$25.58</h3>
                            <h4>ok</h4>
                        </div>
                </JackInTheBox>
                </div>
                <div className="card">
                <JackInTheBox>
                        <img src="https://i5.walmartimages.com/seo/Toddler-Boys-Girls-Tops-Flannel-Jacket-Plaid-Long-Sleeve-Lapel-Button-Down-Shacket-Baby-Pockets-Coat-Outwear-Kids-Clothes-Size-5-6T_d66e333d-3907-43ba-8be3-791822222d6a.76bcf5f29d0301a337ac7ca620d09b48.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF" />
                        <div className="info">
                            <h3>$25.58</h3>
                            <h4>ok</h4>
                        </div>
                </JackInTheBox>
                </div>
        </div>
        {/*<div className="items__container">
                <h1>You may <span className="p1">also</span> <span className="p2">like</span></h1> 
                <div className="items__img">
                    <img src="https://static.vecteezy.com/system/resources/previews/024/187/126/original/kids-clothes-transparent-background-png.png" alt="" />
                    <img src="https://static.vecteezy.com/system/resources/previews/024/187/189/original/kids-clothes-transparent-background-png.png" alt="" />
                    <img src="https://static.vecteezy.com/system/resources/previews/024/187/189/original/kids-clothes-transparent-background-png.png" alt="" />
                </div>
  </div>*/}
    </div>
  )
}
