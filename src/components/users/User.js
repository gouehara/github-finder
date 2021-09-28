import React, { Component, Fragment } from "react";
import { Spinner, faCheck, faTimesCirlce } from "../layout/Spinner";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Repos from "../repos/Repos";

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
  };
  render() {
    const {
      name,
      avatar_url,
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
    const { loading, repos } = this.props;
    if (loading) return <Spinner />;
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          検索ページ
        </Link>
        求職中: {""}
        {hireable ? (
          <FontAwesomeIcon icon="check" className="text-success" />
        ) : (
          <FontAwesomeIcon icon="times-circle" className="text-danger" />
        )}
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              className="round-img"
              alt=""
              style={{ width: "150px" }}
            />
            <h1>{name}</h1>
            <p>地域: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>プロフィール</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className="btn btn-dark my-1">
              Githubプロフィール
            </a>
            <ul>
              <li>
                {login && (
                  <Fragment>
                    <strong>名前:</strong>
                    {login}
                  </Fragment>
                )}
              </li>
              <li>
                {company && (
                  <Fragment>
                    <strong>会社名:</strong>
                    {company}
                  </Fragment>
                )}
              </li>
              <li>
                {blog && (
                  <Fragment>
                    <strong>ウェブサイト:</strong>
                    {blog}
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">フォロワーズ: {followers}</div>
          <div className="badge badge-success">フォロイング: {following}</div>
          <div className="badge badge-light">
            パブリックリポ: {public_repos}
          </div>
          <div className="badge badge-dark">
            パブリックギスト: {public_gists}
          </div>
        </div>
        <Repos repos={repos} />
      </Fragment>
    );
  }
}

export default User;
