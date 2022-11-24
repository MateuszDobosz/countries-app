import { FunctionComponent, useEffect, useState } from 'react';
import { QueryContextType, useQuery } from '../../context/QueryContext';
import { RegionContextType, useRegion } from '../../context/RegionContext';
import Card from '../card/Card';
import './cardsContainer.scss';

export interface Country {
  id: string;
  flags: { png: string };
  name: { common: string };
  population: number;
  region: string;
  capital: string[];
}

const CardsContainer: FunctionComponent = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const { region } = useRegion() as RegionContextType;
  const { query } = useQuery() as QueryContextType;
  useEffect(() => {
    async function fetchCountries() {
      const data = await fetch(`https://restcountries.com/v3.1/all`);
      const json = (await data.json()) as Country[];
      setCountries(json);
    }
    async function fetchCountriesByRegion(region: string) {
      const data = await fetch(`https://restcountries.com/v3.1/region/${region}`);
      const json = (await data.json()) as Country[];
      setCountries(json);
    }
    if (region !== '' && region !== 'all') {
      fetchCountriesByRegion(region);
    } else {
      fetchCountries();
    }
  }, [region]);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  );

  return (
    <div className="cards-container">
      {countries.length > 0
        ? filteredCountries.map((country) => (
            <Card
              flag={country.flags.png}
              name={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital && country.capital[0]}
              key={country.name.common}
            />
          ))
        : null}
    </div>
  );
};

export default CardsContainer;
