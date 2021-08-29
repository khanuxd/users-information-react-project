import React from 'react';
import UserCard from './UserCard';

const AllUsers = ({ users }) => {

    return (
        <div className="users">
            {users.map((user) => (
                <UserCard
                    key={user.id}
                    name={user.name}
                    username={user.username}
                    website={user.website}
                    link={user.id}
                />
            ))}

        </div>
    );
};

export default AllUsers;