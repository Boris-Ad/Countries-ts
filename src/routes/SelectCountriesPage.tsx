import { useLoaderData } from 'react-router-dom';
import type { LoaderFunctionArgs } from 'react-router-dom';
import Home from '../components/Home';
import { ICountries } from '../types';
import { searchByRegion } from '../api/countries';

const SelectCountriesPage: React.FC = () => {
  const countries = useLoaderData() as ICountries[];
  return <Home countries={countries} />;
};

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.select) {
    return await searchByRegion(params.select);
  }
}

export default SelectCountriesPage;
