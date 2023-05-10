import React from 'react';

const categories = [
  "all",
  "burger",
  "hot dog",
  "sandwich",
  "fries",
  "topping",
  "drink",
  "extra",
];

function CategoryFilter({ cat, setCat }) {

  return (
    <div>
      <form>
        <fieldset>
          <legend>Category</legend>
          {
            categories.map((category) => (
              <label key={category}>
                {category}
                <input type="radio" name="category" checked={category === cat} value={category} onChange={(e) => { setCat(e.target.value) }} />
              </label>
            ))
          }
        </fieldset>
      </form>
    </div>
  )
};

export default CategoryFilter
