  
import React, {useEffect, useState } from 'react';
import axios from "axios"
import '../../App.css'
import NumberFormat from 'react-number-format';

const Indonesia = () => {
  const [jumlahKasus, setJumlahKasus] = useState("");
  const [meninggal, setMeninggal] = useState("");
  const [sembuh, setSembuh] = useState("");
  useEffect(() => {
    axios 
     .get("https://indonesia-covid-19.mathdro.id/api")
     .then((response) =>

     { 
    setJumlahKasus(response.data.jumlahKasus);
     setMeninggal(response.data.meninggal);
     setSembuh(response.data.sembuh);
    })  
 }, []);


  return(
  <div className = "kotak2">
    <h1 className ="dataNumber1"> 
    Positif
    <p><NumberFormat value={jumlahKasus} thousandSeparator={true} displayType={'text'}/></p>
    </h1>
    <h1 className ="dataNumber2">
    meninggal 
    <p><NumberFormat value={meninggal} thousandSeparator={true} displayType={'text'}/></p>
    </h1>
    <h1 className ="dataNumber3">
    Sembuh 
    <p><NumberFormat value={sembuh} thousandSeparator={true} displayType={'text'}/></p>
    </h1>
  
  </div>
  
);

  
};
export default Indonesia;