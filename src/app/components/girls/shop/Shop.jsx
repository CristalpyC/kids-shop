"use client"
import { useEffect, useState } from "react";
import "./shop.scss";
import { Load } from "../loading/Load";
import { useRouter } from "next/navigation";

export const Shop = () => {
    const [products, setProducts] = useState(null);
    const [optionsValues, setValues] = useState(null);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState(null);
    const router = useRouter();

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
            handleGirlsData("all");
        }
        
    }, [optionsValues]);

    useEffect(() => {
        if (products !== null){
            console.log(products)
        }
    }, [products]);

    
    const v = (value) => {
        setItems(value);
        router.push(`/${value}`);
    }

    useEffect(() => {
        if (items !== null){
            console.log(items)
        }
    }, [items]);

  return (
    <div className="shop__container">
        <div className="girlshop__title">
            <button>Shop</button>
            <h2>now</h2>
        </div>
        <div className="girl__select">
            <select onClick={handleSelect}>
                <option value="all">All</option>
                <option value="skirt">Skirt</option>
                <option value="dress">Dresses</option>
                <option value="swimwear">Swimwear</option>
                <option value="jean">Jeans</option>
                <option value="blouse">Blouses</option>
                <option value="t-shirt">T-shirts</option>
                <option value="pajama">Pajamas</option>
            </select>
        </div>
        {/*Espacio para incluir las mercancias */}
        <Load isLoading={loading} url="/flower-giphy.gif"/>
        <div className="girlimages__container">
                {products && products.map((item, index) => (
                    <div className="card" key={index} onClick={() => v(item.nombre)}>
                        <img src={item.img1} alt={item.nombre}/>
                        <div className="info">
                            <h3>{`$${item.price}`}</h3>
                            <h4>{item.nombre}</h4>
                        </div>
                    </div>
                ))}
        </div>
        <div className="girls__banner">
            <div>
                 <h1>FREE SHOPPING on orders $59+</h1>
                 <img src="/Comic-WOW-PNG-Clipart.png" alt="" />
            </div>
        </div>
    </div>
  )
}
