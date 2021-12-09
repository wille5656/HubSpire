import axios from "axios";
import React, { useState, useEffect,  useMemo  } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const Able = () => {


  



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


    // const [response, setResponse] = useState(null);
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

    const results= useEffect(() => {
         fetchData();
    }, []);

    

    console.log("array", ax)
    
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
      const classes = useStyles();
   

    return (
<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ax && ax.results.map((result) => (

            <TableRow key={result.name}>
              <TableCell>{result.name}</TableCell>
              <TableCell align="right">{result.url}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


//         <div className="App">
//             <Table columns={columns} data={data} />
//             <header className="App-header">
//                 {ax && ax.results.map((element) => (
//                     <div>{element.name} </div>))}
//                 <button onClick={fetchData}> Get Array</button>
//             </header>
//         </div>
//     )
// };
export default Able;