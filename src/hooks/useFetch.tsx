import React, { useEffect, useState } from "react";

export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const useFetch = (url: string) => {
  const [data, setData] = useState({
    state: apiStates.LOADING,
    error: "",
    data: [],
  });

  const setPartData = (partialData: any) =>
    setData({ ...data, ...partialData });

  useEffect(() => {
    setPartData({
      state: apiStates.LOADING,
    });
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setPartData({
          state: apiStates.SUCCESS,
          data,
        });
      } catch (error) {
        setPartData({
          state: apiStates.ERROR,
          error: "Fetch failed. Awkward... " + error,
        });
      }
    };
    fetchData();
  }, []);
  return data;
};
