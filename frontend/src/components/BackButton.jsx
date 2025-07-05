import { useState } from 'react'

export const BackButton = ({ url, onClick, className = '', children = 'Back' }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)

  const handleClick = (e) => {
    if (onClick) {
      onClick(e)
    } else if (url) {
      // If url is provided, navigate to it
      window.history.pushState(null, '', url)
      window.dispatchEvent(new PopStateEvent('popstate'))
    } else {
      // If no url provided, go back in history
      window.history.back()
    }
  }

  const styles = {
    button: {
      marginRight:'40rem',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '10px 16px',
      backgroundColor: 'transparent',
      color: 'white',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '500',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.15s ease-in-out',
      boxShadow: 'none',
      transform: isPressed ? 'translateY(1px)' : isHovered ? 'translateY(-1px)' : 'translateY(0)',
      position: 'relative',
      overflow: 'hidden'
    },
    icon: {
      fontSize: '16px',
      transition: 'transform 0.2s ease',
      transform: isHovered ? 'translateX(-2px)' : 'translateX(0)'
    },
    text: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      letterSpacing: '0.025em'
    },
    ripple: {
      position: 'absolute',
      borderRadius: '50%',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      transform: 'scale(0)',
      animation: isPressed ? 'ripple 0.3s ease-out' : 'none',
      pointerEvents: 'none'
    }
  }

  // Use the transparent button style
  const buttonStyle = {
    ...styles.button,
    backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
    border: isHovered ? '1px solid rgba(255, 255, 255, 0.5)' : '1px solid rgba(255, 255, 255, 0.3)',
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        setIsPressed(false)
      }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      style={buttonStyle}
      className={className}
    >
      {/* Arrow Icon */}
      <span style={styles.icon}>
        <svg 
          width="16" 
          height="16" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M10 19l-7-7m0 0l7-7m-7 7h18" 
          />
        </svg>
      </span>
      
      {/* Button Text */}
      <span style={styles.text}>
        {children}
      </span>
    </button>
  )
}