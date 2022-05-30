import React from 'react';
import { useFetchData } from './Utility/useFetch';


import Product from './Components/Product/Product';


function App() {

  const {data, isError, error, isLoading} = useFetchData();


  console.log("data", data);

  return (
    <div className="App">
      Hello React 
      <Product></Product>

    </div>
  );
}

export default App;
