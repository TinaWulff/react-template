import { useEffect, useState } from "react";
import { Link } from "react-router";

import { useAuth } from "../contexts/Authcontext";

export default function List() {
    const [users, setUsers] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { token } = useAuth();

    //login("abcdefghijk")

    console.log(token)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(result => setUsers(result))
            .finally(() => setIsLoading(false));
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return isLoading ? (<p>Loading...</p>) : (


        <>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        <Link to={`/list/${user.id}`}>{user.name}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

//lav usequery her til fetch i stedet for useEffect