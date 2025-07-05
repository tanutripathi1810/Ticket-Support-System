import React from 'react';
import { useNavigate } from 'react-router-dom';

function Intro() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="intro-container">
      {/* Background with overlay */}
      <div className="intro-background"></div>
      <div className="intro-overlay"></div>
      
      {/* Content */}
      <div className="intro-content">
        <div className="intro-hero">
          <div className="intro-icon">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h1 className="intro-title">
            Welcome to Support Hub
          </h1>
          
          <p className="intro-subtitle">
            Your comprehensive solution for seamless support ticket management
          </p>
          <button
            onClick={handleGetStarted}
            className="intro-button"
          >
            <span>Get Started</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="intro-features">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Create Tickets</h3>
              <p>Submit support requests instantly with our intuitive ticket creation system</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3.9 5 4 4.1 5 4H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Track Progress</h3>
              <p>Monitor your ticket status and receive real-time updates on resolution progress</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7V10C2 16 6 20.5 12 22C18 20.5 22 16 22 10V7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>24/7 Support</h3>
              <p>Get assistance whenever you need it with our round-the-clock support team</p>
            </div>
          </div>
          
          
          
          <div className="intro-stats">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Tickets Resolved</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating particles animation */}
      
      
      <style jsx>{`
        .intro-container {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        
        
        
        
        
        
        .intro-content {
          position: relative;
          z-index: 10;
          text-align: center;
          color: white;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
        }
        
        
        
        .intro-icon {
          margin-bottom: 2rem;
          color: rgba(255, 255, 255, 0.9);
          animation: float 3s ease-in-out infinite;
        }
        
        .intro-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #fff, #e0e7ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          animation: titleGlow 2s ease-in-out infinite alternate;
        }
        
        .intro-subtitle {
          font-size: 1.3rem;
          margin-bottom: 3rem;
          opacity: 0.9;
          line-height: 1.6;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .intro-features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }
        
        .feature-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
          animation: slideInUp 0.8s ease-out;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .feature-icon {
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1rem;
        }
        
        .feature-card h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: #fff;
          font-weight: 600;
        }
        
        .feature-card p {
          opacity: 0.9;
          line-height: 1.6;
        }
        
        .intro-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: linear-gradient(45deg, #ff6b6b, #ee5a24);
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
          margin-bottom: 3rem;
          animation: pulse 2s infinite;
        }
        
        .intro-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(255, 107, 107, 0.4);
          background: linear-gradient(45deg, #ff5252, #d84315);
        }
        
        .intro-button:active {
          transform: translateY(-1px);
        }
        
        .intro-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
        }
        
        .stat-item {
          text-align: center;
          animation: fadeIn 1s ease-out 0.5s both;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .particles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          animation: particleFloat 8s infinite linear;
        }
        
        .particle:nth-child(1) {
          left: 10%;
          animation-delay: 0s;
          animation-duration: 8s;
        }
        
        .particle:nth-child(2) {
          left: 20%;
          animation-delay: 1s;
          animation-duration: 10s;
        }
        
        .particle:nth-child(3) {
          left: 30%;
          animation-delay: 2s;
          animation-duration: 12s;
        }
        
        .particle:nth-child(4) {
          left: 70%;
          animation-delay: 3s;
          animation-duration: 9s;
        }
        
        .particle:nth-child(5) {
          left: 80%;
          animation-delay: 4s;
          animation-duration: 11s;
        }
        
        .particle:nth-child(6) {
          left: 90%;
          animation-delay: 5s;
          animation-duration: 13s;
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes titleGlow {
          0% { text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3); }
          100% { text-shadow: 0 4px 30px rgba(255, 255, 255, 0.2); }
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        
        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }
        
        @media (max-width: 768px) {
          .intro-title {
            font-size: 2.5rem;
          }
          
          .intro-subtitle {
            font-size: 1.1rem;
          }
          
          .intro-features {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .feature-card {
            padding: 1.5rem;
          }
          
          .intro-stats {
            gap: 2rem;
          }
          
          .stat-number {
            font-size: 2rem;
          }
          
          .intro-content {
            padding: 1rem;
          }
        }
        
        @media (max-width: 480px) {
          .intro-title {
            font-size: 2rem;
          }
          
          .intro-button {
            padding: 0.8rem 2rem;
            font-size: 1.1rem;
          }
          
          .intro-stats {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default Intro;