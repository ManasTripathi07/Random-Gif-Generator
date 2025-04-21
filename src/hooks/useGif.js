import React from 'react'

import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
const useGif = (tag) => {
    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState(false);
    const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=0XFUrJaFSNnashB9JrFlxzMhy7BnDhpZ&tag=&rating=g`;
    const url = `https://api.giphy.com/v1/gifs/random?api_key=0XFUrJaFSNnashB9JrFlxzMhy7BnDhpZ&tag=${tag}&rating=g`;
    async function fetchData(tag) {
        setLoading(true);
        
        const {data} = await axios.get(tag ? (url) : (randomurl));
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData('car');
    },[]);

    return {gif,loading,fetchData};

}

export default useGif
