import React from 'react';
import {Card,Grid,CardContent,Typography} from '@material-ui/core';
import CountUp from 'react-countup';

//This Method use when a exist multiple classname 
import cx from 'classnames'

import style from './Cards.module.css';

const Cards = ({data : {confirmed,deaths,recovered,lastUpdate}}) =>{

    if(!confirmed){
        return(
            <p>Loding......</p>
        )
    }

    console.log(confirmed)
   
    return(
        <div className ={style.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography variant="h5" gutterBottom>
                                <CountUp start ={0} end = {confirmed.value} duration = {2,5} separator = ","/>
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number Of Active cause COVID-19</Typography>
                        </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5" gutterBottom>
                                <CountUp start ={0} end = {recovered.value} duration = {2,5} separator = ","/>
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number Of Recovered</Typography>
                        </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={3} className={cx(style.card,style.death)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Death</Typography>
                            <Typography variant="h5" gutterBottom>
                                <CountUp start ={0} end = {deaths.value} duration = {2,5} separator = ","/>
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>{new Date(lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number Of Death Cause COVID-19</Typography>
                        </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;