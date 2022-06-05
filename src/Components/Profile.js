import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

function Profile() {
  const handle = "https://api.github.com/users/howtoduck";
  const [Gitinfo, setGitinfo] = useState();

  useEffect(() => {
    axios.get(handle).then((data) => setGitinfo(data.data));
    // .then((data) => console.log(data.data));
  }, []);

  if (!Gitinfo) return "";

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Profile;
