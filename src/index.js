
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
//import * as serviceWorker from "./serviceWorker";
import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://beta.pokeapi.co/graphql/v1beta',
    cache: new InMemoryCache()
  });


ReactDOM.render(
    <BrowserRouter>
     <ApolloProvider client = {client}> <App /> </ApolloProvider>   
    </BrowserRouter>,
    document.getElementById("root")
);

//serviceWorker.unregister();