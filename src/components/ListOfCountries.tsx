import classes from './ListOfCountries.module.css';
import { ICountries } from '../types';
import CountryCard from './CountryCard';
import { useToSearchCountries } from '../hooks/useToSearchCountries';

interface ListOfCountriesProps {
  countries: ICountries[];
}

const ListOfCountries: React.FC<ListOfCountriesProps> = ({ countries }) => {
  
  const { filteredCountries } = useToSearchCountries(countries);

  return (
    <div className={classes.listOfCountries}>
      {filteredCountries.map(item => (
        <CountryCard key={item.name} {...item} />
      ))}
    </div>
  );
};

export default ListOfCountries;
