"use client"
import { useEffect, useState } from "react";
import "./clothes.scss";
import { Zoom } from "react-awesome-reveal";
import { Load } from "../girls/loading/Load";
import { useInfo } from "../context/useInfo";
import { useRouter } from "next/navigation";

export const Clothes = () => {
    const [productArray, setProductArray] = useState(null);
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState(null);
    const { itemsInfo, setItemsInfo } = useInfo();
    const router = useRouter();

    useEffect(() => {
        const handleData = async () => {
            setLoading(true);
            try {
                const res = await fetch("api/products/stock", { method: "GET" });
                const data = await res.json();
                setProductArray(data);

            } catch (error) {
                console.log(error.message);
            }
            setLoading(false);
        };

        handleData();
    }, []); 

    useEffect(() => {
        if (productArray !== null) {
            console.log(productArray);
        }
    }, [productArray]);

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
    <div className="clothes__container">
        <Zoom>
        <h1>
            Shop 
            <span className="span"><span className="border">with us</span></span>
        </h1>
        </Zoom>
        <Load isLoading={loading} url="/cute-gif.gif"/>
        <div className="images__container">
            {productArray && productArray.map((items, index) => (
                <div className="card" key={index} onClick={() => handleRouter(items.nombre)}>
                    <img src={items.img1} alt="" />
                    <Zoom className="info">
                        <h3>{`$${items.price}`}</h3>
                        <h4>{items.nombre}</h4>
                    </Zoom>
                </div>
            ))}
        </div>
    </div>
  )
}
