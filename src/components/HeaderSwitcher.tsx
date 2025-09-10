import { useLocation } from 'react-router-dom';
import Header from './Header';
import SubHeader from './SubHeader';

const HeaderSwitcher = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return isHomePage ? <Header /> : <SubHeader />;
};

export default HeaderSwitcher;

