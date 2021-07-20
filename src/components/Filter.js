import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Filter = () => {
  const dispatch = useDispatch();
  const filterByRegion = useSelector((state) => state.filterByRegion);

  const handleChangeRegion = (evt) => {
    const regionSelected = evt.target.value;

    dispatch({
      type: "FILTER_BY_REGION",
      payload: regionSelected,
    });
  };

  return (
    <select
      className="filter"
      onChange={handleChangeRegion}
      value={filterByRegion}
    >
      <option value="">Filter by region</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Africa">Africa</option>
      <option value="Oceania">Oceania</option>
      <option value="Europe">Europe</option>
    </select>
  );
}

export default Filter