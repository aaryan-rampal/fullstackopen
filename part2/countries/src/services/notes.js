import axios from "axios";

const open_weather_key = import.meta.env.VITE_OPEN_WEATHER_KEY
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/'
const localUrl = 'http://localhost:3001/'

const getAll = () => {
	const newUrl = baseUrl + 'api/all'
	console.log('curling from ', newUrl);
	const request = axios.get(newUrl)
	return request.then(response => response.data)
}

const getWeather = (lat, lng) => {
	const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${open_weather_key}`
	// console.log(weatherUrl)
	const request = axios.get(weatherUrl)
	return request.then(response => response.data)
}

const getAllLocal = () => {
	const newUrl = localUrl + 'countries'
	console.log('curling from ', newUrl);
	const request = axios.get(localUrl, 'countries')
	return request.then(response => response.data)
}

const create = (newCountry) => {
	const request = axios.post(baseUrl, newPerson)
	return request.then(response => response.data)
}

const update = (id, newPerson) => {
	const request = axios.put(`${baseUrl}/${id}`, newPerson)
	return request.then(response => response.data)
}

const del = (id) => {
	const request = axios.delete(`${baseUrl}/${id}`)
	return request.then(response => response.data)
}

export default {
	getAll,
	getAllLocal,
	update,
	create,
	del,
	getWeather
}