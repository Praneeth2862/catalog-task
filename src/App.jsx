import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
	const [products, setProducts] = useState([])
	async function getData() {
		try {
			const response = await fetch(
				'https://mindler-dashboard.s3.us-east-2.amazonaws.com/products.json'
			)
			const data = await response.json()
			setProducts(data.products)
		} catch (err) {
			console.error('errro', err)
		}
	}

	useEffect(() => {
		getData()
	}, [])
	return (
		<>
			<table border="2">
				<tr>
					<th>subcategory</th>
					<th>title</th>
					<th>price</th>
					<th>popularity</th>
				</tr>
				{Object.keys(products).map((key) => (
					<tr>
						{Object.keys(products[key]).map((k) => (
							<td>{products[key][k]}</td>
						))}
					</tr>
				))}
			</table>
		</>
	)
}

export default App
