import { Link } from 'react-router-dom'

export default function Nav(props) {
    return (
    <div className="navbar">
      <Link to="/">
        <div>Home </div>
      </Link>
      <Link to="/contact">
        <div>Contact Us</div>
      </Link>
      <Link to="/give">
        <div>Give</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/videos">
        <div>Videos</div>
      </Link>
      
      <Link to="/pastor">
        <div>Our Pastor</div>
      </Link> 
    </div>

    )
  }
  
 