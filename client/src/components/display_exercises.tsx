
export const DisplayExercises: React.FC<any> = ({json}) => {

	return(
		<table className="resultsTable">
			<thead>
				<tr>
					<th>Exercise</th><th>Calories Burned Per Hour</th><th>Hours To Burn Total Cals</th>
				</tr>
			</thead>
			<tbody>
				{
					json.exercises.map((e:any,i:number) => {
							return <tr key={i}><td>{e.name}</td><td>{e.calsPerHour}</td><td>{e.time_to_burn_total_cals.hours}</td></tr>
						
					})
				}
			</tbody>
		</table>
	)
	
}
