import React from "react";

function PriceFilter({ minPrice, maxPrice, setMaxPrice, setMinPrice }) {

  return (
    <div>
      <form>
        <fieldset>
          <legend>Price</legend>
          <label htmlFor="min-price">
            Min Price
            <input id="min-price" type="range" min={0.5} max={9} step={0.25} value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
          </label>
          <label htmlFor="max-price">
            Max Price
            <input id="max-price" type="range" min={0.5} max={9} step={0.25} value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
          </label>
        </fieldset>
      </form>
    </div>
  )
}

export default PriceFilter
