import { Link, NavLink } from 'react-router';

export default function Home() {
    return (
        <>
            <h1>Home</h1>

            <nav className='navigation'>
                <ul>
                    <li>
                        <NavLink to="/about" activeClassName="active">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="active">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}