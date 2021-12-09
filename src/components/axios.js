import axios from "axios";
import React, { useState, useEffect, Component } from "react";

const Axios = () => {






    //     const fetchData = async ()  => {

    //     //     const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    //       //  const res = await resp.json()
    //     //     setAx(res)
    //     // }


    // }



    //  axios.get('https://pokeapi.co/api/v2/pokemon?limit=10').then((res)=>{
    //             console.log('res ->',ax)
    //         return res.json()

    //          .catch((err)=> {
    //         console.log('error-> ', err)
    //     })    
    //     }).then((data)=> {
    //         setAx(data)
    //     })



    const [ax, setAx] = useState(null);
    const [error, setError] = useState('');


    const fetchData = () => {
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=10')
            .then((res) => {
                setAx(res.data);
            })
            .catch((err) => {
                setError(err);
            })

    };

    // useEffect(() => {
    //     fetchData();
    // }, []);


    console.log("array", ax)


    return (




        <div className="App">
            <header className="App-header">
                {ax && ax.results.map((element) => (
                    <div>{element.name} </div>))}
                <button onClick={fetchData}> Get Array</button>
            </header>
        </div>
    )
};
export default Axios;