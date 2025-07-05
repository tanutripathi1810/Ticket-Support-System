
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineQuestionCircle, AiFillTags } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { logout, reset } from '../features/auth/authSlice' // Adjust path as needed
import { toast } from 'react-toastify'
import Intro from '../components/Intro.jsx' // Adjust path as needed
import Dashboard from '../components/Dashboard.jsx'

function Home() {
  const [showIntro, setShowIntro] = useState(true)
  const dispatch = useDispatch()
  
  // Get user from Redux store
  const { user } = useSelector((state) => state.auth)

  // Check authentication status and show/hide intro accordingly
  useEffect(() => {
    if (user) {
      setShowIntro(false)
    } else {
      // Show intro when user is not authenticated (including after logout)
      setShowIntro(true)
    }
  }, [user])

  // Handle logout
  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    toast.success('Logged out successfully')
  }

  // If user is not authenticated, show intro
  if (!user && showIntro) {
    return <Intro />
  }

  // If user is authenticated or intro is skipped, show dashboard
  return (<Dashboard/>)
}

export default Home