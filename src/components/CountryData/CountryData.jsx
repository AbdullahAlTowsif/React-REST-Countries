const CountryData = ({country, hanldeVisitedCountry, handleVisitedFlags}) => {
    console.log(hanldeVisitedCountry);
    console.log(handleVisitedFlags);
    return (
        <div>
            <p><small>Country Data: {country.name.common}</small></p>
        </div>
    );
};

export default CountryData;