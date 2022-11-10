import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

import classes from './CustomSearch.module.css';

type CustomSearchProps = {
  value: string;
  setValue: (e: string) => void;
  placeholder: string;
};

const CustomSearch: React.FC<CustomSearchProps> = ({ value, setValue, placeholder }) => {
  return (
    <div className={classes.customSearch}>
      <IoSearch />
      <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder={placeholder} />
    </div>
  );
};

export default CustomSearch;
