import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Profile from "./Profile";
import UserRepos from "./UserRepos";
import { Form, Button, FloatingLabel } from "react-bootstrap";

function SearchBar() {
  //Initializing useState
  const [name, setName] = useState("");

  //Saves the name variable as githandle and sends the prop to Profile and UserRepo components
  const handleSubmit = (event) => {
    event.preventDefault();
    //alert(`The username entered was: ${name}`);
    const githandle = `${name}`;
    const element = (
      <>
        <SearchBar />
        <Profile name={githandle} />
        <UserRepos name={githandle} />
      </>
    );
    ReactDOM.render(element, document.getElementById("root"));
  };

  //Reload page
  function refreshPage() {
    window.location.reload();
  }

  return (
    <Form onSubmit={handleSubmit} className="bg-light">
      <Form.Group className="mb-3">
        <Form.Label size="sm">Enter Github Username</Form.Label>
        <FloatingLabel label="Username" className="mb-3">
          <Form.Control
            aria-label="Username"
            aria-describedby="basic-addon1"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Username"
            size="md"
          />
          <Button size="sm" variant="primary" type="submit">
            Submit
          </Button>
          <Button size="sm" variant="primary" onClick={refreshPage}>
            Reset
          </Button>
        </FloatingLabel>
      </Form.Group>
    </Form>
  );
}

ReactDOM.render(
  <>
    <SearchBar />
  </>,
  document.getElementById("root")
);

export default SearchBar;
