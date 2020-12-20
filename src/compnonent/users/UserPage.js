import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";

class UserPage extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      avatar_url,
      name,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
      company,
    } = this.props.user;
    const { loading } = this.props.loading;
    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back To Search
        </Link>
        Hireable:{""}
        {hireable ? (
          <i className="fa fa-check text-success" />
        ) : (
          <i className="fa fa-times  text-danger " />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt="avatar_url"
              style={{ width: "150px" }}
            />
            <h1>{name !== null ? name : "github user has no name"}</h1>
            <p>Location:{location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Biography</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Visit Github Profile{" "}
              <i
                className="fab fa-github"
                style={{
                  fontSize: "1.1rem",
                }}
              />
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>username:</strong>
                    {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company:</strong>
                    {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>website:</strong>
                    {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers:{followers}</div>
          <div className="badge badge-success">Following:{following}</div>
          <div className="badge badge-danger">Public Repos:{public_repos}</div>
          <div className="badge badge-dark">Public Gists:{public_gists}</div>
        </div>
      </Fragment>
    );
  }
}

export default UserPage;
