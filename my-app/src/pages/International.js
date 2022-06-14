import React,{useState,useEffect} from 'react'
import axios from 'axios';
import MainStore from '../MainStore';
import Header from '../Components/wiliam/Header';
import Navbar from '../Components/Navbar';
import Footer from '../Components/paros/components/Footer';
function International() {
    const [firstData,setFirstData]=useState();
  const [sData,setsData]=useState();
  const [tData,settData]=useState();
  const [fData,setfData]=useState();

    
const url=`https://newsdata.io/api/1/news?apikey=pub_763955fda3b8df4a8f8a967b0118e16c68b4&language=en&category=top,world&page=1`
const url2=`https://newsdata.io/api/1/news?apikey=pub_763955fda3b8df4a8f8a967b0118e16c68b4&language=en&category=top,world&page=2`
const url3=`https://newsdata.io/api/1/news?apikey=pub_763955fda3b8df4a8f8a967b0118e16c68b4&language=en&category=top,world&page=3`
const url4=`https://newsdata.io/api/1/news?apikey=pub_763955fda3b8df4a8f8a967b0118e16c68b4&language=en&category=top,world&page=4`
    
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
    <Header></Header>
    <Navbar></Navbar>
      <MainStore data={firstData} s_data={sData} t_data={tData} f_data={fData}></MainStore>
    </>
  )
}

export default International