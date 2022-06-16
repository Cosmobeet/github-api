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
        <div class="content-container">
          <Profile name={githandle} />
          <UserRepos name={githandle} />
        </div>
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
      <Form.Group>
        <Form.Label size="sm" className="pt-2 pb-2 font-weight-bold">
          Enter Github Username
        </Form.Label>
        <FloatingLabel className="pb-2" label="Username">
          <Form.Control
            className="mb-2"
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
