const SearchForm = ({ filteredCountry, handleFilter }) => {
  return (
    <form>
      <div>
        find countries<input
          value={filteredCountry}
          onChange={handleFilter} />
      </div>
    </form>
  )
}

export default SearchForm