import React, {useEffect, useState } from 'react';
import axios from "axios";
import { Card, Typography, Grid } from '@material-ui/core';
import styles from './Style.module.css';
// import NumberFormat from 'react-number-format';
import CountUp from 'react-countup';
import cx from 'classnames';

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
  <div>
  <h1 style={{ fontFamily: "Times New Roman", fontSize: "60px" }}>Jumlah Kasus di Indonesia</h1>
    <div className={styles.container}>
    <Grid container spacing={3} justify="center">
      <Grid item component={Card} className={cx(styles.card, styles.confirmed)}>
        <Typography color="textSecondary" gutterBottom>Konfirmasi</Typography>
        <Typography variant="h5"> 
        <CountUp start={0} end={jumlahKasus} duration={2} separator=','/>
        {/* <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/> */}
        </Typography>
        <Typography variant="body2">Jumlah kasus yang Terkonfirmasi 
        <p>Positif COVID-19</p></Typography>
      </Grid>
      <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
        <Typography color="textSecondary" gutterBottom>Meninggal</Typography>
        <Typography variant="h5"> 
        <CountUp start={0} end={meninggal} duration={2} separator=','/>
        {/* <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/> */}
        </Typography>
        <Typography variant="body2">Jumlah kasus yang Meninggal
        <p>karena COVID-19</p></Typography>
      </Grid>
      <Grid item component={Card} className={cx(styles.card, styles.recovered)}>
        <Typography color="textSecondary" gutterBottom>Sembuh</Typography>
        <Typography variant="h5">
        <CountUp start={0} end={sembuh} duration={2} separator=','/>
        {/* <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/> */}
        </Typography>
        <Typography variant="body2">Jumlah kasus yang Sembuh
        <p>karena COVID-19</p></Typography>
      </Grid>
    </Grid>
    </div>
  </div>
);

  
};
export default Indonesia;