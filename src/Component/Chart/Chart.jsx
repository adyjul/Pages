import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../API/index';
import {Line,Bar} from 'react-chartjs-2';

import style from './Chart.module.css';

const Chart = ({ data : {confirmed,recovered,deaths,lastUpdate} ,detailCountry}) =>{
    const [dataDaily,setDaily] = useState([]);

    //useEffect has a 2 paramater 
    useEffect(()=>{
        const fetchDaily = async () =>{           
            setDaily(await fetchDailyData());                       
        }                     
        fetchDaily();       
    },[])  
    
    if(confirmed){
        console.log(confirmed.value);
    }else{
        console.log('data belum muncul')
    }

    const lineChart = (       
        dataDaily.length ? (
            <Line
                data={{
                    labels: dataDaily.map(({reportDate})=> reportDate),
                    datasets : [{
                         data : dataDaily.map(({confirmed})=> confirmed),
                         label : 'Infected',
                         borderColor : '#3333ff',
                         fill : true,                       
                    },{
                         data : dataDaily.map(({deaths})=> deaths),
                         label : 'death',
                         borderColor : 'red',
                         backgroundColor : 'rgba(255,0,0, 0.5)',
                         fill : true,     
                    }],
                }}
            />
        ) : <p>Loading...</p>
    )
    
    const barChar = (
        confirmed ? (
            <Bar
                data = {{
                    labels : ['Infected','Recoverd', 'Deaths'],
                    datasets : [{
                        label : `Last Update ${new Date(lastUpdate).toDateString()}`,
                        backgroundColor : [
                            'rgba(0,0,255,0.5) ',
                            'rgba(0,255,0,0.5) ',
                            'rgba(255,0,0,0.5) ',
                        ],
                        data : [confirmed.value ,recovered.value,deaths.value],
                    }]
                }}

                options = {{
                   // legend : { display : false},
                    title :  {display : true , text : `Current State in ${detailCountry}`} 

                }}
            />
        ) : null

    )

    return (
        <div className={style.container}>
            {detailCountry ? barChar : lineChart }           
        </div>
    )
}

export default Chart;