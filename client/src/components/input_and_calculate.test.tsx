import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom";

import InputAndCalculate from "./input_and_calculate";


describe("<InputAndCalculate>",  () => {
	
  test("Is button  ?",  () => {
     render(<InputAndCalculate />);

     expect( screen.getByText("Calculate")).toBeInTheDocument()
  });
  

  test("Is submit button disabled at start ?",  () => {
    render(<InputAndCalculate />);

    expect( screen.getByRole("button")).toHaveAttribute('disabled')
 });

})