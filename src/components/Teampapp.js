import React, { useEffect, useState } from 'react';
import './css/style.css';

const Tempapp = () => {

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Bhopal");

    useEffect(() => {
        const fetchApi = async () => {
         const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=82a6a5197698657d62bddafa5791bc4c`;
         const response = await fetch(url);
         const resJson = await response.json();
         setCity(resJson.main);
         //console.log(response);
        }

        fetchApi();
    }, [search])

    return(
        <>
        <div className="box">
            <div className="inputData">
                <input
                type="search"
                value={search}
                className="inputField"
                onChange={(event) => {setSearch(event.target.value)}}/>
            </div>
        
        {!city ? 
        (<p className="errorMsg">No data found</p>) : 
        (
        <div>
            <div className="info">
                <h1 className="location">
                <i class="fas fa-street-view"></i>
                     {search}
                </h1>

                <h1 className="temp">
                    {city.temp}  Cel
                </h1>

                <h3 className="tempmin_max"> 
                    Min : {city.temp_min} | Max : {city.temp_max}
                </h3>
            </div>

            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>

            
        </div>
        )}
        
    </div>
        </>
    );
}

export default Tempapp;