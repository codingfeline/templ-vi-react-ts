import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex flex-col items-center gap-1">
          <li className="flex gap-1">
            <Link to="/">home</Link>
            <Link to="/user">User</Link>
            <Link to="/ref">Dom Ref</Link>
            <Link to="/mutref">MutableRef</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
