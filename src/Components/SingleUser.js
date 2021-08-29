import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const SingleUser = () => {

    const [user, setUser] = useState();
    let { id } = useParams();
    let history = useHistory();

    useEffect(() => {

        if (!user) {
            axios.get("https://jsonplaceholder.typicode.com/users/" + id)
                .then(res => setUser(res.data));
        }
    });

    let userData = undefined;

    if (!user) {
        userData = <h3>Loading...</h3>
    };

    let children = null;

    if (user) {
        let keys = Object.keys(user.address);

        delete user.address[keys[keys.length - 1]];

        children = (
            <div className="nested-address">
                {Object.keys(user.address).map((key, ind) => {
                    let addressKey = Object.keys(user.address);
                    return (<li key={addressKey[ind]}>{addressKey[ind]} : {user.address[key]}</li>)
                }
                )}
            </div>
        )
    }

    if (user) {
        userData = (
            <div>
                <ul className="user-info">
                    <li>{`name: ${user.name}`}</li>
                    <li>{`username: ${user.username}`}</li>
                    <li>{`email: ${user.email}`}</li>
                    <li>{`phone: ${user.phone}`}</li>
                    <li>{`company: ${user.company.name}`}</li>
                    <li>{`website: ${user.website}`}</li>
                    <li>address:</li>
                </ul>
            </div>

        )
    }

    return (
        <div className="user-details">
            {userData}
            {children}
            {<button className="button" onClick={() => history.push('/')} >Back To All Users</button>}
        </div>
    );
};

export default SingleUser;