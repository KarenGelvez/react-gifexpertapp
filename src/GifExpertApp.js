import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GitExpertApp = () => {
	const [categories, setCategories] = useState(['']);

	/* const handleAdd = () => {
		//setCategories([...categories, 'Dragon Ball']); // 1ra. Forma
		setCategories((cats) => [...categories, 'Dragon Ball']); // 2da. Forma
	}; */

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategories={setCategories} />
			<hr />
			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};

export default GitExpertApp;
