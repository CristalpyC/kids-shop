"use client"
import { useEffect, useState } from "react";
import "./arrivals.scss";

export const NewArrivals = () => {
  const [productsData, setData] = useState(null);

  useEffect(() => {
    const handleData = async () => {
      const res = await fetch("api/products/arrivals", {method:"GET"});
      const data = await res.json();
      setData(data)
      return productsData;
      //return data
    }

    handleData()
  }, []);

  useEffect(() => {
    if (productsData !== null){
      console.log("D: ", productsData)
    }
  }, [productsData]);

  
  return (
    <div className="arrivals__container">
      <h1>
        <span className="span"><span className="border">New</span></span> 
            arrivals
      </h1>
      <div className="images__container">
        {productsData && productsData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img1} alt="" />
              <div className="info">
                <h3>{`$${item.price}`} </h3>
                <h4>{item.nombre} </h4>
              </div>
          </div>
        ))}
      </div> 
    </div>
  )
}
