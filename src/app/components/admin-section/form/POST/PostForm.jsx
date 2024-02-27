"use client"
import { useState } from "react";
import "./post.scss";

export const PostForm = () => {
  const val = {
    name: '',
    price: '',
    desc: '',
    img1: '',
    img2: '',
    publics: '',
    category: ''

  };

  const [name, setName] = useState("Name");
  const [price, setPrice] = useState("Price");
  const [desc, setDesc] = useState("Description");
  const [img1, setImg1] = useState("Image 1");
  const [img2, setImg2] = useState("Image 2");
  const [publics, setPublic] = useState("Public");
  const [category, setCategory] = useState("Category");
  const [errorState, setErrorState] = useState(true);
  const [errorMessage, setErrormessage] = useState(null);
  const [data, setData] = useState(val);


  const handlePost = async (values) => {
    values.preventDefault();
    const dataArray = new Array(data)

    dataArray.map(async (items) => {
      if (items.name === '' || items.price === '' || items.desc === '' || items.img1 === '' || items.img2 === '' || items.publics === '' || items.category === ''){
        setErrorState(false);
        setErrormessage("Data is empty ✖");
        
      } else{

        try{
          const res = await fetch("/api/products", {
            method: "POST",
            body: JSON.stringify({
              nombre: items.name,
              price: parseFloat(items.price),
              description: items.desc,
              img1: items.img1,
              img2: items.img2,
              public: items.publics,
              category: items.category,
            }),
            headers: {"content-type": "application/json"},
          });

          setData(val);

          //const productsData = await res.json();
          //console.log(productsData);

          setErrorState(true);
          setErrormessage("Data has been send! ✓");

        } catch (error){
          console.log('ERROR: ', error.message);
        }
        
      }
    }); 
  }

  const handleData = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    })
  }

  return (
    <div className="post__container">
        <form onSubmit={handlePost}>
            <input 
              type="text" 
              placeholder={name}
              name="name"
              onClick={() => setName("Ex: tank top")}
              value={data.name}
              onChange={handleData}
              
            />
            <input 
              type="number" 
              placeholder={price}
              name="price"
              onClick={() => setPrice("Ex: 10.99")}
              value={data.price}
              onChange={handleData}
            />
            <input 
              type="text" 
              placeholder={desc}
              name="desc"
              onClick={() => setDesc("Ex: Beautiful top")}
              value={data.desc}
              onChange={handleData}
            />
            <input 
              type="text" 
              placeholder={img1}
              name="img1"
              onClick={() => setImg1("Ex: https://top.png")}
              value={data.img1}
              onChange={handleData}
            />
            <input 
              type="text" 
              placeholder={img2}
              name="img2"
              value={data.img2}
              onChange={handleData}
              onClick={() => setImg2("Ex: https://top.png")}
            />
            <input 
              type="text" 
              placeholder={publics}
              name="publics"
              value={data.publics}
              onChange={handleData}
              onClick={() => setPublic("Ex: girls")}
            />
            <input 
              type="text" 
              placeholder={category}
              name="category"
              value={data.category}
              onChange={handleData}
              onClick={() => setCategory ("Ex: Top")}
            />
            <button type="submit">Send data</button>
            <p className={errorState ? "check__message" : "error__message"}>{errorMessage}</p>
        </form>
    </div>
  )
}
