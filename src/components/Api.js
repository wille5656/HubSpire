import React, { useState, useEffect } from "react";


const Api = () => {


    const [activities, setActivities] = useState(null);
    console.log("activities", activities)
    const url = 'https://www.boredapi.com/api/activity/';
    
    
    const fetchData = async () => {
        const resp = await fetch("https://www.boredapi.com/api/activity/")
        const res = await resp.json()
        setActivities(res)
       

        // const getData = useCallback(() => {
        //     setActivities(false);
        //     const reponse = await fetch('https://www.boredapi.com/api/activity/')
        //     setActivities(true);
        // }, [])
        // useEffect(() => {
        //  getData()
        // },[getData])
    }

    useEffect(() => {
        fetchData()
        return () => {
            console.log("Error")
        }
    }, [])
    console.log("activities", activities)
   
    return (

       <div className = "App">
           <header className = "App-header">
               {activities && activities.activity}
               <button onClick = {useEffect, fetchData}> Get Data</button>
           </header>
       </div>
    )
};
export default Api;