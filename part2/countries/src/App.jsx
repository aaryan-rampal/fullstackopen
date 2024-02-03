import { useState, useEffect } from 'react'
import service from './services/notes'
import SearchForm from './components/SearchForm'
import Results from './components/Results'
import { getKey } from './components/Results'

//const api_key = import.meta.env.OPEN_WEATHER_KEY

const App = () => {

  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])

  const hook = () => {
    console.log('entered hook')
    service.getAll().then(data => {
      console.log('recieved all countries data for iniital setup')
      setCountries(data)
    })
  }

  useEffect(hook, [])

  const showCountry = (selected) => {
    // const countryToShow = filteredCountries.filter(country => {
    //   console.log('comparing ', getKey(country), ' and ', selected, ': ', getKey(country) === selected)
    //   getKey(country) === selected
    // })
    const countryToShow = filteredCountries.filter(country => getKey(country) === selected)
    // console.log('this is what show does', countryToShow)
    setSearchTerm(countryToShow[0].name.common)
    setFilteredCountries(countryToShow)
	  console.log(process.env.REACT_APP_OPEN_WEATHER_KEY)
  }


  const filterCountries = (props) => {
    // console.log('something should filter now');
    // console.log(props)
    console.log(props.target.value)
    setSearchTerm(props.target.value)
    if (props.target.value == '') {
      setFilteredCountries(countries)
      console.log('resetting countries')
    } else {
      const newFilter = countries.filter(country => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))
      setFilteredCountries(newFilter)
      console.log('filtering countries to ', newFilter.length, ' countries')
    }
  }

  return (
    <div>
      <h1>Hello</h1>
      <SearchForm filteredCountry={searchTerm}
        handleFilter={filterCountries}
      />
      <Results length={countries.length}
        filteredCountries={filteredCountries}
        showCountry={showCountry}
      ></Results>
    </div>
  )
}

export default App
