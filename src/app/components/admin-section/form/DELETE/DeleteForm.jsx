"use client"
import { useState } from "react";
import { prisma } from "@/libs/prisma";
import "./delete.scss";

export const DeleteForm = () => {

  const [name, setName] = useState("Product name");
  const [errorState, setErrorState] = useState(true);
  const [errorMessage, setErrormessage] = useState(null);
  const [data, setData] = useState({name: ''});

  const handlePost = async (values) => {
    values.preventDefault();
    const dataArray = new Array(data)

    if (data.name === ''){
      setErrorState(false);
      setErrormessage("Data is empty ✖");
      
    } else{
      try{
          const  res = await fetch("/api/products", {
          method: "GET"
        })
        const products = await res.json();
        const  productName = products.map(items => {return items.nombre});

        if (productName.includes(data.name) === false){
          setErrorState(false);
          setErrormessage("This item doesn't exist ✖");

        } else{
          const productData = await fetch("/api/products", {method: "GET"});
          const response = await productData.json();
          const productSearch = response.filter(items => items.nombre === data.name)
          const itemId = productSearch[0].id

          const deleteProduct = await fetch(`/api/products/${itemId}`, {method: "DELETE"})
          setErrorState(true);
          setErrormessage("Product has been removed! ✓");
          setTimeout(() => {
            setErrormessage(null);
          }, 2000);
        
          setData({name : ''});
        }

      } catch (error){
        console.log('ERROR: ', error.message);
      }
    }
  }

  const handleData = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <div className="delete__container">
        <form onSubmit={handlePost}>
            <input 
              type="text" 
              placeholder={name}
              name="name"
              onClick={() => setName("Ex: blue shirt")}
              value={data.name}
              onChange={handleData}
              
            />
            <button type="submit">Delete product</button>
            <p className={errorState ? "check__message" : "error__message"}>{errorMessage}</p>
        </form>
    </div>
  )
}
