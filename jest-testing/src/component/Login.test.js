import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("username input should be rendered", ()=> {
  render(<Login/>);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument()
})

test("password input should be rendered", ()=> {
  render(<Login/>);
  const passwordEl = screen.getByPlaceholderText(/password/i);
  expect(passwordEl).toBeInTheDocument()
})

test("button  should be rendered", ()=> {
  render(<Login/>);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument()
})


test("username input should be empty", ()=> {
  render(<Login/>);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl.value).toBe("")
    // checks value for the username to see if its empty,

})


test("password input should be empty", ()=> {
  render(<Login/>);
  const passworInputEl = screen.getByPlaceholderText(/password/i);
  expect(passworInputEl.value).toBe("") 
  // checks value for the password to see if its empty,
})


test("button  should be disabled", ()=> {
  render(<Login/>);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled()
  // checks to see if its disbaled
})

test("error message should be invisible", ()=> {
  render(<Login/>);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible()
  // checks to see if its invisible
})

