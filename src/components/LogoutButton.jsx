import { useAuth } from '../contexts/Authcontext';
import { useNavigate, Link } from 'react-router';

export default function LogoutButton() {

    const { logout, token } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate('/'); // Redirect to home page after logout
    }

    /* kunne også være functionexpression
    const handleLogout = () => {
    ....    */
    return token ? (
        <button onClick={handleLogout}>Log out</button>
    ) : <Link to="/login">Login</Link>
}
