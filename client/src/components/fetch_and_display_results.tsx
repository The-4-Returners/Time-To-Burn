
import {useEffect, useState} from "react"

import {DisplayFoundFoods} from "./display_found_foods"
import {DisplayExercises} from "./display_exercises"

import URL from '../util/url'

   
type FetchAndDisplayResultsProps ={
	text:string
}

// this gets created twice in reacts dev mode strict mode, build mode is not affected ?
//https://www.reddit.com/r/reactjs/comments/ugzopd/why_is_my_fetch_getting_called_twice/
export const FetchAndDisplayResults : React.FC<FetchAndDisplayResultsProps> =({text}) => {

	const [json,setJson] = useState<any>(null)
	const [errorMessage, setErrorMessage] = useState("")
	

	useEffect(() => { 
		const getData = async () => {
			
			let responce
			  
			try{
			
				responce = await fetch(URL+encodeURIComponent(text))
				
				const json = await responce.json()
				
				if(json?.success === false) { // error on server, probably user type in invalid text eg "10kgapple" forgetting space
					//console.log(json)
					setErrorMessage(json?.message)
				}

				setJson(json)

			}catch(error:any) {
				setErrorMessage(error.message)
			}
			
		}
	
		getData()
	},[]) // get infinite api hits without [], would putting url in it work ?
	

	if(errorMessage.length > 0) { //span needed for findByText to work
		return (<> <div className="error"><span>Error:</span>{errorMessage}</div></>)
	}


	if(json === null) {
		return (<>Loading...</>)
	}


	return (
		<>
			<div>
				<br />
				<DisplayFoundFoods json={json} />
			</div>
				
			<div>
				<h2>Total Calories: {json.total_calories}</h2>
			</div>
					
			<div><br />
				<DisplayExercises json={json} />
			</div>
			
		</>
	)
}