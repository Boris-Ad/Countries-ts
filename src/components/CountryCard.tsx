import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import countryPage from '../utils/pathCountryPage';
import { useObserver } from '../hooks/useObserver';
import { ICountries } from '../types';
import classes from './CountryCard.module.css';

const CountryCard: React.FC<ICountries> = ({ flag, name, population, region, capital }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  const { visible, setRef } = useObserver();

  useEffect(() => {
    setRef(cardRef);
  }, [cardRef]);

  return (
    <div ref={cardRef} className={classes.card} onClick={() => navigate('/' + countryPage(name))}>
      {visible && (
        <>
          <img src={flag} alt={name} />
          <div className={classes.cardBody}>
            <div className={classes.cardTitle}>{name}</div>
            <p>Population: {population}</p>
            <p>Region: {region}</p>
            <p>Capital: {capital}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CountryCard;
