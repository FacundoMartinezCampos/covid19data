import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './CardsCalculation.module.css'


const CardsCalculation = ({data: { confirmed, recovered, deaths, lastUpdate }}) => {
  if(!confirmed) {
    return 'Loading...';
  }

  const confirmedCases = confirmed.value
  const recoveredCases = recovered.value
  const deathsCases = deaths.value

 
let x = confirmedCases;
let y = recoveredCases;
let w = deathsCases;

let activeCases = x - y - w;

let closedCases = y + w






  
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={5} className={styles.cardInfected}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Active Cases</Typography>
            <Typography variant="h5">
              <CountUp start={0} end={activeCases } duration={3} separator=","></CountUp>
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of active cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={5} className={styles.cardRecovered}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>Closed Cases</Typography>
            <Typography variant="h5">
            <CountUp start={0} end={closedCases} duration={3} separator=","></CountUp>
            </Typography>
            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">Number of closed cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        
      </Grid>
    </div>
  )
}

export default CardsCalculation;