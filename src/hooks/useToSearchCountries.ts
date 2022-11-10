import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../redux/hooks';
import { ICountries } from '../types';

export const useToSearchCountries = (countries : ICountries[]) => {
   const params = useParams()
    const selectValue = useAppSelector(state => state.countries.value).toLowerCase();
    const res = countries.filter(item => item.name.toLowerCase().includes(selectValue));
    const [filteredCountries,setFilteredCountries ] = useState(countries)
    useEffect(() => {
        setFilteredCountries(res)
    },[selectValue,params.select])

    return {filteredCountries}
}