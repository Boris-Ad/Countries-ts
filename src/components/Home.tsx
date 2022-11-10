import React from 'react';
import ListOfCountries from '../components/ListOfCountries';
import { ICountries } from '../types';
import classes from './Home.module.css';
import ListEditing from './ListEditing';

interface HomeProps {
  countries: ICountries[]
}

const Home: React.FC<HomeProps> = ({ countries }) => {
  return (
    <div className={classes.home}>
      <ListEditing />
      <ListOfCountries countries={countries} />;
    </div>
  );
};

export default Home;
