import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
import { FaRegHandPointDown } from "react-icons/fa";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
    // const [gif,setGif] = useState('');
    // const [loading,setLoading] = useState(false);
    const [tag,setTag] = useState('car');
    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=0XFUrJaFSNnashB9JrFlxzMhy7BnDhpZ&tag=${tag}&rating=g`;
    //     const {data} = await axios.get(url);
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // },[]);

    const {gif,loading,fetchData} = useGif(tag);
    function clickHandler(){
        fetchData(tag);
    }
    
    function changeHandler(event){
        setTag(event.target.value);
    }
  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl font-bold underline uppercase'>Random {tag} GIF</h1>
      {
        loading ? (<Spinner/>) :(<img src={gif} width="450"/>)
      }
      <label className='flex flex-col items-center text-lg font-bold text-yellow-400'>Search Random Gifs Here<FaRegHandPointDown /></label>
      <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center' onChange={changeHandler} value={tag} placeholder='Search Random Gifs'/>
      
      <button onClick={clickHandler} className='w-10/12 bg-yellow-200 text-lg py-2 rounded-lg mb-[20px]'>
        Generate
      </button>
    </div>
  )
}

export default Tag
