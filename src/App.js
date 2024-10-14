import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [products, setProducts] = useState({});
  const [category, setCategory] = useState();



  useEffect(() => {
    console.log("Working...");


    const datafetcher = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      // setProducts(...res.data.category);
      setProducts(res.data);
      console.log(products);
    }
    datafetcher()
    
  }, [])


  return (

    <>
    <div>
      Lable Catagory
      <select onChange={(e) => setCategory(e.target.value)} >
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
      </select>
</div>


<div>



</div>

    </>
  );

    


}

export default App;
