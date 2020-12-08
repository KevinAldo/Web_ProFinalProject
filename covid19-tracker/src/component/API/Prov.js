import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format';
import Table from 'react-bootstrap/Table';

function Prov () {
    const [provinsi, DataProvinsi] = useState([]);
    useEffect(()=>{
      axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then(response => {DataProvinsi(response.data.data)})
  
  }, []);
  return(
  <div>
    <h1 style={{ fontFamily: "Times New Roman", fontSize: "60px" }}>Jumlah Kasus per Provinsi</h1>
    <center>
        <Table striped bordered hover size="sm" variant="dark" >
                  <tr>
                    <th><center>No.</center></th>
                    <th><center>Kode Provinsi</center></th>
                    <th><center>Provinsi</center></th>
                    <th><center>Positif</center></th>
                    <th><center>Meninggal</center></th>
                    <th><center>Sembuh</center></th>
                  </tr>
            {provinsi.map((item, index) => {
                return(
                  <tr classNames="tr">
                    <th scope="row" key={item.fid}><center>{index + 1}.</center></th>
                    <th> <center>{item.kodeProvi}</center></th>
                    <th> <center>{item.provinsi}</center></th>
                    <th><center><NumberFormat value={item.kasusPosi} thousandSeparator={true} displayType={'text'}/></center></th>
                    <th><center><NumberFormat value={item.kasusMeni} thousandSeparator={true} displayType={'text'}/></center></th>
                    <th><center><NumberFormat value={item.kasusSemb} thousandSeparator={true} displayType={'text'}/></center></th>
                  </tr>
                )
            })}
       </Table>
    </center>
  </div>
  )
}
export default Prov;