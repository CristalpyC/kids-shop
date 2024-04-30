"use client"
import { useEffect, useState } from "react";
import "./arrivals.scss";
import { Load } from "../girls/loading/Load";
import { Zoom } from "react-awesome-reveal";
import { useRouter } from "next/navigation";
import { useInfo } from "../context/useInfo";

export const NewArrivals = () => {
  const [productsData, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(null);
  const { setItemsInfo } = useInfo();
  const router = useRouter();
  //const { itemsInfo, setItemsInfo } = useInfo();

  useEffect(() => {
    setLoading(true);

    const handleData = async () => {
      const res = await fetch("api/products/arrivals", {method:"GET"});
      const data = await res.json();

      setData(data);
      setLoading(false);

      return productsData;
    }

    handleData();
  }, []);

  /*useEffect(() => {
    if (productsData !== null){
      console.log(productsData)
    }
  }, [productsData]);

  useEffect(() => {
    if (itemsInfo !== null){
        console.log("Items: ", itemsInfo);
    }
  }, [itemsInfo]);*/

  const handleRouter = (value) => {
    setItems(value);
    setItemsInfo(value);

    //router.push(`/${value}`);
    
  }

  return (
    <div className="arrivals__container">
      <Zoom>
        <h1>
          <span className="span"><span className="border">New</span></span> 
              arrivals
        </h1>
      </Zoom>
      <Load isLoading={loading} url="/cute-gif.gif"/>
      <div className="images__container">
        {productsData && productsData.map((item, index) => (
          <a className="card" href={`/${item.nombre}`} key={index} onClick={() => handleRouter(item.nombre)}>
            <img src={item.img1} alt="" />
              <Zoom className="info">
                <h3>{`$${item.price}`} </h3>
                <h4>{item.nombre} </h4>
              </Zoom>
          </a>
        ))}
      </div> 
    </div>
  )
}
