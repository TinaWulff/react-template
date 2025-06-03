
import { useAuth } from '../contexts/Authcontext';
import { Navigate, useLocation } from 'react-router'

export default function RequireAuth({ children }) {
    const { token } = useAuth();
    const location = useLocation();

    console.log(location)

    if (!token) {
        // no token, redirect to login
        return <Navigate to="/login" state={{from: location}} replace />
    }

    return children
    // if we have a token, render the children
}


/*
state={{from: location}} betyder:
Når brugeren bliver omdirigeret til login-siden, gemmer vi den nuværende rute i state,
(så man efter login kan omdirigeres tilbage til hvor vi kom fra.)
*/

/* replace betyder:
Hvis en bruger ikke er autentificeret og bliver omdirigeret til /login, vil replace sikre, at /login erstatter den aktuelle rute i historikken.
Brugeren kan ikke gå tilbage til den beskyttede side ved at trykke på "Tilbage".
*/