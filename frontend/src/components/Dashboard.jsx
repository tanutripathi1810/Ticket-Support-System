import { AiOutlineQuestionCircle, AiFillTags, AiOutlineUser, AiOutlineClockCircle, AiOutlineCheckCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import '../styles/Dashboard.css' // Adjust the path as needed
function Dashboard() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
  }

  return (
    <div className="dashboard-container">
      <section className='dashboard-heading'>
        <div className="welcome-section">
          <h1>What do you need help with?</h1>
          <p>Choose an option below to get started with your support request</p>
          {user && (
            <div className="user-welcome">
              <div className="user-avatar">
                <AiOutlineUser />
              </div>
              <div className="user-details">
                <span className="welcome-text">Welcome back,</span>
                <span className="user-name">{user.name || user.email}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      <div className="dashboard-actions">
        <div className="action-grid">
          <Link to='/new-ticket' className='action-card primary-card'>
            <div className="card-icon">
              <AiOutlineQuestionCircle />
            </div>
            <div className="card-content">
              <h3>Create New Ticket</h3>
              <p>Submit a new support request and get help from our team</p>
            </div>
            <div className="card-arrow">→</div>
          </Link>

          <Link to='/tickets' className='action-card secondary-card'>
            <div className="card-icon">
              <AiFillTags />
            </div>
            <div className="card-content">
              <h3>View My Tickets</h3>
              <p>Check the status of your existing support requests</p>
            </div>
            <div className="card-arrow">→</div>
          </Link>
        </div>

       
      </div>
    </div>
  )
}

export default Dashboard