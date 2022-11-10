import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import { searchByName } from '../api/countries';
import Country from '../components/Country';
import { IInformation } from '../types';

const CountryPage: React.FC = () => {
  const loaderData = useLoaderData() as IInformation;

  return <Country countryInformation={loaderData} />;
};

export async function loader({ params }: LoaderFunctionArgs) {
  if (params.country) {
    return await searchByName(params.country);
  }
}

export default CountryPage;
