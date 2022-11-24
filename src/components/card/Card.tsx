import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContextType, useTheme } from '../../context/ThemeContext';
import './card.scss';

interface CardProps {
  flag: string;
  name: string;
  population: number;
  region: string;
  capital: string;
}

const Card: FunctionComponent<CardProps> = ({ flag, name, population, region, capital }) => {
  const { colorMode } = useTheme() as ThemeContextType;
  return (
    <Link to={`details/${name}`}>
      <div className={`card ${colorMode}`}>
        <img className="card__flag" src={flag}></img>
        <div className="card__content">
          <h2 className="card__name">{name}</h2>
          <p className="card__data">
            <b>Population: </b>
            {population}
          </p>
          <p className="card__data">
            <b>Region: </b>
            {region}
          </p>
          <p className="card__data">
            <b>Capital: </b>
            {capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
