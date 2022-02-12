import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const url = 'https://restcountries.com/v3.1/all';


const Countries = () => {
    const [searchText, setSearchText] = useState('');
    const [countries, setCountries] = useState([])

    const fetchCountryData = async() => {
        const response = await fetch(url)
        const countries = await response.json()
        setCountries(countries)
    }

    useEffect(() => {
        if (searchText === '') return;
        setCountries(() =>
          countries.filter((country) =>
            country.name.toLowerCase().match(searchText.toLowerCase())
          )
        );
      }, [searchText, countries]);
      const handleChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
        if (!e.target.value.length > 0) {
          setCountries(countries);
        }
      }

    useEffect(() => {
       fetchCountryData()
    }, [])

    return (
        <>
            <section className="filter">
            <form className="form-control">
              <input
                type="text"
                value={searchText}
                onChange={handleChange}
                placeholder="Search for a country"
              />
            </form>  
            </section>
            <section className="grid">
                {countries.map((country) => {
                    const {  name, population, region, capital, flag } = country
                    return(
                        <article key={name}>
                            <div>
                                <img src={flag} alt={name}></img>
                                <div className="details">
                                    <h3 className="country-name">{name}</h3>
                                    <h4>Population: <span>{population}</span></h4>
                                    <h4>Region: <span>{region}</span></h4>
                                    <h4>Capital: <span>{capital}</span></h4>
                                    <div className="buttons">
                                    <Link to={`/countries/${name}`} className="btn">Learn more</Link>
                                    </div>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </section>
        </>
    )
}

export default Countries
