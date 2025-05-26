
import { Outlet } from 'react-router';
import './App.css';

import Navigation from './components/navigation';

function Layout() {
 
  return (
    <>
<header>
  <h1>My App</h1>
  <Navigation />
</header>

<main>
<Outlet />

</main>

<footer>
  <small>My app 2025</small>
</footer>
    </>
  )
}

export default Layout
