import React from 'react'

function SearchByName({ searchValue, setSearchValue }) {

  return (
    <div>
      <form>
        <label>
          <input type="search" name="category" placeholder="Search by name" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        </label>
      </form>
    </div>
  )
};

export default SearchByName;
