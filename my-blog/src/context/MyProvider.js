import React from "react";
import axios from "axios";
import MyContext from "./MyContext";
import { useState, useEffect } from "react";
const MyProvider = ({ children }) => {
  const [data, setData] = useState({
    results:null,
    loading: true,
    error: null,
  });

  const loadHouseCard = async () => {
    const url = `https://anapioficeandfire.com/api/houses`;
    try {
      const results = await axios.get(url);
      console.log(results);
        setData({
          results,
          loading: false,
          error: null,
        });
    } catch (error) {
      setData({ results: null, loading: false, error });
    }
  };
 
  useEffect(() => {
    // for (let i = 1; i <= 444; i++) {
    // }
      console.log('hi');
      
      loadHouseCard(); 
  }, []);
  return (
    <MyContext.Provider value={{ data, setData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
