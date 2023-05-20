import HeaderPage from 'components/Header/HeaderPage';
import ListPage from 'components/ListPage/ListPage';
import { PrimaryContainer } from './HomePageStyle';

const HomePage = () => {
  return (
    <PrimaryContainer>
      <HeaderPage />
      <ListPage />
    </PrimaryContainer>
  );
};

export default HomePage;
