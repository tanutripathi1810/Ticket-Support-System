import { useState, useEffect } from 'react'
import { BackButton } from '../components/BackButton'
import { useSelector, dispatch, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createTicket, reset } from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'

function NewTicket() {
  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  )

  const [name] = useState(user.name)
  const [email] = useState(user.email)
  const [product, setProduct] = useState('iPhone')
  const [description, setDescription] = useState(user.description)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess) {
      dispatch(reset())
      navigate('/tickets')
    }
    dispatch(reset())
  }, [dispatch, isError, isSuccess, navigate, message])

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createTicket({ product, description }))
  }

  if (isLoading) {
    return <Spinner />
  }
  const styles = {
    container: {
      minHeight: '100vh',
      padding: '24px',
      
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    
    
    mainContent: {
      maxWidth: '512px',
      margin: '0 auto'
    },
    titleSection: {
      textAlign: 'center',
      marginBottom: '32px'
    },
    mainTitle: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: 'white',
      margin: '0 0 8px 0'
    },
    subtitle: {
      fontSize: '18px',
      color: 'white',
      opacity: '0.8',
      margin: 0
    },
    formContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)'
    },
    formGroup: {
      marginBottom: '24px'
    },
    label: {
      display: 'block',
      color: 'white',
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '8px'
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '8px',
      color: 'white',
      fontSize: '16px',
      outline: 'none',
      transition: 'all 0.2s ease',
      boxSizing: 'border-box'
    },
    select: {
      width: '100%',
      padding: '12px 16px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '8px',
      color: 'white',
      fontSize: '16px',
      outline: 'none',
      transition: 'all 0.2s ease',
      cursor: 'pointer',
      boxSizing: 'border-box',
      appearance: 'none',
      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
      backgroundPosition: 'right 12px center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '16px 16px'
    },
    textarea: {
      width: '100%',
      padding: '12px 16px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '8px',
      color: 'white',
      fontSize: '16px',
      outline: 'none',
      transition: 'all 0.2s ease',
      resize: 'vertical',
      minHeight: '100px',
      boxSizing: 'border-box',
      fontFamily: 'inherit'
    },
    submitButton: {
      width: '100%',
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '8px',
      fontWeight: '600',
      fontSize: '16px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      marginTop: '16px'
    },
    option: {
      backgroundColor: 'white',
      color: '#1f2937'
    }
  }

  const handleInputFocus = (e) => {
    e.target.style.borderColor = 'rgba(255, 255, 255, 0.5)'
    e.target.style.boxShadow = '0 0 0 2px rgba(255, 255, 255, 0.2)'
  }

  const handleInputBlur = (e) => {
    e.target.style.borderColor = 'rgba(255, 255, 255, 0.3)'
    e.target.style.boxShadow = 'none'
  }

  const handleButtonHover = (e) => {
    e.target.style.backgroundColor = '#1d4ed8'
    e.target.style.transform = 'translateY(-1px)'
  }

  const handleButtonLeave = (e) => {
    e.target.style.backgroundColor = '#2563eb'
    e.target.style.transform = 'translateY(0)'
  }

 

  return (
    <div style={styles.container}>
      <BackButton/>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.titleSection}>
          <h2 style={styles.mainTitle}>create new ticket</h2>
          <p style={styles.subtitle}>please fill out the form below</p>
        </div>

        {/* Form Container */}
        <div style={styles.formContainer}>
          {/* Customer Name */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Customer Name</label>
            <input
              type="text"
              value={name} disabled
              
              style={styles.input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Enter your name"
            />
          </div>

          {/* Customer Email */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Customer Email</label>
            <input
              type="email"
              value={email} disabled
             
              style={styles.input}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Enter your email"
            />
          </div>

          {/* Product */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Product</label>
            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              style={styles.select}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            >
              <option value="iPhone" style={styles.option}>iPhone</option>
              <option value="iPad" style={styles.option}>iPad</option>
              <option value="Macbook Pro" style={styles.option}>Macbook Pro</option>
              <option value="iMac" style={styles.option}>iMac</option>
              <option value="AirTag" style={styles.option}>AirTag</option>
            </select>
          </div>

          {/* Description */}
          <div style={styles.formGroup}>
            <label style={styles.label}>Description of Issue</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.textarea}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder="Please describe your issue in detail..."
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={onSubmit}
            style={styles.submitButton}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewTicket