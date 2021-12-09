import React, { useState, useEffect } from "react";

const Array = () => {


    const [array, setArray] = useState([]);

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10';


    const fetchData = async () => {


        const resp = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
        const res = await resp.json()
        setArray(res.results)



    // const getData = useCallback(() => {
        //     |   ^  605 |   //     setActivities(false);
        // 606 |   //     const reponse = await fetch('https://www.boredapi.com/api/activity/')
        // 607 |   //     setActivities(true);
        // // const getData = useCallback(() => {
        //     setActivities(false);
        //     const reponse = await fetch('https://www.boredapi.com/api/activity/')
        //     setActivities(true);
        // }, [])
        // useEffect(() => {
        //  getData()
        // },[getData])
    }
    // useEffect(() => {
    //     fetchData()
    //     return () => {
    //         console.log("Error")
    //     }
    // }, [])

    console.log("array", array)
    const rep = array.map((element) => (
        <div>{element.name} </div>
    )
    );
    return (

        <div className="App">
            <header className="App-header">
                {rep && rep}
                <button onClick={fetchData}> Get Array</button>
            </header>
        </div>
    )
};
export default Array;