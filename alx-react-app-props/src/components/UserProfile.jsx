import UserContext from "./UserContext";
import React, { useContext } from "react";

function UserProfile() {
    const { user } = useContext(UserContext);
    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default UserProfile;