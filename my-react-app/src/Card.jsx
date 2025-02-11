import React, { useState } from 'react';
import "./App.css";
const Card = ({ data }) => {
    const[count, setCount] = useState(1);
    const[price, setPrice] = useState(data.price);
    function incrementCount(){
        setCount(count+1);
        }
    
    function decrementCount(){
        if(count > 1){
            setCount(count-1);
        }
    }
    return (
        <div className = 'card'>
            <img src={data.image} alt={data.title} />
            <h3>{data.title}</h3>
            <p>{data.price*count}</p>
           <div className='incr-decr-btn'>
           <button onClick={decrementCount}>-</button>
            <p>{count}</p>
            <button onClick={incrementCount}>+</button>
           </div>
        </div>
    )
}
export default Card;