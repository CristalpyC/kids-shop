"use client"
import { useEffect, useState } from "react";
import "./shop.scss";
import 'animate.css';
import { Zoom } from "react-awesome-reveal";
import { Load } from "../../girls/loading/Load";

export const BoysShop = () => {
  const [products, setProducts] = useState(null);
    const [optionsValues, setValues] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleSelect = async (e) => {
        setValues(e.target.value);
    }

    useEffect(() => {
        const handleGirlsData = async (val) => {
            setLoading(true);
            const res = await fetch(`api/products/${val}`);
            const data = await res.json();

            setProducts(data);
            setLoading(false);
        }

        if (optionsValues !== null){
            handleGirlsData(optionsValues);
        } else {
            handleGirlsData("allb");
        }
        
    }, [optionsValues]);

    useEffect(() => {
        if (products !== null){
            console.log(products)
        }
    }, [products]);

  return (
    <div className="shop__container">
        <Zoom>
            <div className="shop__title">
                <button>Shop</button>
                <h2>now</h2>
            </div>
        </Zoom>
        <div className="select" onClick={handleSelect}>
            <select>
                <option value="allb">All</option>
                <option value="bsuit">Suits</option>
                <option value="bswimwear">Swimwear</option>
                <option value="bjeans">Jeans</option>
                <option value="bt-shirt">T-shirts</option>
                <option value="bpajama">Pajamas</option>
            </select>
        </div>
        {/*Espacio para incluir las mercancias */}
        <Load isLoading={loading} url="/loading-gif.gif"/>
        <div className="images__container">
                {products && products.map((item, index) => (
                    <div className={loading ? "card" : "card animate__animated animate__zoomIn"} key={index}>
                        <img src={item.img1} alt="" onChange={() => console.log("eff")}/>
                        <div className="info">
                            <h3>{`$${item.price}`}</h3>
                            <h4>{item.nombre}</h4>
                        </div>
                    </div>
                ))}
        </div>
    </div>
  )
}
