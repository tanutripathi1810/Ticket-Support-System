import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineUser, AiOutlineLogin } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    // Redirect when logged in
    if (isSuccess || user) {
      navigate('/')
    }
    dispatch(reset())
  }, [dispatch, navigate, isError, isSuccess, user, message])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }
    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner/>
  }

  
  // Embedded CSS styles
  const styles = {
    container: {
      
      
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    },
    heading: {
      textAlign: 'center',
      marginBottom: '2rem',
      color: '#fff'
    },
    headingTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px'
    },
    headingSubtitle: {
      fontSize: '1.2rem',
      opacity: '0.9'
    },
    form: {
      background: 'rgba(255, 255, 255, 0.95)',
      padding: '2.5rem',
      borderRadius: '15px',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      width: '100%',
      maxWidth: '400px'
    },
    formGroup: {
      marginBottom: '1.5rem'
    },
    formControl: {
      width: '100%',
      padding: '12px 15px',
      fontSize: '1rem',
      border: '2px solid #e1e5e9',
      borderRadius: '8px',
      outline: 'none',
      transition: 'all 0.3s ease',
      backgroundColor: '#fff',
      boxSizing: 'border-box'
    },
    btn: {
      width: '100%',
      padding: '12px',
      fontSize: '1.1rem',
      fontWeight: '600',
      color: '#fff',
      background: isLoading ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      border: 'none',
      borderRadius: '8px',
      cursor: isLoading ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s ease',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    loginIcon: {
      fontSize: '1.5rem',
      marginRight: '10px'
    },
    spinner: {
      display: 'inline-block',
      width: '20px',
      height: '20px',
      border: '3px solid #ffffff',
      borderRadius: '50%',
      borderTopColor: '#667eea',
      animation: 'spin 1s ease-in-out infinite'
    }
  }

  // Add keyframes for spinner animation
  const keyframes = `
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `

  return (
    <div style={styles.container}>
      <style>{keyframes}</style>
      
      <section style={styles.heading}>
        <h1 style={styles.headingTitle}>
          <span style={styles.loginIcon}>🔐</span> Login
        </h1>
        <p style={styles.headingSubtitle}>Please log in to get support</p>
      </section>

      <section style={styles.form}>
        <form onSubmit={onSubmit}>
          <div style={styles.formGroup}>
            <input
              type='email'
              style={styles.formControl}
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
              onFocus={(e) => {
                e.target.style.borderColor = '#667eea'
                e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e1e5e9'
                e.target.style.boxShadow = 'none'
              }}
            />
          </div>
          <div style={styles.formGroup}>
            <input
              type='password'
              style={styles.formControl}
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter your password'
              required
              onFocus={(e) => {
                e.target.style.borderColor = '#667eea'
                e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#e1e5e9'
                e.target.style.boxShadow = 'none'
              }}
            />
          </div>
          <div style={styles.formGroup}>
            <button 
              type='submit'
              style={styles.btn}
              disabled={isLoading}
              onMouseEnter={(e) => {
                if (!isLoading) {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 10px 20px rgba(102, 126, 234, 0.3)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isLoading) {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = 'none'
                }
              }}
            >
              {isLoading ? (
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <div style={styles.spinner}></div>
                  Loading...
                </span>
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login