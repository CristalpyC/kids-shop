"use client"
import { useEffect, useState } from "react";
import { Load } from "../../girls/loading/Load";
import "./shop.scss";
import 'animate.css';
import { useInfo } from "../../context/useInfo";

export const AccShop = () => {
    const [products, setProducts] = useState(null);
    const [optionsValues, setValues] = useState(null);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState(null);
    const { itemsInfo, setItemsInfo } = useInfo();

    const handleSelect = async (e) => {
        setValues(e.target.value);
    }

    useEffect(() => {
        setLoading(true);
        const handleAccData = async (val) => {
            //setLoading(false);
            const res = await fetch(`api/products/accesory/${val}`);
            const data = await res.json();

            /*if (val === "all"){
                setLoading(false);
            }*/
            

            setProducts(data);
            setLoading(false);
        }

        if (optionsValues !== null){
            handleAccData(optionsValues);
        } else {
            handleAccData("all");
        }
        
    }, [optionsValues]);

    const handleRouter = (value) => {
        setItems(value);
        setItemsInfo(value);
    }

  return (
    <div className="shop__container">
        <div className="accshop__title">
            <button>Shop</button>
            <h2>now</h2>
        </div>
        <div className="acc__select" onClick={handleSelect}>
            <select>
                <option value="all">All</option>
                <option value="cap">Caps</option>
                <option value="sunglasses">Sunglasses</option>
                <option value="backpacks">Backpacks</option>
                <option value="watches">Watches</option>
            </select>
        </div>
        {/*Espacio para incluir las mercancias */}
        <Load isLoading={loading} url="/loading-gif-icon-18.jpg"/>
        <div className="accimages__container">
                {products && products.map((item, index) => (
                    <a className={loading ? "card" : "card animate__animated animate__zoomIn"} key={index} href={`/${item.nombre}`}  onClick={() => handleRouter(item.nombre)}>
                        <img src={item.img1} alt={item.nombre}/>
                        <div className="info">
                            <h3>{`$${item.price}`}</h3>
                            <h4>{item.nombre}</h4>
                        </div>
                    </a>
                ))}
        </div>
    </div>
  )
}
