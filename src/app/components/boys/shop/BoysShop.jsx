"use client"
import { useEffect, useState } from "react";
import "./shop.scss";
import 'animate.css';
import { Zoom } from "react-awesome-reveal";
import { Load } from "../../girls/loading/Load";
import { useRouter } from "next/navigation";
import { useInfo } from "../../context/useInfo";

export const BoysShop = () => {
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
        const handleBoysData = async (val) => {
            setLoading(true);
            const res = await fetch(`api/products/boys/${val}`);
            const data = await res.json();

            setProducts(data);
            setLoading(false);
        }

        if (optionsValues !== null){
            handleBoysData(optionsValues);
        } else {
            handleBoysData("all");
        }
        
    }, [optionsValues]);

    useEffect(() => {
        if (products !== null){
            console.log(products)
        }
    }, [products]);

    useEffect(() => {
        if (itemsInfo !== null){
            console.log("Items: ", itemsInfo);
        }
    }, [itemsInfo]);

    const handleRouter = (value) => {
        setItems(value);
        setItemsInfo(value);

        router.push(`/${value}`);
    }

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
                <option value="all">All</option>
                <option value="suit">Suits</option>
                <option value="swimwear">Swimwear</option>
                <option value="jean">Jeans</option>
                <option value="t-shirt">T-shirts</option>
                <option value="pajama">Pajamas</option>
            </select>
        </div>
        {/*Espacio para incluir las mercancias */}
        <Load isLoading={loading} url="/loading-gif.gif"/>
        <div className="images__container">
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
