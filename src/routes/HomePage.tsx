import { useLoaderData } from 'react-router-dom';
import { getCountries } from '../api/countries';
import Home from '../components/Home';

import { ICountries } from '../types';

const HomePage: React.FC = () => {
  const countries = useLoaderData() as ICountries[];
  return <Home countries={countries} />;
};

export async function loader() {
  return await getCountries();
}

export default HomePage;
