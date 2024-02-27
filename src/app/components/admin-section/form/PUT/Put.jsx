"use client"
import { useEffect, useState } from "react";
import "./put.scss";

export const PutForm = () => {
  const val = {
    name: '',
    price: '',
    description: '',
    img1: '',
    img2: '',
    public: '',
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
  const [searchState, setSearchState] = useState(true);
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrormessage] = useState(null);
  const [data, setData] = useState(val);
  const [id, setId] = useState(null);
  const [productsData, setProductsData] = useState({});

  useEffect(() => {
    if (id !== null){
        console.log(id);
    }
  }, [id]);

  const handlePost = async (values) => {
    values.preventDefault();
    const dataArray = new Array(data)

    dataArray.map(async (items) => {
      if (items.name === '' || items.price === '' || items.description === '' || items.img1 === '' || items.img2 === '' || items.public === '' || items.category === ''){
        setErrorState(false);
        setErrormessage("Data is empty ✖");
        
      } else{

        try{
          const updateRes = await fetch(`/api/products/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                    nombre: items.name,
                    price: parseFloat(items.price),
                    description: items.description,
                    img1: items.img1,
                    img2: items.img2,
                    public: items.public,
                    category: items.category,
                }),

                headers: {"content-type": "application/json"},
            });

                console.log(updateRes);

          setData(val);

          setErrorState(true);
          setErrormessage("Data has been update! ✓");
          
        } catch (error){
          console.log('ERROR: ', error.message);
        }
        
      }
    }); 
  }

  const handleSearch = async (e) => {
    e.preventDefault(); 

    if (data.name === ''){
        setErrormessage(null);
        setSearchState(false);
        setMessage("Data is empty ✖");
        
      } else {
            try{
                const res = await fetch("/api/products", {method: "GET"});
                const dataRes = await res.json();
                const searchItem = dataRes.filter(item => {return item.nombre === data.name});
                //console.log(searchItem)

                if (searchItem.length === 1){
                    console.log(searchItem); //IMPORTANTE
                    setSearchState(true);
                    setErrormessage(null);
                    setMessage("This product exist! ✓");
                    setId(searchItem[0].id);
                    
                    setData({
                        ...data,
                        name: searchItem[0].nombre,
                        price: searchItem[0].price,
                        description: searchItem[0].description,
                        img1: searchItem[0].img1,
                        img2: searchItem[0].img2,
                        public: searchItem[0].public,
                        category: searchItem[0].category
                    });

                } else{
                    setSearchState(false);
                    setErrormessage(null);
                    setMessage("This item doesn't exist! ✓");
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
    });
  }

  return (
    <div className="put__container">
        <form onSubmit={handlePost}>
            <div className="productName__container">
                <input 
                type="text" 
                placeholder={name}
                name="name"
                onClick={() => setName("Ex: tank top")}
                value={data.name}
                onChange={handleData}
                />

                <button className="btn" onClick={handleSearch}>Search product</button>
                <p className={searchState ? "check__message" : "error__message"}>{message}</p>

            </div>
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
              name="description"
              onClick={() => setDesc("Ex: Beautiful top")}
              value={data.description}
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
              name="public"
              value={data.public}
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
            <button className="submit__btn" type="submit">Update data</button>
            <p className={errorState ? "check__message" : "error__message"}>{errorMessage}</p>
        </form>
    </div>
  )
}
