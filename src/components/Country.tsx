import { Link, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import classes from './Country.module.css';
import getData from '../utils/getDataFromResponse';
import countryPage from '../utils/pathCountryPage';
import { IInformation } from '../types';
import { searchByCode } from '../api/countries';
import { useEffect, useState } from 'react';

interface CountryProps {
  countryInformation: IInformation;
}

const Country: React.FC<CountryProps> = ({ countryInformation }) => {
  const navigate = useNavigate();
  const {
    name,
    flag,
    capital,
    population,
    region,
    nativeName,
    subregion,
    currencies,
    languages,
    topLevelDomain,
    borders = [],
  } = countryInformation;

  const [neighbors, setNeighbors] = useState<{ name: string }[]>([]);

  async function getNeighbors() {
    if (borders.length) {
      const res = await searchByCode(borders.toString());
      setNeighbors(res);
    }
  }

  useEffect(() => {
    getNeighbors();
  }, [borders]);

  const leftColumn = [
    { key: 'Native Name', values: nativeName },
    { key: 'Population', values: population },
    { key: 'Region', values: region },
    { key: 'Sub Region', values: subregion },
    { key: 'Capital', values: capital },
  ];

  const rightColumn = [
    { key: 'Top Level Domain', values: getData(topLevelDomain).join(',') },
    { key: 'Currencies', values: getData(currencies).join(',') },
    { key: 'Languages', values: getData(languages).join(',') },
  ];

  return (
    <div className={classes.countryPage}>
      <button onClick={() => navigate(-1)}>
        <IoArrowBack className={classes.arrow} />
        Back
      </button>

      <div className={classes.countryPageBody}>
        <img src={flag} alt={name} />
        <div className={classes.bodyContent}>
          <h1>{name}</h1>
          <div className={classes.contentList}>
            <ul className={classes.listLeft}>
              {leftColumn.map(item => (
                <li key={item.key}>
                  {item.key}: {item.values}
                </li>
              ))}
            </ul>

            <ul className={classes.listRight}>
              {rightColumn.map(item => (
                <li key={item.key}>
                  {item.key}: {item.values}
                </li>
              ))}
            </ul>
          </div>
          <div className={classes.contentFooter}>
            <span>Border Countries:</span>
            <div className={classes.contentFooterBorders}>
              {neighbors.map(item => (
                <Link className={classes.link} key={item.name} to={'/' + countryPage(item.name)}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
