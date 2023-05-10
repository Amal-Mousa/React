import { useState } from "react";
import dishes from "./data";
import DishList from "./components/DishList";
import PriceFilter from "./components/PriceFilter";
import CategoryFilter from "./components/CategoryFilter";
import SearchByName from "./components/SearchByName";

function App() {
	const [minPrice, setMinPrice] = useState(0.5);
	const [maxPrice, setMaxPrice] = useState(9);
	const [cat, setCat] = useState("all");
	const [searchValue, setSearchValue] = useState('');

	const filteredDishes = dishes
		.filter(dish => dish.price >= minPrice && dish.price <= maxPrice)
		.filter(dish => dish.category === cat || cat === 'all')
	.filter(dish =>dish.name.toLowerCase().includes(searchValue.toLowerCase()));

	return (
		<main>
			<section className="filters">
				<h1>Burger Place</h1>
				<SearchByName searchValue={searchValue} setSearchValue={setSearchValue} />
				<h2>Filters</h2>
				<PriceFilter minPrice={minPrice} setMinPrice={setMinPrice} maxPrice={maxPrice} setMaxPrice={setMaxPrice} />
				<CategoryFilter cat={cat} setCat={setCat} />
			</section>
			<section className="dishes">
				<h2>Dishes</h2>
				<ul className="grid">
					{filteredDishes.map(dish => (
						<DishList key={dish.id} name={dish.name} description={dish.description} price={dish.price} />
					))}
				</ul>
			</section>
		</main>
	);
};

export default App;