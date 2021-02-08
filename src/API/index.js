
import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

//get Data function for data patient
export const fetchData = async (value) =>{
    let dinamicUrl = url;

    if(value){
        dinamicUrl = `${dinamicUrl}/countries/${value}`
    }

    try{
        //destruction data object from API
        const { data : {confirmed,deaths,recovered,lastUpdate}} = await axios.get(dinamicUrl);

        //Desctuction ALL data API
        return {confirmed, deaths, recovered, lastUpdate};

    }catch(error){

    }  
}

const urlDaily = 'https://covid19.mathdro.id/api/daily';

export const fetchDailyData = async () =>{
    try {
        //Destruction data object from API
        const {data} = await axios.get(urlDaily);

        //Destruction ALL data API, Use looping because data is Array
        const modifyData =  data.map((result)=>({
            confirmed : result.confirmed.total,
            deaths : result.deaths.total,
            reportDate : result.reportDate
        }))
               
       return modifyData;

    } catch (error) {
        console.log(error);
    }
}

const urlCountries = 'https://covid19.mathdro.id/api/countries';

export const fetchDataCountries = async () =>{
    try {
        //destruction all Data from API
        const {data : {countries} } = await axios.get(urlCountries);

       return countries.map((result)=> result.name);                   
    } catch (error) {
        console.log(error);
    }
}
