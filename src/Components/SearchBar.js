import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import Profile from "./Profile";
import UserRepos from "./UserRepos";
import { Form, Button, FloatingLabel } from "react-bootstrap";

function SearchBar() {
  const [name, setName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
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
