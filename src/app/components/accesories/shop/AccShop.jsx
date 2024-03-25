"use client"
import { useEffect, useState } from "react";
import { Load } from "../../girls/loading/Load";
import "./shop.scss";
import 'animate.css';
import { useRouter } from "next/navigation";
import { useInfo } from "../../context/useInfo";

export const AccShop = () => {
    const [products, setProducts] = useState(null);
    const [optionsValues, setValues] = useState(null);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState(null);
    const { itemsInfo, setItemsInfo } = useInfo();
    const router = useRouter();

    const handleSelect = async (e) => {
        setValues(e.target.value);
    }

    useEffect(() => {
        const handleGirlsData = async (val) => {
            setLoading(true);
            const res = await fetch(`api/products/accesory/${val}`);
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

    useEffect(() => {
        if (itemsInfo !== null){
            console.log("D: ", itemsInfo);
        }
    }, [itemsInfo]);

    const handleRouter = (value) => {
        setItems(value);
        setItemsInfo(value);
        router.push(`/${value}`);
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
                    <div className={loading ? "card" : "card animate__animated animate__zoomIn"} key={index} onClick={() => handleRouter(item.nombre)}>
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
