import { useState } from 'react';
import './Country.css'
import CountryDetail from '../countryDetail/countryDetail';

const Country = ({country, hanldeVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;
    const [Visited, setVisited] = useState(false);
    const hanldeVisited = () =>{
        setVisited(!Visited);
    }
    const passWithParams = () => hanldeVisitedCountry(country);
    return (
        <div className={`country ${Visited && 'visited'}`}>
            <h3 style={{color: Visited ? 'purple' : 'black'}}>Name: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={passWithParams}>Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <button onClick={hanldeVisited}>Visited</button>
            {Visited && 'I have visited this country'}
            <hr />
            <CountryDetail
            country={country}
            hanldeVisitedCountry={hanldeVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}>

            </CountryDetail>
        </div>
    );
};

export default Country;