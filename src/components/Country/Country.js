import React from 'react';

const Country = (props) => {    
    const {name, capital, subregion, flag} = props.country;
    const flagStyle = {width: '10%'};
    const countryStyle = {border: '1px solid red', margin: '10px', padding: '10px'};
    const handleAddCountry = props.handleAddCountry
    // console.log(props.handleAddCountry);
    return (
        <div style={countryStyle}>
            <h1>{name}</h1>
            <img style={flagStyle} src={flag} alt=""/>
            <h3>{capital}</h3>
            <h5>{subregion}</h5>            
            <button onClick={() => handleAddCountry(props.country)}>button</button>
        </div>
    );
};

export default Country;