import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = ({ name, username, website, link }) => {

    const firstChar = (str, no_of_char) => {
        return str.split("").splice(0, no_of_char).join("");
    }

    return (
        <div className="profile-card">
            <div className="profile-card-header">
                <p className="profile-logo">{firstChar(name, 1)}</p>
            </div>
            <div className="profile-card-body">
                <h3>{name}</h3>
                <p>{`@${username.toLowerCase()}`}</p>
                <a className="website" href={`http://${website}`}>{`http://${website}`}</a>
                <Link className="button" to={`/${link}`}>More Details</Link>
            </div>
        </div>
    );
};

export default UserCard;