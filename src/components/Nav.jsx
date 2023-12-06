import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (
    <div className="navbar">
      <Link to="/">
        <div>Home </div>
      </Link>
      <Link to="/weatherdata">
        <div>Weather Data</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
    </div>

    )
  }
  
 