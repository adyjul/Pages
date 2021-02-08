import React,{Component} from 'react';
import {Cards,Chart,CountryPicker} from './Component/index';
import {fetchData} from './API/index'

import style from './App.module.css';
import Covid from './Images/Covid.png';

class App extends Component {
    state = {
        dataCase : {},
        country : ''    
    }

    async componentDidMount(){
        const data = await fetchData();              
        this.setState({
            dataCase : data,         
        })
        console.log(data);
    }

    handleCountryPicker = async (value) =>{
        const data = await fetchData(value);              
        this.setState({
            dataCase : data,
            country : value         
        }) 

        console.log(this.state.dataCase)      
    }

    render(){
        const {dataCase,country} = this.state;
        return(
            <div className={style.container}>
                <img src={Covid} alt="Covid-19" className={style.image}></img>            
                <Cards data = {dataCase}/>
                <CountryPicker handleCountry={this.handleCountryPicker}/>
                <Chart data = {dataCase} detailCountry={country} />
               
            </div>
        )
    }
}

export default App;