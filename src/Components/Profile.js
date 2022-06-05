import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, ListGroup } from "react-bootstrap";

const Profile = (props) => {
  //Using prop from SearchBar to store username information
  const handle = "https://api.github.com/users/" + props.name;

  //Initializing useState for API call
  const [Gitinfo, setGitinfo] = useState();

  //Retrieve API infromation
  useEffect(() => {
    axios.get(handle).then((data) => setGitinfo(data.data));
    // .then((data) => console.log(data.data));
  }, []);

  //Button to open user's listed website page
  const myWebsite = () => {
    window.open(`${Gitinfo.blog}`);
  };

  //Button to open user's github page
  const myGithub = () => {
    window.open(`${Gitinfo.html_url}`);
  };

  //Returns nothing/empty if there is no information yet
  if (!Gitinfo) return "";

  return (
    <div className="profile justify-content-center align-items-center d-flex bg-light">
      <Card className="bg-light" style={{ width: "18rem" }}>
        <Card.Header>Github User</Card.Header>
        <Card.Img variant="top" src={Gitinfo.avatar_url} />
        <Card.Body>
          <Card.Title class="card text-center bg-light p-2">
            {Gitinfo.login}
          </Card.Title>
          <Card.Text>
            <ListGroup variant="flush">
              <ListGroup.Item className="bg-light">
                {Gitinfo.name}
              </ListGroup.Item>
              <ListGroup.Item className="bg-light">
                {Gitinfo.location}
              </ListGroup.Item>
            </ListGroup>
            {Gitinfo.bio}
          </Card.Text>
          <Button size="sm" onClick={myWebsite}>
            Website
          </Button>
          <Button size="sm" onClick={myGithub}>
            Github
          </Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          Public Repositories: {Gitinfo.public_repos}
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Profile;
