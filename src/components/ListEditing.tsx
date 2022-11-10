import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { setValue } from '../redux/countriesSlice';
import { IOptions } from '../types';
import classes from './ListEditing.module.css';
import CustomSearch from './ui/CustomSearch';
import CustomSelect from './ui/CustomSelect';



const ListEditing: React.FC = () => {
  const selectValue = useAppSelector(state => state.countries.value)
  const dispatch = useAppDispatch()
    const options : IOptions[] = [
        { title: 'Africa', value: 'africa' },
        { title: 'America', value: 'americas' },
        { title: 'Europe', value: 'europe' },
        { title: 'Asia', value: 'asia' },
        { title: 'Oceania', value: 'oceania' },
      ]
      const defaultSelect = 'Filter by region'
      const placeholder = 'Search for a country'

  return (
    <div className={classes.listEditing}>
      <CustomSearch value={selectValue} setValue={(e) => dispatch(setValue(e))} placeholder={placeholder}/>
      <CustomSelect options={options} defaultSelect={defaultSelect} />
    </div>
  );
};

export default ListEditing;
