import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from 'axios'



export const Mycontext = createContext() ; 


export const MycontextProvider=({children})=>{
    const apiKey = '01b2194e0d3126278b4cd10749993496' ; 
    const [loading , setLoading ] = useState(false) ; 


    //states and funtions 
    const [data , setData ] = useState([]) ; 

    useEffect(()=>{
            async  function fetch(){
                await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
                ).then((res)=> {
                     setData(res.data.results);
                     setLoading(true) ; 
                }).catch((err)=>console.log(err)) ; 
            }
            fetch() ; 
         
            
            

    }, [] )





    return (
        <Mycontext.provider value={{data , loading}}>
            {children}
        </Mycontext.provider>
    )
}