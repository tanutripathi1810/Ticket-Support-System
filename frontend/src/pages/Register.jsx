import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from 'react-redux'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  })

  const { name, email, password, password2 } = formData

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
    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
      }
      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }
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
  return (
    <>
      
      
      <section className='heading'>
        <h1 className='headingTitle' style={styles.headingTitle}>
           Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='formGroup' style={styles.formGroup}>
            <input
              type='text'
              className='formControl' style={styles.formControl}
              id='name'
              name='name'
              value={name}
              onChange={onChange}
              placeholder='Enter your name'
              required
            />
          </div>
          <div className='formGroup' style={styles.formGroup}>
            <input
              type='email'
              className='formControl' style={styles.formControl}
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='formGroup' style={styles.formGroup}>
            <input
              type='password'
              className='formControl'
              style={styles.formControl}
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter your password'
              required
            />
          </div>
          <div className='formGroup' style={styles.formGroup}> 
          
            <input
              type='password'
              className='formControl'
              style={styles.formControl}
              id='password2'
              name='password2'
              value={password2}
              onChange={onChange}
              placeholder='Re-type above password'
              required
            />
          </div>
          <div className='formGroup' style={styles.formGroup}>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register