import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { isNonEmptyArray } from "@apollo/client/utilities";


const Field = () => {


    const [field, setField] = useState('');
    const [empty, setEmpty] = useState(false);


    const handleToggle = () => {
        setEmpty(!empty)
    };
    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });
    const classes = useStyles();

    
    
    return (
        <div>

            <form className={classes.root} noValidate autoComplete="off">
                <TextField value={field} onChange={(e) => setField(e.target.value)} id="standard-basic" label="Input" />
                {console.log('value = ', field)}
            </form>

            <button onClick={() => handleToggle()}>Toggle State</button>
            {empty && (
        
         <p>{field}</p> 
          
       
      )}
        
        </div>
    );
}



export default Field;