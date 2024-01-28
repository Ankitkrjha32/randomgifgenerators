import React, { useState } from 'react'
import Spinner from './Spinner'
import axios from "axios";
import { useEffect } from 'react';

const API_KEY = 'u3ZBGvclqj6BZTC5xvAEkVdIaK4IZshX' 
function RandomGif() {
   
  
   const [loading, setLoading]=useState(false);
  const [gif,setGif]=useState('');
 

 


   async function fetchData(){
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data}  =  await axios.get(url);
    const imageSource=data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);


   }

   useEffect(() =>{
    fetchData();
   },[])

   function clickHandler(){
    fetchData();
  }
 
  return (
    <div className='flex justify-center items-center flex-col'>
    <div>
      <h2 className='text-[2rem] py-3 font-bold items-center' >Randoms Gif</h2>
    </div>
    {
      loading?(<Spinner/>):( <img src={gif}  className='w-[490px] h-[350px] rounded-md ' />)
    }
   
    <button onClick={clickHandler} className=' h-[45px] w-[400px] mt-3 rounded-lg  text-[20px] bg-red-500 hover:scale-125 transition duration-200 ease-in hover:text-slate-300 '>
      Generate
    </button>
   
    {/* <Spinner/> */}
    </div>
    
  )
}

export default RandomGif
