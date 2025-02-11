import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import Card from './Card';
function App() {
  const[products, setProducts] = useState([]);
  async function getData(){
    try {
      const data = await axios.get("https://fakestoreapi.com/products");
      console.log(data.data);
      setProducts(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, [])

  


  return (
    <>
    {
      <div className='card-body'>
        {
      products.map((ele)=>(
        <Card key ={ele.title} data={ele}/>
      ))
    }
    </div> 
}    
    </>
  )
}

export default App
