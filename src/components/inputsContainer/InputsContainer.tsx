import { FunctionComponent } from 'react';
import SearchBar from '../searchBar/SearchBar';
import Select from '../select/Select';
import './inputsContainer.scss';

const InputsContainer: FunctionComponent = () => {
  return (
    <div className="inputs-container">
      <SearchBar />
      <Select />
    </div>
  );
};

export default InputsContainer;
