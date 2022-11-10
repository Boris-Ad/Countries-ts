import classes from './CustomSelect.module.css';
import { IoChevronDown, IoClose } from 'react-icons/io5';
import React, { useState } from 'react';
import { IOptions } from '../../types';
import { useNavigate } from 'react-router-dom';
import { useToTitleForCustomSelect } from '../../hooks/useToTitleForCustomSelect';

interface CustomSelectProps {
  options: IOptions[];
  defaultSelect: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, defaultSelect }) => {
  const navigate = useNavigate();

  const [dropSelect, setDropSelect] = useState(false);

  const titleForSelect = useToTitleForCustomSelect(defaultSelect, options);

  const setOptions = (value: string) => {
    setDropSelect(false);
    navigate('/region/' + value);
  };

  const removeOptions: React.MouseEventHandler<SVGElement> = e => {
    e.stopPropagation();
    navigate('/');
  };

  return (
    <div className={classes.customSelect}>
      <div className={classes.select} onClick={() => setDropSelect(prev => (prev = !prev))}>
        <span>{titleForSelect}</span>
        {titleForSelect !== defaultSelect && <IoClose onClick={removeOptions} />}

        <div className={classes.border}></div>
        <IoChevronDown />
      </div>
      {dropSelect && (
        <ul className={classes.dropdownList}>
          {options.map(item => (
            <li key={item.value} onClick={() => setOptions(item.value)}>
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
