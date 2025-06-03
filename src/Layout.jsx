
import { Outlet } from 'react-router';
import Header from './components/Header';


function Layout() {

  return (
    <>
      <Header />

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
