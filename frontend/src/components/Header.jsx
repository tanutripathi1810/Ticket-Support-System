import { AiOutlineLogin, AiOutlineUser, AiOutlineLogout } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import '../styles/Header.css' 
function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }
  
  return (
    <header className='modern-header'>
      <div className='header-container'>
        <div className='logo'>
          <Link to='/' className='logo-link'>
            <div className='logo-icon'>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            Support Hub
          </Link>
        </div>
        
        <nav className='nav-menu'>
          {user ? (
            <div className='nav-item'>
              <button className='logout-btn' onClick={onLogout}>
                <AiOutlineLogout />
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className='auth-links'>
              <Link to='/login' className='nav-link login-link'>
                <AiOutlineLogin />
                <span>Login</span>
              </Link>
              <Link to='/register' className='nav-link register-link'>
                <AiOutlineUser />
                <span>Register</span>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header