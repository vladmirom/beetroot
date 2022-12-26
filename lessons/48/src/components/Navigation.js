import { Link } from 'react-router-dom';

const routes = [
  {
    to: '/',
    title: 'Home'
  },
  {
    to: '/about',
    title: 'About'
  },
  {
    to: '/blog',
    title: 'Blog'
  }
]

function Navigation() {
  return (
    <nav>
      <ul>
        {routes.map(( route, index ) => <li key={index}>
          <Link to={route.to}>
            {route.title}
          </Link>
        </li>)}
      </ul>
    </nav>
  );
}

export default Navigation;