import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const UserRepos = (props) => {
  const handle = "https://api.github.com/users/" + props.name + "/repos";
  const [Gitrepo, setGitrepo] = useState();

  useEffect(() => {
    axios.get(handle).then((data) => setGitrepo(data.data));
    // .then((data) => console.log(data.data));
  }, []);

  if (!Gitrepo) return "";

  return (
    <Fragment>
      <Table striped bordered hover responsive size="sm" bg-light>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Created</th>
            <th>Last Updated</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {Gitrepo.map((item, index) => (
            <tr key={item.id}>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.created_at}</td>
              <td>{item.updated_at}</td>
              <td>
                <a href={item.html_url}>Link</a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Fragment>
  );
};

export default UserRepos;