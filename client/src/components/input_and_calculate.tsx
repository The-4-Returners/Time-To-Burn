import {useState} from "react"

import {FetchAndDisplayResults} from './fetch_and_display_results'
import {TextInput} from './text_input'
 
const InputAndCalculate = () => {
	
	//const [json, setJson] = useState<any | null >(null)
	
	const [submitted, setSubmitted] = useState<boolean >(false)
	
	const [textInput, setTextInput] = useState<string>("")

	const [countSubmit, setCountSubmit] = useState<number>(0) // needed for key to reset state

	let buttonDisabled = true
	
	function submit() {
	
		setCountSubmit(countSubmit+1)// count submit needed for key so state gets reset
		//setJson(null)// forces reload
		setSubmitted( true)
		
	}


	function handleKeyPress(e:any) {
		if(e.nativeEvent.key === "Enter"){ // pressed enter
			if(textEntryValid() === false){ // and more than 2 characters in textbox
				submit()
			}
		}
	}

	function textEntryValid() {

		if(textInput.length > 2) buttonDisabled = false

		return buttonDisabled
	}
	
	textEntryValid()

	
	return (
		<>
			Learn how much exercise is needed to burn those calories<br/>
			Usage:100g carrots  2 apples
			<div><TextInput value={textInput} onChangeText={ setTextInput } onKeyPress={handleKeyPress} /> </div>
			<div><button disabled={buttonDisabled} onClick={submit}>Calculate</button> </div>
			{
				submitted === true ? <FetchAndDisplayResults key={countSubmit} text={textInput} /> : ""  
			}	
		</>
	)

}

export default InputAndCalculate

