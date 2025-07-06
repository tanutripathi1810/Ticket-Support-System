const path = require('path')
const express = require('express')
const dotenv = require('dotenv').config()

console.log('MONGODB_URI:', process.env.MONGODB_URI)
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')
const cors = require('cors'); 
const PORT = process.env.PORT || 5000

// Connect to DB
connectDB()

const app = express()

// CORS Configuration - FIXED VERSION
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'https://ticket-support-system-git-main-tanus-projects-90fd2059.vercel.app',
      'http://localhost:3000',
      'http://localhost:3001',
       // Add any custom domains
    ];
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'Authorization',
    'Cache-Control',
    'Pragma'
  ],
  optionsSuccessStatus: 200
}));

// Handle preflight requests
app.options('*', cors());

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// ROUTES
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

// serve front end
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to Support Ticketing System API' })
  })
}

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`.yellow.bold))