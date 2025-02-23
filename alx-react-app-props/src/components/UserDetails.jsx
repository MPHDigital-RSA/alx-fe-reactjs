import UserContext from "./UserContext";
import React, { useContext } from "react";

function UserDetails() {
    const { user } = useContext(UserContext);
    return (
        <div>
            <p>Name: {user}</p>
            <p>Email: {user.email}</p>
        </div>
    );
}

export default UserDetails;