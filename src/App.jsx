import axios from 'axios';

import Controls from './components/Controls/Controls';
import CountriesList from './components/CountriesList/CountriesList';
import { Header } from './components/Header/Header';
import Main from './components/Main/Main';
import { useEffect, useState } from 'react';
import { ALL_COUNTRIES } from './config';
import Card from './components/Card/Card';

function App() {
  const [countries, setCountries] = useState([]);
  console.log(countries);

  useEffect(() => {
    axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data));
  }, []);
  return (
    <>
      <Header />
      <Main>
        <Controls />
        <CountriesList>
          {countries.map((country) => {
            const countryInfo = {
              img: country.flags.svg,
              alt: country.flags.alt,
              name: country.name.common,
              info: [
                {
                  title: 'Population',
                  description: country.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: country.region,
                },
                {
                  title: 'Capital',
                  description: country.capital,
                },
              ],
            };
            return <Card key={country.name} {...countryInfo} />;
          })}
        </CountriesList>
      </Main>
    </>
  );
}

export default App;
