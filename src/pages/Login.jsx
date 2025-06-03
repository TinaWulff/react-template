import { Form, useLocation, useNavigate } from "react-router";
import { useAuth } from "../contexts/Authcontext"
import { useState } from "react";


export default function Login() {
const [error, setError] = useState(null);
const {login } = useAuth();
const location = useLocation();
const navigate = useNavigate();

const from = location.state?.from?.pathname || "/";
//console.log(location.state)
console.log(from)

async function handleLogin(event) {
    event.preventDefault()
    //console.log(event.target.password.value)
    const formData = new FormData(event.target)
   const data = Object.fromEntries(formData)

   console.log(data)

//validering her

   const response = await fetch('https://dummyjson.com/auth/login', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
   })

   const userdata = await response.json()

   console.log(userdata)
    
    if (!response.ok) {
      setError(userdata.message || userdata.error || "Login failed, use valid credentials");
   
    } else {
        login(userdata.accessToken)
        navigate(from, {replace: true}) //replace: true for at undgå at brugeren kan gå tilbage til login siden
    }



   console.log(userdata)

}

    return (
        
        <Form onSubmit={handleLogin}>
            <h2>Log in to your account</h2>

        <div className="formgroup"> 
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username"/>
        </div>

        <div className="formgroup"> 
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"/>
        </div>
        {error && (<div>{error}</div>)}
        <button type="submit">Log in</button>
        </Form>
    )
}