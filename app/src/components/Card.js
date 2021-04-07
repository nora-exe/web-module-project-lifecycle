import React from 'react';

class Card extends React.Component {
    componentDidMount() {
        console.log("Card: Component Has Mounted");
    }    
    componentDidUpdate() {
        console.log("Card: Component Has Updated");
    }

    render() {
        console.log("Card: Component Renders DOM");
        return (
            <div>
                <div className="intro">
                    <img src={this.props.user.avatar_url}></img>
                    <div className="basic-info">
                        <h2>{this.props.user.name}</h2>
                        <a href={this.props.user.html_url}>@{this.props.user.login}</a>
                    </div>
                </div>
                <div className="stats-container">
                    <p>{this.props.user.bio}</p>
                    <div className="stats">
                        <p><span>{this.props.user.followers}</span> Followers</p>
                        <p><span>{this.props.user.public_repos}</span> Repos</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default Card;

/**
  avatar_url
  name
  @ login
  html_url
  bio
  followers
  public_repos
*/