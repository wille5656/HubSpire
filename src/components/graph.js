import React, { useState, useEffect, useMemo } from "react";
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
import { cartItemsVar } from './variables';
import { makeVar, useReactiveVar } from '@apollo/client';



const GET_QUERY = gql`
    query pokemon_v2_pokemon($limit: Int){ 
    pokemon_v2_pokemon(limit: $limit) {
      id
      name
      order
    }
  }
  `;
const Graph = () => {
    const cartItems = useReactiveVar(cartItemsVar)
    const { data } = useQuery(GET_QUERY, {
        variables: { limit: cartItems }
    });
    console.log("data= ", data)
    
    
    const useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
      });
      const classes = useStyles();
    return (
        <div>

            <h2>Value of Counter = {cartItems}</h2>

            <button onClick={() => cartItemsVar(cartItems + 1)}> Increment </button>





<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Order</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.pokemon_v2_pokemon.map((element) => (

            <TableRow key={element.id}>
              <TableCell>{element.id}</TableCell>
              <TableCell align="right">{element.name}</TableCell>
              <TableCell align="right">{element.order}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 
        </div>


    );
}



export default Graph;