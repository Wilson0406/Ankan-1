import React, { useState,useEffect } from 'react'
import axios from 'axios';
import MainStore from '../MainStore'
import Footer from '../Components/paros/components/Footer';

function Politics() {
  const [firstData,setFirstData]=useState();
  const [sData,setsData]=useState();
  const [tData,settData]=useState();
  const [fData,setfData]=useState();
  
   
 
    
const url=`https://newsdata.io/api/1/news?apikey=pub_764452110a19be7fa3c92a2cb11ec4ed2626&language=en&category=top,Politics&page=3&country=in`
const url2=`https://newsdata.io/api/1/news?apikey=pub_764452110a19be7fa3c92a2cb11ec4ed2626&language=en&category=top,Politics&page=1&country=in`
const url3=`https://newsdata.io/api/1/news?apikey=pub_764452110a19be7fa3c92a2cb11ec4ed2626&language=en&category=top,Politics&page=2&country=in`
const url4=`https://newsdata.io/api/1/news?apikey=pub_764452110a19be7fa3c92a2cb11ec4ed2626&language=en&category=top,Politics&page=3&country=in`
    
const apiData=()=>{
      axios.get(url2).then((response)=>{
            
        setFirstData(response.data.results);
            }).catch(()=>{
                throw new Error();
            })
           
            
        
    }
  
    const apiData2=()=>{
      axios.get(url).then((response)=>{
            
        setsData(response.data.results);
             
            }).catch(()=>{
                throw new Error();
            })
           
            
        
    }
  
    const apiData3=()=>{
      axios.get(url).then((response)=>{
            
        settData(response.data.results);
             
            }).catch(()=>{
                throw new Error();
            })
           
            
        
    }
  
    const apiData4=()=>{
      axios.get(url).then((response)=>{
            
        setfData(response.data.results);
             
            }).catch(()=>{
                throw new Error();
            })
           
            
        
    }
  
  
  
    
    
     useEffect(()=>{
      apiData();
      apiData2();
      apiData3();
      apiData4();
    
     },[])

  
  return (
    <> 
       <MainStore data={firstData} s_data={sData} t_data={tData} f_data={fData}></MainStore>
        <Footer></Footer>
    </>
  )
}

export default Politics