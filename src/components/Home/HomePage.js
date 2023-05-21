import HeaderPage from 'components/Header/HeaderPage';
import ListPage from 'components/ListPage/ListPage';
import { PrimaryContainer } from './HomePageStyle';
import FilterComponent from 'components/Filter/FilterComponent';

const HomePage = () => {
  return (
    <PrimaryContainer>
      <HeaderPage />
      <FilterComponent />
      <ListPage />
    </PrimaryContainer>
  );
};

export default HomePage;
