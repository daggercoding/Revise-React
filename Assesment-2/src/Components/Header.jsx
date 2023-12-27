import {Link} from "react-router-dom"
import { TiShoppingCart } from "react-icons/ti";


const Header = ({count,login,setLogin,setCount}) => {
  
  function logoutHandler()
  {
    setLogin(true)
    localStorage.removeItem("token")
    setCount(0) 
  }

  return (
   
  
    <div className='head'>
          
          <h1 className='shooping '>Shopping cart</h1>
          
          <div>
           
          <span className='headerBad'>{count}</span>
           <TiShoppingCart className='headerIcon' />
        
          
          {login?<Link className='Headerbtn btn btn-outline-info' to="/create">Log in</Link>:
          <Link onClick={logoutHandler} className='Headerbtn btn btn-outline-info' to="/">LogOut</Link>}

          </div>
    </div>
    

 

  )
}

export default Header
