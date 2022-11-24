import { FunctionComponent } from 'react';
import CardsContainer from '../components/cardsContainer/CardsContainer';
import SearchBar from '../components/searchBar/SearchBar';
import Select from '../components/select/Select';
import './Main.scss';

const MainRoute: FunctionComponent = () => {
  return (
    <div className="main-container">
      <div className="inputs-container">
        <SearchBar />
        <Select />
      </div>
      <CardsContainer />
    </div>
  );
};

export default MainRoute;
