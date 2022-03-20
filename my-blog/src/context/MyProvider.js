import React from "react";
import axios from "axios";
import MyContext from "./MyContext";
import { useState, useEffect } from "react";
import regionData from "../assets/HouseRegionImages/data";

const MyProvider = ({ children }) => {

  const [data, setData] = useState({
    results:null,
    loading: true,
    error: null,
  });

  const [selectedCardUrl, setSelectedCardUrl] = useState(null);
    const [page, setPage] = useState(1);
  const loadHouseCard = async () => {
    const url = `https://anapioficeandfire.com/api/houses?page=${page}&pageSize=12`;
    try {
      const results = await axios.get(url);
        setData({
          results,
          loading: false,
          error: null,
        });

      
    } catch (error) {
      setData({ results: null, loading: false, error });
    }
  };
 
 
  
  const getImageFilter = (houseName) => {
    const filteredHouse=(regionData.filter((house)=> house.region === houseName))
    
    return (filteredHouse.length > 0 ? filteredHouse[0].image : '')
  }
  
  
   useEffect(() => {
      loadHouseCard(); 
   }, [page]);
  
  return (
    <MyContext.Provider value={{ data, setData,selectedCardUrl,setSelectedCardUrl,getImageFilter,page,setPage }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
