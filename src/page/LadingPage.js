import React, { useEffect, useState } from "react";
import "../assets/css/landingPage.css"

export const LadingPage = () => {
    const [nama, setNama] = useState("")
    const [umur, setUmur] = useState(900)
    const [alamat, setAlamat] = useState("")


useEffect(() => {
    if (nama.length > 5) {
        setAlamat("disini")
    }
   
}, [nama])


// frist di gunakan untuk memangil variable
// setfrist di gunakan untuk memanipulasi isi variable 

const submitFunction =()=>{
    setNama("nama saya jarwo")
    setUmur(213)
    setAlamat("di hatimu ")
}


  return (
    <div className="bajuRenang">
        <h1>nama saya :  {nama}</h1>
        <h2>umur saya : {umur}</h2>
        <h2>alamat saya : {alamat}</h2>

        <input placeholder="untuk merubah nama" onChange={(e)=>{setNama(e.target.value)}} type={"text"}/>
        <input placeholder="untuk merubah umur" type={"number"} onChange={(e)=>{setUmur(e.target.value)}}/>
        <input placeholder="untuk merubah alamat" type={"text"} onChange={(e)=>{setAlamat(e.target.value)}}/>
        
        <select onChange={(e)=>{setNama(e.target.value)}}>
            <option value={"tes 1"}>tes 1</option>
            <option value={"tes 2"}>tes 2</option>
        </select>
        
    
        <button 
          className="bajuRenang"
          onClick={()=>{submitFunction()}}> submit</button>
    </div>
  );
};
