import React from "react";
import axios from "axios";
import MyContext from "./MyContext";
import { useState, useEffect } from "react";
import {
  regionData,
  regionSelectionState,
} from "../assets/HouseRegionImages/data";
// import filterData from "../components/FilterComponent/filterData";

const MyProvider = ({ children }) => {
  const [data, setData] = useState({
    results: null,
    loading: true,
    error: null,
  });
  //   const initialValOfFilterRegionState = filterData.map((house, i) => {
  //    return {house.name}
  //  })
  const [selectionState, setSelectionState] = useState(regionSelectionState);

  const [filterRegionState, setFilterRegionState] = useState({
    reach: false,
    north: false,
    westerlands: false,
    crownlands: false,
    vale: false,
    ironIslands: false,
    stormlands: false,
    dorne: false,
    riverlands: false,
    neck: false,
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

  useEffect(() => {
    loadHouseCard();
  }, [page]);

  const getImageFilter = (houseName) => {
    const filteredHouse = regionData.filter(
      (house) => house.region === houseName
    );

    return filteredHouse.length > 0 ? filteredHouse[0].image : "";
  };

  const getFilteredRegion = (region) => {
    return data.results.data.filter((house) => house.region === region);
  };
  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        selectedCardUrl,
        setSelectedCardUrl,
        getImageFilter,
        page,
        setPage,
        filterRegionState,
        setFilterRegionState,
        getFilteredRegion,
        selectionState,
        setSelectionState,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
