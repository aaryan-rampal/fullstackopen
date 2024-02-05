import countryService from '../services/notes'
import { useState, useEffect } from 'react'

export const getKey = (country) => {
  return `${country.cioc}-${country.name.common}`
}

const Results = ({ length, filteredCountries, showCountry }) => {

  if (length == 0) {
    return (
      <div>
        <p>Please wait, currently fetching information.</p>
      </div>
    )
  }

  if (filteredCountries.length > 10) {
    return (
      <div>
        <p>Too many matches, specify further</p>
      </div>
    )
  }

  if (filteredCountries.length > 1) {
    return (
      <div>
        {filteredCountries.map(country =>
          <p
            key={getKey(country)}>
            {country.name.common}
            <button onClick={() => showCountry(getKey(country))}>show</button>
          </p>)}
      </div>
    )
  }

  if (filteredCountries.length === 1) {
    // console.log(filteredCountries)
    const [temp, setTemp] = useState(null)
    const [image, setImage] = useState(null)
    const [wind, setWind] = useState(null)

    const country = filteredCountries[0]
    const name = country.name.common
    const capitals = country.capital
    const displayString = `capital${capitals.length > 1 ? 's' : ''}: ${capitals.join(', ')}`;
    const languagesArr = Object.entries(country.languages)
    const [lat, lng] = country.capitalInfo.latlng
    countryService.getWeather(lat, lng).then(data => data.main.temp)

    useEffect(() => {
      countryService.getWeather(lat, lng)
        .then(data => {
          // console.log(data)
          const id = data.weather[0].icon

          setTemp(data.main.temp - 273.15)
          setImage(`https://openweathermap.org/img/wn/${id}@2x.png`)
          setWind(data.wind.speed * 3.6)
        })
    }, [lat, lng])

    return (
      <div>
        <div>
          <h1>{name}</h1>
          <p>{displayString}</p>
          <p>area: {country.area}</p>
          <h4>languages:</h4>
          <ul>
            {languagesArr.map(([lang, name]) => <li key={lang}>{name}</li>)}
          </ul>
          <img src={country.flags.png} alt={country.flags.alt}></img>
        </div>
        <div>
          <h2>Weather in {capitals[0]}</h2>
          <p>temperature: {temp == null ? 'Loading...' : temp.toFixed(0)} Celsius</p>
          <img src={image}></img>
          <p>wind: {wind == null ? 'Loading...' : wind.toFixed(0)} km/h</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <p>No matches found</p>
    </div>
  )
}

export default Results