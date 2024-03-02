"use client"
import { useEffect, useState } from "react";
import { Load } from "../../girls/loading/Load";
import "./shop.scss";

export const AccShop = () => {
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
            handleGirlsData("allc");
        }
        
    }, [optionsValues]);

    useEffect(() => {
        if (products !== null){
            console.log(products)
        }
    }, [products]);

  return (
    <div className="shop__container">
        <div className="shop__title">
            <button>Shop</button>
            <h2>now</h2>
        </div>
        <div className="select" onClick={handleSelect}>
            <select>
                <option value="allc">All</option>
                <option value="cap">Caps</option>
                <option value="sunglasses">Sunglasses</option>
                <option value="backpacks">Backpacks</option>
                <option value="watches">Watches</option>
            </select>
        </div>
        {/*Espacio para incluir las mercancias */}
        <Load isLoading={loading} url="https://www.starfall.com/h/_images/web-system-wide-loading-stars-GIF.gif?1498454704922"/>
        <div className="images__container">
                {products && products.map((item, index) => (
                    <div className="card" key={index}>
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
