import { useLocation } from 'react-router';

import Navigation from '../components/navigation'; //hvorfor to .. denne fil ligger i samme mappe, men bruges i layout...
import LogoutButton from '../components/LogoutButton';//hvorfor to .. denne fil ligger i samme mappe, men bruges i layout...

export default function Header() {
 const location = useLocation();

    return (
        <header>
            <h1>My App</h1>
            { location.pathname !== "/login" && (
                <>
                <Navigation />
                <LogoutButton />
                </>
            )}
            
        </header>
    )
}

//Vi siger at hvis pathname ikke er login, så vis headeren, ellers returner null (vis ikke headeren).