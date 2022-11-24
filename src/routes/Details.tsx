import { FunctionComponent } from 'react';
import { Link, useParams } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import './index.scss';
import NavButton from '../components/navButton/NavButton';
import CountryDetails from '../components/countryDetails/CountryDetails';

const DetailsRoute: FunctionComponent = () => {
  const { id } = useParams();
  return (
    <div className="main-container">
      <NavButton to="/">
        <HiOutlineArrowNarrowLeft /> Back
      </NavButton>
      <CountryDetails />
    </div>
  );
};

export default DetailsRoute;
