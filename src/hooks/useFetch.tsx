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
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPartData({
          state: apiStates.SUCCESS,
          data,
        });
      })
      .catch(() => {
        setPartData({
          state: apiStates.ERROR,
          error: "Fetch failed",
        });
      });
  }, []);
  return data;
};
