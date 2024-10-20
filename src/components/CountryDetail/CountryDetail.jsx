import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
    // const {country, hanldeVisitedCountry, handleVisitedFlags} = props;
    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountryData
            country = {country}
            hanldeVisitedCountry = {hanldeVisitedCountry}
            handleVisitedFlags = {handleVisitedFlags}>

            </CountryData> */}
            <CountryData {...props} ></CountryData>
        </div>
    );
};

export default CountryDetail;