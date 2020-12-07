import React, {useEffect, useState } from 'react';
import axios from "axios";
import { Card, Typography, Grid } from '@material-ui/core';
import styles from './Style.module.css';
// import NumberFormat from 'react-number-format';
import CountUp from 'react-countup';
import cx from 'classnames';

const Global = () => {
    const [confirmed, setConfirmed] = useState("");
    const [deaths, setDeaths] = useState("");
    const [recovered, setRecovered] = useState("");
    useEffect(() => {
      axios 
       .get("https://covid19.mathdro.id/api")
       .then((response) =>
       { 
       setConfirmed(response.data.confirmed.value);
       setDeaths(response.data.deaths.value);
       setRecovered(response.data.recovered.value);
      })  
   }, []);


  return(
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} className={cx(styles.card, styles.confirmed)}>
          <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
          <Typography variant="h5"> 
          <CountUp start={0} end={confirmed} duration={2} separator=','/>
          {/* <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/> */}
          </Typography>
          <Typography variant="body2">Jumlah kasus yang Terkonfirmasi 
          <p>Positif COVID-19</p></Typography>
        </Grid>
        <Grid item component={Card} className={cx(styles.card, styles.deaths)}>
          <Typography color="textSecondary" gutterBottom>Deaths</Typography>
          <Typography variant="h5"> 
          <CountUp start={0} end={deaths} duration={2} separator=','/>
          {/* <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/> */}
          </Typography>
          <Typography variant="body2">Jumlah kasus yang Meninggal
          <p>karena COVID-19</p></Typography>
        </Grid>
        <Grid item component={Card} className={cx(styles.card, styles.recovered)}>
          <Typography color="textSecondary" gutterBottom>Recovered</Typography>
          <Typography variant="h5">
          <CountUp start={0} end={recovered} duration={2} separator=','/>
          {/* <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/> */}
          </Typography>
          <Typography variant="body2">Jumlah kasus yang Sembuh
          <p>karena COVID-19</p></Typography>
        </Grid>
      </Grid>
    </div>
);

  
};
export default Global;