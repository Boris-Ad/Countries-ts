import { Link } from 'react-router-dom';
import { IoMoon, IoMoonOutline, IoSunny } from 'react-icons/io5';
import classes from './Navbar.module.css';
import { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <nav className={classes.navbar}>
      <Link to="/">Were in the world?</Link>
      <div className={classes.setMode}>
        {mode === 'light' ? <IoMoonOutline /> : <IoSunny />}
        <span onClick={() => setMode(prev => (prev === 'light' ? 'dark' : 'light'))}>
          {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
