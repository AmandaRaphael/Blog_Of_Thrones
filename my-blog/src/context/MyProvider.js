import React from "react";
import axios from "axios";
import MyContext from "./MyContext";
import { useState, useEffect } from "react";
import {
  regionData,
  regionSelectionState,
} from "../assets/HouseRegion/data";

const MyProvider = ({ children }) => {
  //data from the api(all houses)
  const [data, setData] = useState({
    results: null,
    loading: true,
    error: null,
  });

  //region filter state
  const [selectionState, setSelectionState] = useState(regionSelectionState);

  //house details state
  const [selectedCardUrl, setSelectedCardUrl] = useState(null);

  const [cardInfo, setCardInfo] = useState(null);

  //fetch current lord api listening to click event states
  const [showCurrentLordButton, setShowCurrentLordButton] = useState(true);

  const [showCurrentLord, setShowCurrentLord] = useState(false);

  const [currentLord, setCurrentLord] = useState(null);

  //pagination state
  const [page, setPage] = useState(1);

  //fetch all houses
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

  //to fetch houses for each page
  useEffect(() => {
    loadHouseCard();
  }, [page]);

  // used in LoadCard and HouseCardDetails component to display images in each card
  const getImageFilter = (houseName) => {
    const filteredHouse = regionData.filter(
      (house) => house.region === houseName
    );

    return filteredHouse.length > 0 ? filteredHouse[0].image : "";
  };

  //used in LoadCard component to show filtered regions
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
        getFilteredRegion,
        selectionState,
        setSelectionState,
        cardInfo,
        setCardInfo,
        currentLord,
        setCurrentLord,
        showCurrentLord,
        setShowCurrentLord,
        showCurrentLordButton,
        setShowCurrentLordButton,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
