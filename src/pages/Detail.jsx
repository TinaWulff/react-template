import { useEffect, useState } from "react";
import { useParams } from "react-router";



export default function Detail() {

    const { id } = useParams();
    console.log(id);

    const [user, setUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect (() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(result => setUser(result))
            .finally(() => setIsLoading(false));
    }, []);

    return isLoading ? (<p>Loading...</p>) : (
        <>
          <h2>User Details</h2>
          <h1>{user.name}</h1>

        </>
    );
}