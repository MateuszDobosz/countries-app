import { FunctionComponent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeContextType, useTheme } from '../../context/ThemeContext';
import { ICountry } from '../cardsContainer/CardsContainer';
import NavButton from '../navButton/NavButton';
import './countryDetails.scss';

export interface ICountryDetails extends ICountry {
  name: {
    common: string;
    official: string;
  };
  subregion: string;
  tld: string[];
  area: number;
  borders: string[];
}
const CountryDetails: FunctionComponent = () => {
  const { name } = useParams();
  const [country, setCountry] = useState<ICountryDetails | null>(null);
  const { colorMode } = useTheme() as ThemeContextType;
  useEffect(() => {
    async function fetchCountry(name: string) {
      const data = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const json = (await data.json()) as ICountryDetails[];
      setCountry(json[0]);
    }
    if (name) fetchCountry(name);
  }, [name]);
  return (
    <div className={`country ${colorMode}`}>
      {country ? (
        <>
          <img src={country?.flags.png} alt="" className="country__flag" />
          <div className="country__content">
            <h2>{country.name.common}</h2>
            <p className="data">
              <b>Official Name: </b> {country.name.official}
            </p>
            <p className="data">
              <b>Population: </b> {country.population}
            </p>
            <p className="data">
              <b>Region: </b> {country.region}
            </p>
            <p className="data">
              <b>Sub Region: </b> {country.subregion}
            </p>
            <p className="data">
              <b>Capital: </b> {country.capital}
            </p>
            <br></br>
            <p className="data">
              <b>Top Level Domain: </b> {country.tld && country.tld}
            </p>
            <p className="data">
              <b>Area: </b> {country.area}
            </p>
            <br />
            <h3>Border Countries: </h3>
            <div className="country__borders">
              {country.borders ? (
                country.borders.map((border) => (
                  <NavButton key={border} to={`/details/${border}`}>
                    {border}
                  </NavButton>
                ))
              ) : (
                <p>No borders</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <h1>Country details not found 🥺</h1>
      )}
    </div>
  );
};

export default CountryDetails;
