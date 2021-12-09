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
import { render } from 'react-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";


  const GET_QUERY = gql`
  query { 
  pokemon_v2_pokemon(limit: 10) {
    id
    name
    order
  }
}
`;
 

const Query = () => {
    const { loading, error, data } = useQuery(GET_QUERY);


const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
      
      const classes = useStyles();

    return(
 
<TableContainer component={Paper}>
      
{console.log('data=', data)}

<Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.pokemon_v2_pokemon.map((query) => (

            <TableRow key={query.id}>
              <TableCell>{query.id}</TableCell>
              <TableCell align="right">{query.name}</TableCell>
              <TableCell align="right">{query.order}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    )
};




export default Query;