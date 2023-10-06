
export const ShowFoundFoods : React.FC<any> = ({json}) => {

	return(
		<table className="resultsTable">
					<thead>
						<tr>
							<th>Name</th><th>Calories</th><th>Weight</th><th>Fat</th><th>Protein</th>
							<th>Potassium</th><th>Cholesterol</th><th>Carbohyrates</th>
						</tr>
					</thead>
					<tbody>
					{
						json.items.map((f:any,i:number) => {
							return <tr key={i}><td>{f.name}</td><td>{f.calories}</td><td>{f.serving_size_g}g</td><td>{f.protein_g}g</td>
								<td>{f.sodium_mg}mg</td><td>{f.potassium_mg}mg</td><td>{f.cholesterol_mg}mg</td><td>{f.carbohydrates_total_g}g</td></tr>	
						})
					}
					</tbody>
				</table>
				
				
	)
}