import { FunctionComponent } from 'react';
import CardsContainer from '../components/cardsContainer/CardsContainer';
import InputsContainer from '../components/inputsContainer/InputsContainer';
import './index.scss';

const MainRoute: FunctionComponent = () => {
  return (
    <div className="main-container">
      <InputsContainer />
      <CardsContainer />
    </div>
  );
};

export default MainRoute;
