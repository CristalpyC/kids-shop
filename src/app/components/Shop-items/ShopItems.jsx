"use client"
import "./shopStyle.scss";
import "animate.css";
import { Zoom, Fade, JackInTheBox } from "react-awesome-reveal";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SavingsIcon from '@mui/icons-material/Savings';
import PeopleIcon from '@mui/icons-material/People';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { useEffect, useState } from "react";
import { useInfo } from "../context/useInfo";
import { useRouter } from "next/navigation";

export const ShopItems = () => {
    const [sum, setSum] = useState(1);
    const [dataArray, setDataArray] = useState(null);
    const [topItems, setTopItems] = useState(null);
    const [categoryData, setCategory] = useState(null);
    const [publicData, setPublic] = useState(null);
    const [items, setItems] = useState(null);
    const { itemsInfo, setItemsInfo } = useInfo();
    const router = useRouter();

    useEffect(() => {
        const handleData = async() => {
            try{
                const res = await fetch(`api/products/${itemsInfo}`, { method:"GET" });
                const data = await res.json();
                setDataArray(data);

            } catch(error){
                console.log("ERROR: ", error.message);
            }
        }

        if (itemsInfo !== null){
            handleData();
        }
    }, [itemsInfo]);

    useEffect(() => {
        if (dataArray !== null){
            setCategory(dataArray[0].category);
            setPublic(dataArray[0].public);

            /*if (publicData !== null){
                console.log(publicData)
            }*/
        }
    }, [dataArray, publicData]);

    useEffect(() => {
        const handleB = async(value) => {
            let url
            
            if (publicData === "accesorie"){
                url = `api/products/category/${publicData}/${value}3`;
            } else {
                url = `api/products/category/${publicData}s/${value}3`;
            }
            const res = await fetch(url, {method: "GET"});
            const data = await res.json();
            setTopItems(data);
        }

        if (categoryData !== null){
            //console.log(categoryData);
            handleB(categoryData);
        } 
    }, [categoryData]);

    const handleSum = () => {
        setSum(sum + 1);
    }

    const handleRest = () => {
        setSum(sum - 1);

        if (sum <= 1){
            setSum(1);
        }
    }

    /*useEffect(() => {
        if (topItems !== null){
            console.log(topItems);
        }
    }, [topItems]);*/

    /*useEffect(() => {
        if (itemsInfo !== null){
            console.log("Items: ", itemsInfo);
        }
    }, [itemsInfo]);*/

    const handleRouter = (value) => {
        setItems(value);
        setItemsInfo(value);

        router.push(`/${value}`);
    }

  return (
    <div className="shopitems__container">
        <div className="infos">
            {dataArray && dataArray.map((url, index) => (
                <div className="img__info" key={index}>
                    <img className="animate__animated animate__zoomIn"  src={url.img1} alt="" />
                </div>  
            ))}
            <div className="info__container">
                <div className="information">
                <div>
                    <h2>{itemsInfo}</h2>
                    {dataArray && dataArray.map(items => (
                        <>
                            <h3 className="animate__animated animate__fadeIn">${items.price}</h3>
                            <p>Product Type: <span className="dress__span">{items.category}</span></p>
                        </>
                    ))}
                    <p><span>Quantity</span></p>
                    <div className="quantity__container">
                        <button onClick={handleSum}>+</button>
                        <button className="middle__btn">{sum}</button>
                        <button onClick={handleRest}>-</button>
                    </div>
                    <p><span>Size</span></p>
                    <div className="size__container">
                        <button>S</button>
                        <button>M</button>
                        <button>L</button>
                        <button>XL</button>
                    </div>
                </div>
                    {dataArray && dataArray.map((itemUrl, index) => (
                        <div className="img" key={index}>
                            <img src={itemUrl.img1} alt="" />
                        </div>
                    ))}
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
                {dataArray && dataArray.map((items, index) => (
                    <div key={index}>
                        <img className="img1" src={items.img1} alt="" />
                        <img className="img2" src={items.img2} alt="" />
                    </div>
                ))}
                {dataArray && 
                <p>
                    {dataArray[0].description}
                </p> }
        </div>
        </Zoom>
        <Fade>
            <h1>You may <span className="p1">also</span> <span className="p2">like</span></h1> 
        </Fade>
        <div className="itemsimages__container">
            {topItems && topItems.map((values, index) => (
                <div className={values.nombre === itemsInfo && values.nombre === values.nombre ? "invisible" : "card"} key={index} onClick={() => handleRouter(values.nombre)}>
                    <JackInTheBox >
                        <img src={values.img1} />
                        <div className="info">
                            <h3>${values.price}</h3>
                            <h4>{values.nombre}</h4>
                        </div>
                    </JackInTheBox>
                </div>
            ))}
        </div>
    </div>
  )
}
