import React, { useState, useEffect } from "react";
import Search from "./Search";
import Data from "./Data";

export const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData('');
  }, []);

  async function fetchData(query) {
    const response = await fetch("http://localhost:5108/api/Users?query=" + query);
    const result = await response.json();
    setData(result);
  }

  const onHandleSearch = (query)=> {
    fetchData(query);
  }

  return (
    <>
      <Search handleSearch= {onHandleSearch} />
      <Data data={data} />
    </>
  );
};
