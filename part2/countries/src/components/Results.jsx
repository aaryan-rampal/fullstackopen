import ShowButton from "./ShowButton"

export const getKey = (country) => {
  return `${country.cioc}-${country.name.common}`
}

// const Results = ({ length, filteredCountries }) => {
const Results = ({ length, filteredCountries, showCountry }) => {

  // const showCountry = (id) => {
  //   const countryToShow = filteredCountries.find(country => getKey(country) === id)
  //   console.log(countryToShow)
  // }


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
          <p //key={`${country.cioc}-${country.name.common}`}>
            key={getKey(country)}>
            {country.name.common}
            {/* <ShowButton onAction={() => showCountry(getKey(country))} /> */}
            <button onClick={() => showCountry(getKey(country))}>show</button>
          </p>)}
      </div>
    )
  }

  if (filteredCountries.length == 1) {
    // console.log(filteredCountries)
    const country = filteredCountries[0]
    const name = country.name.common
    const capitals = country.capital
    const displayString = `capital${capitals.length > 1 ? 's' : ''}: ${capitals.join(', ')}`;
    // console.log(country.languages)
    // console.log(typeof country.languages)
    const languagesArr = Object.entries(country.languages)
    // console.log(languagesArr)
    // console.log(country.car)

    return (
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
    )
  }

  return (
    <div>
      <p>No matches found</p>
    </div>
  )
}

export default Results