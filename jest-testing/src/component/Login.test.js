import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "./Login";


jest.mock("axios", () => ({
  __esmodules: true,
  default: {
    get: () => ({
      data:{id:1, name:"Leanne"}
    })
  }
}))

test("username input should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Login />);
  const passwordEl = screen.getByPlaceholderText(/password/i);
  expect(passwordEl).toBeInTheDocument();
});

test("button  should be rendered", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeInTheDocument();
});

test("username input should be empty", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl.value).toBe("");
  // checks value for the username to see if its empty,
});

test("password input should be empty", () => {
  render(<Login />);
  const passworInputEl = screen.getByPlaceholderText(/password/i);
  expect(passworInputEl.value).toBe("");
  // checks value for the password to see if its empty,
});

test("button  should be disabled", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).toBeDisabled();
  // checks to see if its disbaled
});

test("error message should be invisible", () => {
  render(<Login />);
  const errorEl = screen.getByTestId("error");
  expect(errorEl).not.toBeVisible();
  // checks to see if its invisible
});

test("username input should change", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(userInputEl, { target: { value: testValue } });
  // this fireevent shows if the value for test value for the userinput field exist
  expect(userInputEl.value).toBe(testValue);
  // checks value for the username to see if its empty,
});

test("password input should change", () => {
  render(<Login />);
  const passworInputEl = screen.getByPlaceholderText(/password/i);
  const testValue = "test";
  fireEvent.change(passworInputEl, { target: { value: testValue } });
  // this fireevent shows if the value for test value for the password field exist

  expect(passworInputEl.value).toBe(testValue);
  // checks value for the password to see if its empty,
});

test("button  should not be disabled when inputs exist", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const passworInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passworInputEl, { target: { value: testValue } });

  expect(buttonEl).not.toBeDisabled();
  // checks to see if its disbaled
});

test("loading should not render", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  expect(buttonEl).not.toHaveTextContent(/please wait/i);
  // checks value for the password to see if its empty,
});

test("loading should render when click", () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const passworInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passworInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);
  expect(buttonEl).not.toHaveTextContent(/please wait/i);
  // checks value for the password to see if its empty,
});


test("loading should not render when fetching data", async () => {
  render(<Login />);
  const buttonEl = screen.getByRole("button");
  const userInputEl = screen.getByPlaceholderText(/username/i);
  const passworInputEl = screen.getByPlaceholderText(/password/i);

  const testValue = "test";

  fireEvent.change(userInputEl, { target: { value: testValue } });
  fireEvent.change(passworInputEl, { target: { value: testValue } });
  fireEvent.click(buttonEl);
  await waitFor(() =>
  expect(buttonEl).not.toHaveTextContent(/please wait/i))
  // checks value for the password to see if its empty,
});
