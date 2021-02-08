import React,{useState,useEffect} from 'react';
import {FormControl,NativeSelect} from '@material-ui/core';
import {fetchDataCountries} from '../../API/index';

import style from './CountryPicker.module.css';

const CountryPicker = ({handleCountry}) =>{
    const [dataCountries,setCountries] = useState([]);

    useEffect(()=>{
        const fetchCountries = async () =>{
            setCountries( await fetchDataCountries())
        }
        fetchCountries()
    },[setCountries])
   
          
    return(                                                 
        <FormControl className={style.formControl}>
            <NativeSelect defaultValue=" " onChange={(e)=>{handleCountry(e.target.value)}}>
                <option value = "">Global</option>
                    {
                        dataCountries.map((name,i)=>
                            <option key={i} value ={name} > {name} </option>
                        )
                    }
            </NativeSelect>
        </FormControl>                                                        
    )
}

export default CountryPicker;