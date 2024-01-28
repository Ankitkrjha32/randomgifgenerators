import React, { useState } from 'react'
import Spinner from './Spinner'
import axios from "axios";
import { useEffect } from 'react';

const API_KEY = 'u3ZBGvclqj6BZTC5xvAEkVdIaK4IZshX' 

const InputGif = () => {
  const [loading, setLoading]=useState(false);
  const [gif,setGif]=useState('');
 
  const [tags,setTags]=useState('car');
 


   async function fetchData(){
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tags}`;
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

  function changeHandler(event){
    setTags(event.target.value);
  }

 
  return (
    <div className='flex flex-col justify-center items-center h-full'> 
      <h2 className='  text-[1.8rem] uppercase underline font-semibold '>RANDOM {tags} GIF </h2>
      {loading?(<Spinner/>):(<img src={gif} alt="" srcset="" className='w-[490px] h-[350px] rounded-md ' />)}
      
      <input type="text" value={tags} onChange={changeHandler} className=' w-[220px]  h-[37px] mx-auto px-5 bg-red-300 items-center  rounded-lg m-2 '/>
      <button onClick={clickHandler} className='  h-[45px] w-[400px] mb-5 rounded-lg  text-[20px] bg-green-500 hover:scale-125 transition duration-200 ease-in hover:text-white '>
      Generate
    </button>
    </div>
    
  )
}

export default InputGif
